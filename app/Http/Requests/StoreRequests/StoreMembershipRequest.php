<?php

namespace App\Http\Requests\StoreRequests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMembershipRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
        // return auth()->check();

    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // 'status' => ['required'],
            // 'type' => ['required|in:member,kid,deacon'],
            'title' => ['required', 'max:255'],
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
            'eritreaContact' => ['nullable'],
            'postalCode' => ['nullable'],
            'maritalStatus' => ['required'],
            'haveChildren' => ['required'],
            'childrenNumber' => ['nullable', 'integer'],
            'firstLanguage' => ['required', 'max:255'],
            'secondLanguage' => ['required', 'nullable', 'max:255'],
            'profession' => ['required'],
            'levelOfEducation' => ['required', 'nullable'],
            'fatherOfConfession' => ['required'],
            'spouseId' => ['nullable', 'integer']
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
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
            'whats_app' =>$this->whatsApp,
            'emergency_contact_number' => $this->emergencyContactNumber,
            'contact_relation' => $this->contactRelation,
            'eritrea_contact' => $this->eritreaContact,
            'postal_code' => $this->postalCode,
            'marital_status' => $this->maritalStatus,
            'have_children' => $this->haveChildren,
            'children_number' => $this->childrenNumber,
            'first_language' => $this->firstLanguage,
            'second_language' => $this->secondLanguage,
            'level_of_education' => $this->levelOfEducation,
            'father_of_confession' => $this->fatherOfConfession,
            'spouse_id' => $this->spouseId,
        ]);
    }
}
