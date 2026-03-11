<?php

namespace App\Http\Requests\StoreRequests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEventRequest extends FormRequest
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
            'title' => ['required', 'max:225'],
            'description' => ['sometimes', 'string'],
            'image_url' => ['sometimes', 'url'],
            // 'date' => ['required', 'date', 'date_format:M j, Y'], // Adjusted for your date format
            // 'start_time' => ['required', 'string'],
            // 'end_time' => ['required', 'string'],
            'selected_groups' => ['array'],
            'attendees_type' => ['required', 'string'],
            'visibility' => ['required', 'string'],
            'location' => ['sometimes', 'string'],
            'repeat' => ['sometimes', 'string'],
            'manager' => ['sometimes', 'string'],
            'day_of_the_week' => ['sometimes', 'string'],
            'day_of_the_month' => ['sometimes', 'string'],
            'date_of_the_year' => ['sometimes', 'string'],
        ];
    }
}
