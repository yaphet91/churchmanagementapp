<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRequests\StoreDonationRequest;
use App\Http\Requests\UpdateRequests\UpdateDonationRequest;
use App\Http\Controllers\Controller;
use App\Models\Donation;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Support\Facades\Auth;
use \Stripe\Stripe;
use \Stripe\Checkout\Session;
use Illuminate\Support\Str;
use Stripe\PaymentIntent;
use Illuminate\Support\Facades\Log; 

class DonationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        
    }
    /**
     * Show the form for creating a new resource.
     */
    public function donate(StoreDonationRequest $request)
    {
        // Initialize Stripe with your secret key
        Stripe::setApiKey(env('STRIPE_SECRET_KEY'));

        if (!Auth::check()) {
            return redirect()->route('login')->with('error', 'Please login to make a donation.');
        }

        // Get the authenticated user's ID
        // $userId = Auth::id();
        // At this point, Laravel has already validated the input
        // and you can access validated data directly
        $validated = $request->validated();
        $amount = $validated['amount'];
        // Generate a unique reference for this donation session
        $donationReference = Str::uuid()->toString();

        try {
            $paymentIntent = PaymentIntent::create([
                'amount' => $amount * 100, // Convert amount to cents
                'currency' => 'aed',
                'metadata' => [
                    'donation_reference' => $donationReference,
                    // 'user_id' => Auth::id(), // Store user ID in metadata
                    'reason_of_donation' => $validated['reason_of_donation'],
                    'description' => $validated['description'] ?? 'No description provided', // Optional description
                ],
            ]);

            // $donation = new Donation([
            //     'user_id' => 'Auth::id()',
            //     'donor_name' => Auth::user()->name,
            //     'amount' => $amount,  // Use a hardcoded amount
            //     'reason_of_donation' => $validated['reason_of_donation'],
            //     'payment_method' => 'apple',
            //     'status' => 'pending',
            //     'description' => $validated['description'],
            //     'session_id' => $paymentIntent->id,  // Use a hardcoded session ID
            //     'donation_date' => now()
            // ]);
            // $donation->save();

            return response()->json(['clientSecret' => $paymentIntent->client_secret]);

        } catch (\Exception $e) {

            return response()->json(['error' => 'Error creating payment intent: ' . $e->getMessage()], 500);

        }

    }

    /**
     * Store a newly created resource in storage.
     */
    public function success(Request $request)
    {
        $intentId = $request->query('intent_id');
        Log::info('Received intent ID: ' . $intentId);

        Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
        $intent = PaymentIntent::retrieve($intentId);

        if ($intent->status === 'succeeded') {
            $donation = Donation::where('session_id', $intentId)->first();

            if ($donation) {
                $donation->status = 'completed';
                $donation->amount_received = $intent->amount_received; // Make sure this column exists
                $donation->save();
                Log::info('Donation status updated to completed for session_id: ' . $intentId);
            } else {
                Log::warning('No donation found with session_id: ' . $intentId);
            }

            return redirect()->route('donation.successPage');
        } else {
            Log::error('Payment not successful for intent_id: ' . $intentId);
            return response()->json(['error' => 'Payment not successful'], 400);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(Donation $donation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Donation $donation)
    {
        //
    }

    public function webhook(Request $request)
    {
        // This is your Stripe CLI webhook secret for testing your endpoint locally.
        $endpoint_secret = env('STRIPE_WEBHOOK_SECRET');

        // $payload = @file_get_contents('php://input');
        // $sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];
        $event = null;

        $payload = $request->getContent();
        $sig_header = $request->header('Stripe-Signature');
        $endpoint_secret = config('services.stripe.webhook_secret');


        try {
            $event = \Stripe\Webhook::constructEvent(
                $payload, 
                $sig_header, 
                $endpoint_secret);
        } catch (\UnexpectedValueException $e) {
            // Invalid payload
            return response()->json(['error' => 'Invalid payload.'], 400);
        } catch (\Stripe\Exception\SignatureVerificationException $e) {
            // Invalid signature
            return response()->json(['error' => 'Invalid signature.'], 400);
        }
        catch (\Exception $e) {
            return response()->json(['error' => 'Webhook Error: ' . $e->getMessage()], 400);
        }


        if ($event->type == 'checkout.session.completed') {
            $session = $event->data->object;
            // Handle post-donation logic here (e.g., mark donation as completed)
            $donation = Donation::where('session_id', $session->id)->first();
            if ($donation && $donation->status === 'pending') {
                $donation->status = 'completed';
                $donation->save();

                // Optionally, send a thank-you email to the donor
                $this->sendThankYouEmail($donation);
            }
        } else {
            return response()->json(['message' => 'Received unknown event type ' . $event->type], 400);
        }

        return response()->json(['message' => 'Webhook handled'], 200);
    }


    protected function sendThankYouEmail($donation)
    {
        // Implement this method to send a thank-you email to the donor
        // You can access the donor's email through the $donation model, assuming it's stored there
    }

}
