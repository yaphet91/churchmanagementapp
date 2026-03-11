<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VerificationCode extends Model
{
    protected $fillable = ['phone_number', 'code', 'expires_at'];

    public $timestamps = true;

    public function isExpired()
    {
        return $this->expires_at->isPast();
    }
}