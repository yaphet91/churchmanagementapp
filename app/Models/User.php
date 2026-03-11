<?php

namespace App\Models;

use App\Models\Traits\BelongsToTenant;
use Illuminate\Contracts\Auth\MustVerifyEmail;

// use Illuminate\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

        // use BelongsToTenant;


    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    
    protected $fillable = [
        'tenant_id',
        'name',
        'email',
        'password',
        'google_id',
        'facebook_id',
        'linkedin_id',
        'has_completed_membership_form',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];
    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function church()
    {
        return $this->belongsTo(Church::class);
    }

    public function events()
    {
        return $this->belongsToMany(Event::class, 'attendances');
    }

    public function groups()
    {
        return $this->belongsToMany(Group::class);
    }

    public function donations()
    {
        return $this->hasMany(Donation::class);
    }

    public function membership()
    {
        return $this->hasOne(Membership::class);
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'role_user');
    }

    public function permissions()
    {
        return $this->roles->flatMap->permissions;
    }


    
}
