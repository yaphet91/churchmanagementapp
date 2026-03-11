<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DailyReading extends Model
{
    use HasFactory;

    // Specify the attributes that are mass assignable
    protected $fillable = [
        'date',
        'synaxarium',
        'epistelsOfPaul',
        'otherEpistle',
        'acts',
        'psalm',
        'gospel',
        'holyLiturgy'
    ];
}
