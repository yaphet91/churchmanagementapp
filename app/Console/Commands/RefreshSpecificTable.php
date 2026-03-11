<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;

class RefreshSpecificTable extends Command
{
    /**
     * The name and signature of the console command.
     * php artisan db:refresh-table {table}
     * (ex) php artisan db:refresh-table users
     * @var string
     */
    protected $signature = 'db:refresh-table {table}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Drop and re-create a specific table';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $table = $this->argument('table');

        // Check if table exists and drop it
        if (Schema::hasTable($table)) {
            DB::statement('DROP TABLE IF EXISTS ' . $table);
            $this->info("Table '{$table}' has been dropped.");
        } else {
            $this->info("Table '{$table}' does not exist.");
        }

        // Find the migration file that creates the table
        $migrationPath = database_path('migrations');
        $migrationFiles = File::files($migrationPath);

        foreach ($migrationFiles as $file) {
            $contents = File::get($file);

            // Check if the migration file is responsible for creating the specified table
            if (str_contains($contents, "Schema::create('{$table}'")) {
                // Run the specific migration
                Artisan::call('migrate', [
                    '--path' => $file->getRelativePathname(),
                    '--realpath' => true,
                ]);
                $this->info("Table '{$table}' has been re-created.");
                return Command::SUCCESS;
            }
        }

        $this->error("Migration for table '{$table}' not found.");
        return Command::FAILURE;
    }
}


// namespace App\Console\Commands;

// use Illuminate\Console\Command;
// use Illuminate\Support\Facades\DB;
// use Illuminate\Support\Facades\Schema;
// use Illuminate\Support\Facades\Artisan;

// class RefreshSpecificTable extends Command
// {
//     /**
//      * The name and signature of the console command.
//      *
//      * @var string
//      */
//     protected $signature = 'db:refresh-table {table}';

//     /**
//      * The console command description.
//      *
//      * @var string
//      */
//     protected $description = 'Drop and re-create a specific table';

//     /**
//      * Execute the console command.
//      *
//      * @return int
//      */
//     public function handle()
//     {
//         $table = $this->argument('table');

//         if (Schema::hasTable($table)) {
//             DB::statement('DROP TABLE IF EXISTS ' . $table);
//             $this->info("Table '{$table}' has been dropped.");
//         } else {
//             $this->info("Table '{$table}' does not exist.");
//         }

//         // Run the migration for the specific table
//         Artisan::call('migrate', [
//             '--path' => '/database/migrations',
//             '--realpath' => true,
//         ]);

//         $this->info("Table '{$table}' has been refreshed.");
//         return Command::SUCCESS;
//     }
// }

