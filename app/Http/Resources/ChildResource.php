<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ChildResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'imageUrl' => $this->image_url,
            'imageSize' => $this->image_size,
            'firstName' => $this->first_name,
            'fatherName' => $this->father_name,
            'grandFatherName' => $this->grand_father_name,
            'firstNameT' => $this->first_name_t,
            'fatherNameT' => $this->father_name_t,
            'grandFatherNameT' => $this->grand_father_name_t,
            'motherName' => $this->mother_name,
            'motherFullNameT' => $this->mother_full_name_t,
            'mothersFather' => $this->mothers_father,
            'gender' => $this->gender,
            'birthday' => $this->birthday,
            'nationality' => $this->nationality,
            'placeOfBirth' => $this->place_of_birth,
            'addressCountry' => $this->address_country,
            'currentAddress' => $this->current_address,
            'province' => $this->province,
            'city' => $this->city,
            'email' => $this->email,
            'countryPhoneCode' => $this->country_phone_code,
            'phone' => $this->phone,
            'whatsApp' => $this->whats_app,
            'emergencyContactNumber' => $this->emergency_contact_number,
            'contactRelation' => $this->contact_relation,
            'postalCode' => $this->postal_code,
            'firstLanguage' => $this->first_language,
            'secondLanguage' => $this->second_language,
            'hobbies' => $this->hobbies,
            'levelOfEducation' => $this->level_of_education,
            'fatherOfConfession' => $this->father_of_confession,
            'selected_sacraments' => $this->selected_sacraments,
            'selected_church_service' => $this->selected_church_service,
            'level1SundaySchool' => $this->level_1_sunday_school,
            'level2SundaySchool' => $this->level_2_sunday_school,
            'level3SundaySchool' => $this->level_3_sunday_school,
            'level4SundaySchool' => $this->level_4_sunday_school,
            'membershipId' => $this->membership_id,
        ];
    }
}
