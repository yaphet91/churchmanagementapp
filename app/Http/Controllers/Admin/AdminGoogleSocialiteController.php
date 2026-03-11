<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\Admin;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Exception;

class AdminGoogleSocialiteController extends Controller
{
    /**
     * Redirect the admin to Google's authentication page.
     *
     * @return \Illuminate\Http\Response
     */
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * Handle the callback from Google.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleCallback()
    {
        try {
            $googleUser = Socialite::driver('google')->user();

            // Attempt to find the admin by email only, as this ensures the admin is registered.
            $findAdmin = Admin::where('email', $googleUser->email)->first();

            if ($findAdmin) {
                // If the admin is found but doesn't have google_id stored, update it.
                if (empty($findAdmin->google_id)) {
                    $findAdmin->google_id = $googleUser->id;
                    $findAdmin->save();
                }
                Auth::guard('admin')->login($findAdmin);

                // Redirect to the admin dashboard
                return redirect()->intended('/admin/dashboard');
            } else {
                // If no admin is found with the email, deny access.
                return redirect('/admin/login')->with('error', 'Your email is not registered as an admin.');
            }
        } catch (Exception $e) {
            Log::error('Google login failed: ' . $e->getMessage());
            return redirect('/admin/login')->with('error', 'Failed to login with Google. Please try again.');
        }
    }
}
