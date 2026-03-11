<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;


class AdminApprovalController extends Controller
{
    public function show(Admin $admin)
    {
        return view('admin.approval', ['admin' => $admin]);
    }

    public function approve(Admin $admin, Request $request)
    {
        $admin->update(['is_approved' => true]);

        return redirect()->route('admin.approval.list')->with('status', 'Admin approved successfully.');
    }
}

