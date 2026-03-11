<?php

namespace App\Models;

use App\Models\Traits\BelongsToTenant;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
        // use BelongsToTenant;


    protected $fillable = [
        'tenant_id',
        'title',
        'description',
        'image_url',
        'date',
        'start_time',
        'end_time',
        'selected_groups',
        'attendees_type',
        'visibility',
        'location',
        'repeat',
        'manager',
        'day_of_the_week',
        'day_of_the_month',
        'date_of_the_year',
    ];
    
    protected $casts = [
        'selected_groups' => 'array',
    ];

    public function church () {
        return $this->belongsTo(Church::class);
    }

    public function attendees()
    {
        return $this->belongsToMany(Membership::class, 'event_attendees')->withPivot('checked_in_at')->withTimestamps();
    }
  

    public function groups()
    {
        return $this->belongsToMany(Group::class, 'event_groups')->withTimestamps();
    }

    public function managers()
    {
        return $this->belongsToMany(Membership::class, 'event_managers')->withTimestamps();
    }
}
