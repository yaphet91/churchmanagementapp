<?php

namespace App\Models;

use App\Models\Traits\BelongsToTenant;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;
        // use BelongsToTenant;


    protected $fillable = [
        'tenant_id',
        'title', 
        'avatar',
        'description',
        'visibility',
    ];

    // public function members()
    // {
    //     return $this->belongsToMany(Membership::class, 'group_members')->withPivot('role', 'joined_at');
    // }

    public function events()
    {
        return $this->belongsToMany(Event::class, 'event_groups')->withTimestamps();
    }

    public function members()
    {
        return $this->belongsToMany(Membership::class, 'group_members', 'group_id', 'membership_id')->withPivot('role');
    }

    // Get all admins in the group
    public function admins()
    {
        return $this->members()->wherePivot('role', 'admin');
    }
    
}
