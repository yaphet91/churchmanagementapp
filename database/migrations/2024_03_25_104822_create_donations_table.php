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
        Schema::create('donations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('donor_name');
            $table->decimal('amount', 10, 2);
            $table->string('reason_of_donation');
            $table->string('payment_method')->nullable();
            $table->string('status')->default('pending');
            $table->text('description')->nullable();
            $table->string('session_id')->default('pend3434343ing');
            $table->dateTime('donation_date');
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
        Schema::dropIfExists('donations');
    }
};
