<?php

namespace App\Models;

use App\Models\Traits\BelongsToTenant;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Avatar extends Model
{
    use HasFactory;
        // use BelongsToTenant;


     protected $fillable = [
        'tenant_id',
        'user_id',
        'membership_id',
        'image_url',
        'image_size',
     ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function membership()
    {
        return $this->belongsTo(Membership::class);
    }


}
