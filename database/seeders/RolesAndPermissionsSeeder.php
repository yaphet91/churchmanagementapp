<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
  public function run()
  {
    // Forget cached permissions to ensure the changes are applied
    app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

    // Create roles with guard name
    $superAdminRole = Role::firstOrCreate(['name' => 'super-admin', 'guard_name' => 'admin']);
    $adminRole = Role::firstOrCreate(['name' => 'admin', 'guard_name' => 'admin']);
    $editorRole = Role::firstOrCreate(['name' => 'editor', 'guard_name' => 'admin']);

    // Create permissions with guard name
    $approveAdmin = Permission::firstOrCreate(['name' => 'approve admin', 'guard_name' => 'admin']);
    $viewAdmin = Permission::firstOrCreate(['name' => 'view admin', 'guard_name' => 'admin']);
    $editAdmin = Permission::firstOrCreate(['name' => 'edit admin', 'guard_name' => 'admin']);
    $deleteAdmin = Permission::firstOrCreate(['name' => 'delete admin', 'guard_name' => 'admin']);
    $createAdmin = Permission::firstOrCreate(['name' => 'create admin', 'guard_name' => 'admin']);
    $editArticles = Permission::firstOrCreate(['name' => 'edit articles', 'guard_name' => 'admin']);
    $publishArticles = Permission::firstOrCreate(['name' => 'publish articles', 'guard_name' => 'admin']);

    // Assign permissions to roles
    $superAdminRole->givePermissionTo([$approveAdmin, $viewAdmin, $editAdmin, $deleteAdmin, $createAdmin, $editArticles, $publishArticles]);

    $adminRole->givePermissionTo([$editArticles, $publishArticles]);
    $editorRole->givePermissionTo($editArticles);

    // Optional: assign roles to users
    // $user = \App\Models\Admin::find(1);
    // $user->assignRole($superAdminRole);
  }
}
