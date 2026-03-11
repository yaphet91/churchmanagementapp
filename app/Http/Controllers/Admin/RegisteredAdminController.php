<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\AdminCollection;
use App\Http\Resources\AdminResource;
use App\Models\Admin;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class RegisteredAdminController extends Controller
{
    /**
     * Display a listing of the admins.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $admins = Admin::with('roles')->get();
        return new AdminCollection($admins);
    }

    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Admin/Auth/AdminRegister');
    }

    /**
     * Display the specified admin.
     *
     * @param  \App\Models\Admin  $admin
     * @return \App\Http\Resources\AdminResource
     */
    public function show(Admin $admin)
    {
        return new AdminResource($admin);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */

    public function store(Request $request): RedirectResponse|JsonResponse
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:admins,email',
            'phone' => 'required|string|max:255',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $admin = Admin::create([
            'title' => $request->title,
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
        ]);

        $admin->assignRole('admin'); // Or 'super-admin' based on logic

        event(new Registered($admin));

        Auth::guard('admin')->login($admin);

        if (!$admin->hasVerifiedEmail()) {
            return redirect()->route('admin.verification.notice');
        }

        // Return a JSON response with admin details if it's an API request
        if ($request->wantsJson()) {
            return response()->json([
                'admin' => new AdminResource($admin),
                'message' => 'Registration successful, and admin is logged in.',
            ]);
        }

        // ... rest of the code ...
        return redirect()->route('admin.dashboard')->with([
            'admin' => new AdminResource($admin),
            'message' => 'Registration successful, and admin is logged in.',
        ]);
    }

    // public function store(Request $request): RedirectResponse
    // {
    //     $request->validate([
    //         'title' => 'required|string|max:255',
    //         'name' => 'required|string|max:255',
    //         'email' => 'required|string|email|max:255|unique:admins,email',
    //         'phone' => 'required|string|max:255',
    //         'password' => ['required', 'confirmed', Rules\Password::defaults()],
    //     ]);

    //     $admin = Admin::create([
    //         'title' => $request->title,
    //         'name' => $request->name,
    //         'email' => $request->email,
    //         'phone' => $request->phone,
    //         'password' => Hash::make($request->password),
    //     ]);

    //     $admin->assignRole('admin'); // Or 'super-admin' based on logic

    //     event(new Registered($admin));

    //     Auth::guard('admin')->login($admin);

    //     if (!$admin->hasVerifiedEmail()) {
    //         return redirect()->route('admin.verification.notice');
    //     }

    //     // return redirect(RouteServiceProvider::ADMIN_HOME);
    //     return Inertia::render('Dashboards/Admin/AdminDashboard', [
    //         'admin' => [
    //             'id' => $admin->id,
    //             'name' => $admin->name,
    //             'email' => $admin->email,
    //         ],
    //         'message' => 'Login successful',
    //     ]);
    // }
}
