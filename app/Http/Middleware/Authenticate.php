<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    protected function redirectTo(Request $request): ?string
    {
        // Check if the request path starts with 'admin'
        if ($request->is('admin/*')) {
            // Redirect to admin login if the route is an admin route
            return route('admin.login');
        }

        // Default to user login for all other routes
        return $request->expectsJson() ? null : route('login');
    }
}
