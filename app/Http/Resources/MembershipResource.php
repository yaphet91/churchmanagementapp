<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MembershipResource extends JsonResource
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
            'title' => $this->title,
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
            'eritreaContact' => $this->eritrea_contact,
            'postalCode' => $this->postal_code,
            'maritalStatus' => $this->marital_status,
            'haveChildren' => $this->have_children,
            'childrenNumber' => $this->children_number,
            'firstLanguage' => $this->first_language,
            'secondLanguage' => $this->second_language,
            'profession' => $this->profession,
            'levelOfEducation' => $this->level_of_education,
            'fatherOfConfession' => $this->father_of_confession,      
        ];
    }
}
