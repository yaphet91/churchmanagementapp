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
        Schema::create('church_histories', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('membership_id');
            $table->foreign('membership_id')->references('id')->on('memberships');

            $table->json('selected_sacraments');
            $table->json('selected_church_service');
            $table->boolean('not_served_in_church')->default(false);
            $table->string('diocese')->nullable();
            $table->string('church')->nullable();
            $table->boolean('church_not_listed')->default(false);
            $table->boolean('is_new_church_submitted')->default(false);
            $table->string('priest_in_eritrea');

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
        Schema::dropIfExists('church_histories');
    }
};
