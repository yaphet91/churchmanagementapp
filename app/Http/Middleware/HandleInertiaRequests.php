<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            // 'auth' => [
            //     'user' => $request->user(),
            // ],
            'auth' => [
                'user' => function () use ($request) {
                    return $request->user() ? array_merge(
                        $request->user()->only('id', 'name', 'email', 'has_completed_membership_form'),
                        [
                            'roles' => $request->user()->roles()->pluck('name'),
                            'permissions' => $request->user()->roles->flatMap(function ($role) {
                                return $role->permissions->pluck('name');
                            })->unique(),
                        ]
                    ) : null;
                },
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'flash' => [
                'success' => $request->session()->get('success'),
                'error' => $request->session()->get('error'),
            ],

        ];
    }
    // another way of doing it slight difference there ======
    // public function share(Request $request): array
    // {
    //     return array_merge(parent::share($request), [
    //         'auth' => [
    //             'user' => $request->user(),
    //         ],
    //         'ziggy' => function () {
    //             return array_merge((new Ziggy)->toArray(), ['location' => $request->url()]);
    //         },
    //         'flash' => [
    //             'success' => $request->session()->get('success'),
    //             'error' => $request->session()->get('error'),
    //         ],
    //     ]);
    // }
}
