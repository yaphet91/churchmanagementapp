<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PreviousChurch extends Model
{
    use HasFactory;

    protected $fillable = [
        'church_name', 
        'membership_start', 
        'membership_end'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
}
