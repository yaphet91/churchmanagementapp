<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Membership;
use App\Models\Avatar;
use App\Models\ChurchHistory;
use App\Models\Course;
use Illuminate\Support\Facades\Log;

class MembershipSeeder extends Seeder
{
    private const MIN_ADULT_MEMBERS = 20;
    private const MAX_ADULT_MEMBERS = 50;

    public function run()
    {
        $recordsToCreate = random_int(self::MIN_ADULT_MEMBERS, self::MAX_ADULT_MEMBERS);

        Membership::factory()
        ->count($recordsToCreate)
        ->create()
        ->each(function ($membership) {
            try {
                Avatar::create([
                    'user_id' => $membership->user_id,
                    'membership_id' => $membership->id,
                    'image_url' => 'http://example.com/avatar.png',
                    'image_size' => 150,
                ]);

                ChurchHistory::create([
                    'membership_id' => $membership->id,
                    'selected_sacraments' => ['baptism', 'confirmation'],
                    'selected_church_service' => ['choir', 'usher'],
                    'not_served_in_church' => false,
                    'diocese' => 'Asmara',
                    'church' => 'St. Joseph',
                    'church_not_listed' => false,
                    'is_new_church_submitted' => false,
                    'priest_in_eritrea' => 'Father John Doe',
                    
                ]);

                Course::create([
                    'membership_id' => $membership->id,
                    'living_with_christ' => true,
                    'orthodoxy_teaching_of_salvation' => true,
                    'introduction_to_orthodoxy' => true,
                    'seven_sacrament_of_church' => true,
                    'comparative_theology' => true,
                    'five_church_pillars_of_mystery' => true,
                    'historical_bible_study' => true,
                    'universal_church_history' => true,
                    'spiritual_quite_time' => true,
                    'church_canons_and_rites' => true,
                    'repentance' => true,
                    'spiritual_service' => true,
                    'introduction_to_geez' => true,
                    'christian_discipline' => true,
                    ]);


            } catch (\Exception $e) {
                // Log the error or output it
                Log::error("Failed to create avatar for membership {$membership->id}: " . $e->getMessage());
            }
        });
    }
}
