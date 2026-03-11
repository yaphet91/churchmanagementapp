<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ChurchHistoryResource extends JsonResource
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
            'membershipId' => $this->membership_id,
            'selectedSacraments' => $this->selected_sacraments,
            'selectedChurchService' => $this->selected_church_service,
            'notServedInChurch' => $this->not_served_in_church,
            'diocese' => $this->diocese,
            'church' => $this->church,
            'churchNotListed' => $this->church_not_listed,
            'isNewChurchSubmitted' => $this->is_new_church_submitted,
            'priestInEritrea' => $this->priest_in_eritrea,
        ];
    }
}
