<?php

namespace App\Http\Requests\StoreRequests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAvatarRequest extends FormRequest
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
            'imageUrl' => ['required', 'string'],
            'imageSize' => ['nullable', 'integer'],
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'membership_id' => $this->membershipId,
            'image_url' => $this->imageUrl,
            'image_size' => $this->imageSize,
        ]);
    }
}
