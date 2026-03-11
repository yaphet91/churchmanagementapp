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
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('membership_id');
            $table->foreign('membership_id')->references('id')->on('memberships');
            // Add boolean fields
            $table->boolean('living_with_christ')->default(false);
            $table->boolean('orthodoxy_teaching_of_salvation')->default(false);
            $table->boolean('introduction_to_orthodoxy')->default(false);
            $table->boolean('seven_sacrament_of_church')->default(false);
            $table->boolean('comparative_theology')->default(false);
            $table->boolean('five_church_pillars_of_mystery')->default(false);
            $table->boolean('historical_bible_study')->default(false);
            $table->boolean('universal_church_history')->default(false);
            $table->boolean('spiritual_quite_time')->default(false);
            $table->boolean('church_canons_and_rites')->default(false);
            $table->boolean('repentance')->default(false);
            $table->boolean('spiritual_service')->default(false);
            $table->boolean('introduction_to_geez')->default(false);
            $table->boolean('christian_discipline')->default(false);
            
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
        Schema::dropIfExists('courses');
    }
};
