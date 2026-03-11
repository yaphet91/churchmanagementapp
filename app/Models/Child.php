<?php

namespace App\Models;

use App\Models\Traits\BelongsToTenant;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Child extends Model
{
    use HasFactory;
        // use BelongsToTenant;

    protected $fillable = [
        'tenant_id',
        'user_id',
        'image_url',
        'image_size',
        'first_name',
        'father_name',
        'grand_father_name',
        'first_name_t',
        'father_name_t',
        'grand_father_name_t',
        'mother_name',
        'mother_full_name_t',
        'mothers_father',
        'gender',
        'birthday',
        'nationality',
        'place_of_birth',
        'address_country',
        'current_address',
        'province',
        'city',
        'email',
        'country_phone_code',
        'phone',
        'whats_app',
        'emergency_contact_number',
        'contact_relation',
        'postal_code',
        'first_language',
        'second_language',
        'hobbies',
        'level_of_education',
        'father_of_confession',
        'selected_sacraments',
        'selected_church_service',
        'level_1_sunday_school',
        'level_2_sunday_school',
        'level_3_sunday_school',
        'level_4_sunday_school',
        'membership_id'
    ];

    protected $casts = [
        'selected_sacraments' => 'array',
        'selected_church_service' => 'array',
        // other fields can also be casted as needed
    ];

    public function membership()
    {
        return $this->belongsTo(Membership::class);
    }

    // protected static function boot()
    // {
    //     parent::boot();

    //     static::creating(function ($child) {
    //         // Generate a unique church card ID with "KS" prefix and 5 numbers
    //         do {
    //             $randomNumber = mt_rand(10000, 99999); // Generate a random number between 10000 and 99999
    //             $churchIdCard = 'M' . $randomNumber; // Prefix the number with "KS"
    //         } while (self::where('id_card', $churchIdCard)->exists()); // Check uniqueness

    //         $child->id_card = $churchIdCard; // Assign the unique ID
    //     });
    // }
}

