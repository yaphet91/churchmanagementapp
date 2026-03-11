<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// this is for the current main church 

class Church extends Model
{
    use HasFactory;

    protected $fillable = [
        'church_name',
        'surrounding',
        'diocese',
        'church_name_prefix',
        'phone',
        'email',
        'address',
        'city',
        'country',
        'website',
        'facebook',
        'youtube',
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }


}
