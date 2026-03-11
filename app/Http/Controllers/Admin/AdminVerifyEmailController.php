<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Notification;
use App\Notifications\AdminApprovalRequest;

class AdminVerifyEmailController extends Controller
{
    /**
     * Mark the authenticated admin's email address as verified.
     */
    public function __invoke(EmailVerificationRequest $request): RedirectResponse
    {
        // if ($request->user('admin')->hasVerifiedEmail()) {
        //     return redirect()->intended(RouteServiceProvider::ADMIN_HOME . '?verified=1');
        // }

        if ($request->user('admin')->hasVerifiedEmail()) {
            return redirect()->intended(route('admin.dashboard') . '?verified=1');
        }

        if ($request->user('admin')->markEmailAsVerified()) {
            event(new Verified($request->user('admin')));

            // Notify super admins for approval using the Spatie roles
            $superAdmins = Admin::role('super-admin')->get();
            Notification::send($superAdmins, new AdminApprovalRequest($request->user('admin')));
        
        
        }
        return redirect()->intended(route('admin.dashboard') . '?verified=1');

        // return redirect()->intended(RouteServiceProvider::ADMIN_HOME . '?verified=1');
    }
}
