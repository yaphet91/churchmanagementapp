<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description')->nullable();
            $table->string('image_url')->nullable();
            // $table->date('date')->index();
            // $table->string('start_time');
            // $table->string('end_time');
            $table->json('selected_groups')->nullable();
            // $table->string('attendees_type');
            // $table->string('visibility');
            // $table->string('location')->nullable();
            // $table->string('repeat')->nullable();
            // $table->string('manager')->nullable();
            // $table->string('day_of_the_week')->nullable();
            // $table->string('day_of_the_month')->nullable();
            // $table->string('date_of_the_year')->nullable();

            $table->enum('attendees_type', ['individuals', 'groups'])->default('groups'); // Assuming these are the possible values
            $table->enum('visibility', ['public', 'members', 'private'])->default('public'); // Example of visibility options
            $table->string('location', 255)->nullable();
            $table->enum('repeat', ['daily', 'weekly', 'monthly', 'yearly', 'none'])->nullable();
            $table->string('manager', 255)->nullable();
            $table->string('day_of_the_week', 10)->nullable();
            $table->string('day_of_the_month', 2)->nullable();
            $table->string('date_of_the_year', 5)->nullable();
            
            // $table->unsignedBigInteger('tenant_id')->index();
            $table->unsignedBigInteger('tenant_id')->nullable()->index();

            $table->foreign('tenant_id')->references('id')->on('tenants')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
