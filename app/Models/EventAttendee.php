<?php

namespace App\Models;

use App\Models\Traits\BelongsToTenant;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventAttendee extends Model
{
    use HasFactory;
        // use BelongsToTenant;


    protected $fillable = [
        'tenant_id',
        'event_id',
        'membership_id',
        'checked_in_at'
    ];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function members()
    {
        return $this->belongsTo(Membership::class);
    }
}
