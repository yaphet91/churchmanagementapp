<?php

namespace App\Models;

use App\Models\Traits\BelongsToTenant;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

        // use BelongsToTenant;

    protected $fillable = [
        'tenant_id',
        'membership_id',
        'living_with_christ',
        'orthodoxy_teaching_of_salvation',
        'introduction_to_orthodoxy',
        'seven_sacrament_of_church',
        'comparative_theology',
        'five_church_pillars_of_mystery',
        'historical_bible_study',
        'universal_church_history',
        'spiritual_quite_time',
        'church_canons_and_rites',
        'repentance',
        'spiritual_service',
        'introduction_to_geez',
        'christian_discipline'
    ];

    public function membership()
    {
        return $this->belongsTo(Membership::class);
    }

}
