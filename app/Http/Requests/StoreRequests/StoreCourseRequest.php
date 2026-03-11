<?php

namespace App\Http\Requests\StoreRequests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCourseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'membershipId' => ['required', 'integer'],
            'livingWithChrist' => ['required', 'boolean'],
            'orthodoxyTeachingOfSalvation' => ['required', 'boolean'],
            'introductionToOrthodoxy' => ['required', 'boolean'],
            'sevenSacramentOfChurch' => ['required', 'boolean'],
            'comparativeTheology' => ['required', 'boolean'],
            'fiveChurchPillarsOfMystery' => ['required', 'boolean'],
            'historicalBibleStudy' => ['required', 'boolean'],
            'universalChurchHistory' => ['required', 'boolean'],
            'spiritualQuiteTime' => ['required', 'boolean'],
            'churchCanonsAndRites' => ['required', 'boolean'],
            'repentance' => ['required', 'boolean'],
            'spiritualService' => ['required', 'boolean'],
            'introductionToGeez' => ['required', 'boolean'],
            'christianDiscipline' => ['required', 'boolean'],
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'membership_id' => $this->membershipId,
            'living_with_christ' => $this->livingWithChrist,
            'orthodoxy_teaching_of_salvation' => $this->orthodoxyTeachingOfSalvation,
            'introduction_to_orthodoxy' => $this->introductionToOrthodoxy,
            'seven_sacrament_of_church' => $this->sevenSacramentOfChurch,
            'comparative_theology' => $this->comparativeTheology,
            'five_church_pillars_of_mystery' => $this->fiveChurchPillarsOfMystery,
            'historical_bible_study' => $this->historicalBibleStudy,
            'universal_church_history' => $this->universalChurchHistory,
            'spiritual_quite_time' => $this->spiritualQuiteTime,
            'church_canons_and_rites' => $this->churchCanonsAndRites,
            'spiritual_service' => $this->spiritualService,
            'introduction_to_geez' => $this->introductionToGeez,
            'christian_discipline' => $this->christianDiscipline,
        ]);
    }
}
