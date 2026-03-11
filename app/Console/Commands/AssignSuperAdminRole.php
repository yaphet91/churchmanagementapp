<?php

namespace App\Console\Commands;

use App\Models\Admin;
use Illuminate\Console\Command;

class AssignSuperAdminRole extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    // protected $signature = 'app:assign-super-admin-role';
    protected $signature = 'role:assign-super-admin {email}';

    /**
     * The console command description.
     *
     * @var string
     */
    // protected $description = 'Command description';
    protected $description = 'Assign the super admin role to an admin user by email';


    /**
     * Execute the console command.
     */
    //  use the below command to assign super admin role to an admin user by email
    
    //  php artisan role:assign-super-admin your_email@example.com

    public function handle()
    {
        $email = $this->argument('email');
        $admin = Admin::where('email', $email)->first();

        if (!$admin) {
            $this->error('Admin user not found.');
            return Command::FAILURE;
        }

        $admin->assignRole('super-admin');
        $this->info('Super admin role assigned successfully.');

        return Command::SUCCESS;
    }
}
