<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserRoleController extends Controller
{
    public function assignRole(Request $request)
    {
        $validatedData = $request->validate([
            'role_name' => 'required|string|exists:roles,name',
            'user_id' => 'required|integer|exists:users,id',
        ]);

        $user = User::find($validatedData['user_id']);
        $user->assignRole($validatedData['role_name']);

        return redirect()->back()->with('message', 'Role assigned successfully!');
    }

    public function revokeRole(Request $request)
    {
        $validatedData = $request->validate([
            'role_name' => 'required|string|exists:roles,name',
            'user_id' => 'required|integer|exists:users,id',
        ]);

        $user = User::find($validatedData['user_id']);
        $user->removeRole($validatedData['role_name']);

        return redirect()->back()->with('message', 'Role revoked successfully!');
    }
}
