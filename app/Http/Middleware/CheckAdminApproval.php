<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckAdminApproval
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        // if (!auth()->guard('admin')->user()->is_approved) {
        //     return redirect()->route('admin.verification.notice')->with('error', 'Your account is pending approval.');
        // }

        return $next($request);
    }
}
