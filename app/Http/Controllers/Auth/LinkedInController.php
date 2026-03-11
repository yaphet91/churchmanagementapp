<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
class LinkedInController extends Controller
{
    public function redirectToLinkedIn()
    {
        return Socialite::driver('linkedin')->redirect();
    }

    public function handleLinkedInCallback()
    {
        $user = Socialite::driver('linkedin')->user();

        $finduser = User::where('linkedin_id', $user->id)->first();

        if ($finduser) {
            Auth::login($finduser);
            return redirect('/dashboard');
        } else {
            $newUser = User::create([
                'name' => $user->name,
                'email' => $user->email,
                'linkedin_id' => $user->id,
                // You might want to add more fields here
                'password' => encrypt('linkedin')
            ]);

            Auth::login($newUser);
            return redirect('/dashboard');
        }
    }
}
