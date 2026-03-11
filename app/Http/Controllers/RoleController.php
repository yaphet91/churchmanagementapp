<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class RoleController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:roles,name',
            'permissions' => 'array',
            'permissions.*' => 'exists:permissions,name'
        ]);

        $role = Role::create(['name' => $request->name]);
        $permissions = Permission::whereIn('name', $request->permissions)->get();
        $role->givePermissionTo($permissions);

        return response()->json(['message' => 'Role created and permissions assigned successfully.', 'role' => $role]);
    }

    public function edit(Role $role)
    {
        return response()->json(['role' => $role->load('permissions')]);
    }

    public function update(Request $request, Role $role)
    {
        $request->validate([
            'name' => 'required|unique:roles,name,' . $role->id,
            'permissions' => 'array',
            'permissions.*' => 'exists:permissions,name'
        ]);

        $role->update(['name' => $request->name]);
        $permissions = Permission::whereIn('name', $request->permissions)->get();
        $role->syncPermissions($permissions);

        return response()->json(['message' => 'Role updated and permissions assigned successfully.', 'role' => $role]);
    }

    public function destroy(Role $role)
    {
        $role->delete();

        return response()->json(['message' => 'Role deleted successfully.']);
    }

    public function assignPermissions(Request $request, Role $role)
    {
        $request->validate([
            'permissions' => 'array',
            'permissions.*' => 'exists:permissions,name'
        ]);

        $permissions = Permission::whereIn('name', $request->permissions)->get();
        $role->givePermissionTo($permissions);

        return response()->json(['message' => 'Permissions assigned to role successfully.', 'role' => $role]);
    }

    public function revokePermissions(Request $request, Role $role)
    {
        $request->validate([
            'permissions' => 'array',
            'permissions.*' => 'exists:permissions,name'
        ]);

        $permissions = Permission::whereIn('name', $request->permissions)->get();
        $role->revokePermissionTo($permissions);

        return response()->json(['message' => 'Permissions revoked from role successfully.', 'role' => $role]);
    }

    public function syncPermissions(Request $request, Role $role)
    {
        $request->validate([
            'permissions' => 'array',
            'permissions.*' => 'exists:permissions,name'
        ]);

        $permissions = Permission::whereIn('name', $request->permissions)->get();
        $role->syncPermissions($permissions);

        return response()->json(['message' => 'Permissions synced with role successfully.', 'role' => $role]);
    }

    public function attachPermissions(Request $request, Role $role)
    {
        $request->validate([
            'permissions' => 'array',
            'permissions.*' => 'exists:permissions,name'
        ]);

        $permissions = Permission::whereIn('name', $request->permissions)->get();
        $role->attachPermissions($permissions);

        return response()->json(['message' => 'Permissions attached to role successfully.', 'role' => $role]);
    }

    public function detachPermissions(Request $request, Role $role)
    {
        $request->validate([
            'permissions' => 'array',
            'permissions.*' => 'exists:permissions,name'
        ]);

        $permissions = Permission::whereIn('name', $request->permissions)->get();
        $role->detachPermissions($permissions);

        return response()->json(['message' => 'Permissions detached from role successfully.', 'role' => $role]);
    }



}

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
