<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class CheckPermission
{
    public function handle($request, Closure $next, $permission = null)
    {
        // If no permission is explicitly provided, determine it dynamically
        if (!$permission) {
            $permission = $this->determinePermissionFromRoute($request);
        }

        // Check if the user has the required permission
        if (!Auth::user() || !Auth::user()->can($permission)) {
            abort(403, 'Unauthorized access.');
        }

        return $next($request);
    }

    protected function determinePermissionFromRoute($request)
    {
        // Example logic to determine permission based on the route name
        return $request->route()->getName(); // You can customize this logic
    }
}
