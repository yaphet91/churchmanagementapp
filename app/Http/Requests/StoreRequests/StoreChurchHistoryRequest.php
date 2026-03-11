<?php

namespace App\Http\Requests\StoreRequests;

use Illuminate\Foundation\Http\FormRequest;

class StoreChurchHistoryRequest extends FormRequest
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
            'selectedSacraments' => ['sometimes', 'array'],
            'selectedChurchService' => ['sometimes', 'array'],
            'notServedInChurch' => ['sometimes', 'boolean'],
            'selectedDioceseCode' => ['sometimes', 'string', 'max:255'],
            'selectedChurchCode' => ['sometimes', 'string', 'max:255'],
            'churchNotListed' => ['sometimes', 'boolean'],
            'isNewChurchSubmitted' => ['sometimes', 'boolean'],
            'priestInEritrea' => ['required','string', 'max:355'],
        ];
    }

    public function prepareForValidation() {
        $this->merge([
            'membership_id' => $this->membershipId,
            'diocese' => $this->selectedDioceseCode,
            'church' => $this->selectedChurchCode,
            'selected_sacraments' => $this->selectedSacraments,
            'selected_church_service' => $this->selectedChurchService,
            'not_served_in_church' => $this->notServedInChurch,
            'church_not_listed' => $this->churchNotListed,
            'is_new_church_submitted' => $this->isNewChurchSubmitted,
            'priest_in_eritrea' => $this->priestInEritrea,
        ]);
    }
}
