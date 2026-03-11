<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Twilio\Rest\Client;
use App\Models\User;
use App\Models\VerificationCode;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\ValidationException;
use Carbon\Carbon;

class PhoneVerificationController extends Controller
{
    protected $twilio;

    public function __construct()
    {
        $this->twilio = new Client(env('TWILIO_SID'), env('TWILIO_AUTH_TOKEN'));
    }

    public function sendVerificationCode(Request $request)
    {
        $request->validate([
            'phone_number' => 'required|numeric',
        ]);

        // Throttle requests: allow 1 per minute
        $throttleKey = 'send-verification-code:' . $request->ip();
        if (RateLimiter::tooManyAttempts($throttleKey, 1)) {
            throw ValidationException::withMessages([
                'phone_number' => ['Too many requests. Please try again later.'],
            ]);
        }
        RateLimiter::hit($throttleKey, 60); // Lock for 60 seconds

        $code = random_int(1000, 9999); // Secure random code

        // Store code and expiration in the database
        VerificationCode::updateOrCreate(
            ['phone_number' => $request->phone_number],
            ['code' => $code, 'expires_at' => Carbon::now()->addMinutes(5)]
        );

        // Send SMS via Twilio
        $this->twilio->messages->create(
            $request->phone_number,
            [
                'from' => env('TWILIO_PHONE_NUMBER'),
                'body' => "Your verification code is: $code"
            ]
        );

        return response()->json(['message' => 'Verification code sent']);
    }

    public function verifyCode(Request $request)
    {
        $request->validate([
            'code' => 'required|numeric',
        ]);

        $verification = VerificationCode::where('phone_number', session('phone_number'))
            ->where('code', $request->code)
            ->first();

        if ($verification && !$verification->isExpired()) {
            // Mark phone number as verified
            $user = Auth::user();
            $user->phone_verified_at = now();
            $user->phone_number = $verification->phone_number;
            $user->save();

            $verification->delete(); // Remove used code

            return response()->json(['message' => 'Phone number verified successfully']);
        }

        return response()->json(['error' => 'Invalid or expired verification code'], 422);
    }
}
