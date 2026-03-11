<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\Tenant;
use Illuminate\Support\Facades\Auth;

class IdentifyTenant
{
    public function handle($request, Closure $next)
    {
        // $host = $request->getHost();
        // $tenant = Tenant::where('domain', $host)->first();

        // if (!$tenant) {
        //     abort(404, 'Tenant not found.');
        // }

        // // Bind the tenant to the application instance
        // app()->instance('tenant', $tenant);

        // // Optionally set the tenant_id on the authenticated user
        // if (Auth::check()) {
        //     Auth::user()->tenant_id = $tenant->id;
        // }

        return $next($request);
    }
}
