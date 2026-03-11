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
        Schema::create('children', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('membership_id');
            $table->foreign('membership_id')->references('id')->on('memberships');
            
            $table->string('image_url');
            $table->integer('image_size');

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
            $table->string('postal_code')->nullable();
            $table->string('first_language');
            $table->string('second_language')->nullable();
            $table->string('hobbies');
            $table->string('level_of_education');
            $table->string('father_of_confession')->nullable();

            $table->json('selected_sacraments');
            $table->json('selected_church_service');
            
            $table->boolean('level_1_sunday_school')->default(false);
            $table->boolean('level_2_sunday_school')->default(false);
            $table->boolean('level_3_sunday_school')->default(false);
            $table->boolean('level_4_sunday_school')->default(false);

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
        Schema::dropIfExists('children');
    }
};
