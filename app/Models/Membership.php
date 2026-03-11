<?php

namespace App\Models;

use App\Models\Traits\BelongsToTenant;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Membership extends Model
{
    use HasFactory, Notifiable;

        // use BelongsToTenant;


    protected $fillable = [
        'tenant_id',
        'user_id',
        'card_number',
        'status',
        'title',
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
        'eritrea_contact',
        'postal_code',
        'marital_status',
        'have_children',
        'children_number',
        'first_language',
        'second_language',
        'profession',
        'level_of_education',
        'father_of_confession',
        'spouse_id'

    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }
    // public function groups()
    // {
    //     return $this->belongsToMany(Group::class, 'group_members')->withPivot('role', 'joined_at');
    // }
    public function groups()
    {
        return $this->belongsToMany(Group::class, 'group_member', 'member_id', 'group_id')->withPivot('role');
    }

    public function children()
    {
        return $this->hasMany(Child::class, 'membership_id');
    }

    public function avatar()
    {
        return $this->hasOne(Avatar::class);
    }

    public function spouse()
    {
        return $this->belongsTo(Membership::class, 'spouse_id');
    }

    public function managedEvents()
    {
        return $this->belongsToMany(Event::class, 'event_managers')->withTimestamps();
    }

    public function events()
    {
        return $this->belongsToMany(Event::class, 'event_attendees')->withPivot('checked_in_at')->withTimestamps();
    }


    protected static function boot()
    {
        parent::boot();

        static::creating(function ($membership) {
            $prefix = ($membership->title === 'Deacon') ? 'D' : 'M';

            // Get the last card number with the same prefix and increment it
            $lastCardNumber = self::where('card_number', 'like', $prefix . '%')->orderBy('card_number', 'desc')->first();
            $number = $lastCardNumber ? intval(substr($lastCardNumber->card_number, 1)) + 1 : 1;

            // Assign the new card number to the membership
            $membership->card_number = $prefix . str_pad($number, 5, "0", STR_PAD_LEFT);
        });
    }


}
