<?php

namespace App\Models;

use App\Models\Traits\BelongsToTenant;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    use HasFactory;
        // use BelongsToTenant;


    protected $fillable = [
        'tenant_id',
        'user_id',
        'donor_name',
        'amount',
        'reason_of_donation',
        'payment_method',
        'status',
        'description',
        'session_id',
        'donation_date'

    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
