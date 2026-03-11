<?php

namespace App\Models;

use App\Models\Traits\BelongsToTenant;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Priest extends Model
{
    use HasFactory;
        // use BelongsToTenant;


    protected $fillable = [
        'tenant_id',
        'name',
        'email',
        'phone',
        'address',
        'date_of_ordination',
    ];
}
