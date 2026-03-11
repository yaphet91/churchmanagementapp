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
        Schema::create('memberships', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('status')->default('active');
            // $table->string('type')->default('member');
            $table->string('card_number')->nullable();
            $table->string('title');
            $table->string('first_name');
            $table->string('father_name');
            $table->string('grand_father_name');
            $table->string('first_name_t');
            $table->string('father_name_t');
            $table->string('grand_father_name_t');
            $table->string('mother_name');
            $table->string('mother_full_name_t');
            $table->string('mothers_father');
            $table->string('gender');
            $table->string('birthday');
            $table->string('nationality');
            $table->string('place_of_birth')->nullable();
            $table->string('address_country');
            $table->string('current_address');
            $table->string('province')->nullable();
            $table->string('city');
            $table->string('email');
            $table->string('country_phone_code');
            $table->string('phone');
            $table->string('whats_app')->nullable();
            $table->string('emergency_contact_number');
            $table->string('contact_relation');
            $table->string('eritrea_contact')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('marital_status');
            $table->string('have_children');
            $table->string('children_number')->default(0);
            $table->string('first_language');
            $table->string('second_language')->nullable();
            $table->string('profession');
            $table->string('level_of_education');
            $table->string('father_of_confession')->nullable();
            $table->unsignedBigInteger('spouse_id')->nullable();
            $table->foreign('spouse_id')->references('id')->on('memberships')->onDelete('set null');

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
        Schema::dropIfExists('memberships');
    }
};
