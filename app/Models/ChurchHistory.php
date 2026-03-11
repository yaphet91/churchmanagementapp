<?php

namespace App\Models;

use App\Models\Traits\BelongsToTenant;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChurchHistory extends Model
{
    use HasFactory;
        // use BelongsToTenant;



     protected $fillable = [
        'tenant_id',
        'membership_id',
        'selected_sacraments',
        'selected_church_service',
        'not_served_in_church',
        'diocese',
        'church',
        'church_not_listed',
        'is_new_church_submitted',
        'priest_in_eritrea',
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
}
