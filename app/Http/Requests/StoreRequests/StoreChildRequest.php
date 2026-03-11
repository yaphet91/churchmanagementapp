<?php

namespace App\Http\Requests\StoreRequests;

use Illuminate\Foundation\Http\FormRequest;

class StoreChildRequest extends FormRequest
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
            'imageUrl' => ['required'],
            'imageSize' => ['required', 'integer'],
            'firstName' => ['required', 'max:255'],
            'fatherName' => ['required', 'max:255'],
            'grandFatherName' => ['required', 'max:255'],
            'firstNameT' => ['required', 'max:255'],
            'fatherNameT' => ['required', 'max:255'],
            'grandFatherNameT' => ['required', 'max:255'],
            'motherName' => ['required', 'max:255'],
            'motherFullNameT' => ['required', 'max:255'],
            'mothersFather' => ['required', 'max:255'],
            'gender' => ['required'],
            'birthday' => ['required'],
            'nationality' => ['required'],
            'placeOfBirth' => ['required', 'max:255'],
            'addressCountry' => ['required'],
            'currentAddress' => ['required'],
            'province' => ['nullable', 'max:255'],
            'city' => ['required', 'max:255'],
            'email' => ['required', 'max:255', 'email'],
            'countryPhoneCode' => ['required'],
            'phone' => ['required'],
            'whatsApp' => ['nullable'],
            'emergencyContactNumber' => ['required'],
            'contactRelation' => ['required', 'max:30'],
            'postalCode' => ['nullable'],
            'firstLanguage' => ['required', 'max:255'],
            'secondLanguage' => ['nullable', 'max:255'],
            'hobbies' => ['nullable', 'max:225'],
            'levelOfEducation' => ['nullable'],
            'fatherOfConfession' => ['nullable'],
            'selectedSacraments' => ['nullable', 'array'],
            'selectedChurchService' => ['nullable', 'array'],
            'level1SundaySchool' => ['nullable', 'boolean'],
            'level2SundaySchool' => ['nullable', 'boolean'],
            'level3SundaySchool' => ['nullable', 'boolean'],
            'level4SundaySchool' => ['nullable', 'boolean'],
        ];
    }

    /**
     * Prepare the data for validation.
     */
    public function prepareForValidation()
    {
        $this->merge([
            'membership_id' => $this->membershipId,
            'image_url' => $this->imageUrl,
            'image_size' => $this->imageSize,
            'first_name' => $this->firstName,
            'father_name' => $this->fatherName,
            'grand_father_name' => $this->grandFatherName,
            'first_name_t' => $this->firstNameT,
            'father_name_t' => $this->fatherNameT,
            'grand_father_name_t' => $this->grandFatherNameT,
            'mother_name' => $this->motherName,
            'mother_full_name_t' => $this->motherFullNameT,
            'mothers_father' => $this->mothersFather,
            'place_of_birth' => $this->placeOfBirth,
            'address_country' => $this->addressCountry,
            'current_address' => $this->currentAddress,
            'country_phone_code' => $this->countryPhoneCode,
            'whats_app' => $this->whatsApp,
            'emergency_contact_number' => $this->emergencyContactNumber,
            'contact_relation' => $this->contactRelation,
            'postal_code' => $this->postalCode,
            'first_language' => $this->firstLanguage,
            'second_language' => $this->secondLanguage,
            'level_of_education' => $this->levelOfEducation,
            'father_of_confession' => $this->fatherOfConfession,
            'selected_sacraments' => $this->selectedSacraments,
            'selected_church_service' => $this->selectedChurchService,
            'level_1_sunday_school' => $this->level1SundaySchool,
            'level_2_sunday_school' => $this->level2SundaySchool,
            'level_3_sunday_school' => $this->level3SundaySchool,
            'level_4_sunday_school' => $this->level4SundaySchool,
        ]);
    }
}
