<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Child;
use App\Models\Event;
use App\Models\Group;
use App\Models\Membership;
use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class AdminDashboardController extends Controller
{
    public function dashboard(): Response
    {
        return Inertia::render('Dashboards/Admin/AdminDashboard', [
            'admin' => $this->resolveAdmin(),
            'summary' => $this->dashboardSummary(),
        ]);
    }

    public function messages(): Response
    {
        return Inertia::render('Messages/AdminMessages', [
            'admin' => $this->resolveAdmin(),
            'messageSummary' => $this->messageSummary(),
        ]);
    }

    public function dashboardSummaryApi()
    {
        return response()->json($this->dashboardSummary());
    }

    public function messagesApi()
    {
        return response()->json($this->messageSummary());
    }

    private function resolveAdmin(): array
    {
        $admin = auth('admin')->user() ?: Admin::query()->latest()->first();

        if ($admin) {
            return [
                'id' => $admin->id,
                'name' => $admin->name,
                'email' => $admin->email,
            ];
        }

        return [
            'id' => null,
            'name' => 'Local Admin',
            'email' => 'local-admin@example.com',
        ];
    }

    private function dashboardSummary(): array
    {
        return [
            'totals' => [
                'members' => Membership::count(),
                'children' => Child::count(),
                'users' => User::count(),
                'admins' => Admin::count(),
                'groups' => Group::count(),
                'events' => Event::count(),
                'roles' => Role::count(),
            ],
            'recentMembers' => Membership::query()
                ->latest()
                ->take(5)
                ->get(['id', 'card_number', 'first_name', 'father_name', 'grand_father_name', 'email', 'phone', 'created_at']),
            'recentGroups' => Group::query()
                ->withCount('members')
                ->latest()
                ->take(5)
                ->get(['id', 'title', 'visibility', 'created_at']),
            'recentEvents' => Event::query()
                ->latest()
                ->take(5)
                ->get(['id', 'title', 'location', 'date', 'start_time', 'end_time', 'created_at']),
        ];
    }

    private function messageSummary(): array
    {
        return [
            'totals' => [
                'membersWithEmail' => Membership::query()->whereNotNull('email')->where('email', '!=', '')->count(),
                'membersWithPhone' => Membership::query()->whereNotNull('phone')->where('phone', '!=', '')->count(),
                'usersWithEmail' => User::query()->whereNotNull('email')->where('email', '!=', '')->count(),
                'missingContactInfo' => Membership::query()
                    ->where(function ($query) {
                        $query->whereNull('email')->orWhere('email', '');
                    })
                    ->where(function ($query) {
                        $query->whereNull('phone')->orWhere('phone', '');
                    })
                    ->count(),
            ],
            'recentRecipients' => Membership::query()
                ->latest()
                ->take(10)
                ->get(['id', 'card_number', 'first_name', 'father_name', 'grand_father_name', 'email', 'phone', 'created_at']),
        ];
    }
}
