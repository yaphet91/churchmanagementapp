<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\AdminLoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Route;


class AdminAuthenticatedSessionController extends Controller
{
    public function create(): Response
    {
        // return Inertia::render('Admin/Auth/AdminLogin');

        return Inertia::render('Admin/Auth/AdminLogin', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    // public function store(AdminLoginRequest $request)
    // {
    //     $request->authenticate();

    //     $request->session()->regenerate();

    //     return redirect()->intended(RouteServiceProvider::ADMIN_HOME);
    // }
    public function store(AdminLoginRequest $request)
    {
        // Authenticate the admin
        $request->authenticate();

        // Regenerate the session to prevent fixation attacks
        $request->session()->regenerate();

        // Retrieve authenticated admin details
        $admin = Auth::guard('admin')->user();

        Log::info('Admin logged in', ['email' => $admin->email]);

        // Use Inertia to render the dashboard with admin data
        return Inertia::render('Dashboards/Admin/AdminDashboard', [
            'admin' => [
                'id' => $admin->id,
                'name' => $admin->name,
                'email' => $admin->email,
            ],
            'message' => 'Login successful',
        ]);
    }

    // public function store(Request $request)
    // {
    //     $request->validate([
    //         'email' => 'required|email',
    //         'password' => 'required',
    //     ]);

    //     if (Auth::guard('admin')->attempt($request->only('email', 'password'))) {
    //         $request->session()->regenerate();
    //         return redirect('/admin/dashboard');
    //     }

    //     return back()->withErrors([
    //         'email' => 'The provided credentials do not match our records.',
    //     ]);
    // }

    public function destroy(Request $request)
    {
        Auth::guard('admin')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/admin/login');
    }
}

