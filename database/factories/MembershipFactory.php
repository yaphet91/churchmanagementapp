<?php

namespace Database\Factories;

use App\Models\Membership;
use Illuminate\Database\Eloquent\Factories\Factory;

class MembershipFactory extends Factory
{
    protected $model = Membership::class;

    public function definition()
    {
        // Determine the title
        $title = $this->faker->randomElement(['Deacon', 'Member']); // Add other titles if needed

        // Determine the prefix based on the title
        $prefix = ($title === 'Deacon') ? 'D' : 'M';

        // Get the last card number with the same prefix and increment it
        $lastCardNumber = Membership::where('card_number', 'like', $prefix . '%')->orderBy('card_number', 'desc')->first();
        $number = $lastCardNumber ? intval(substr($lastCardNumber->card_number, 1)) + 1 : 1;

        // Generate the card number
        $cardNumber = $prefix . str_pad($number, 5, "0", STR_PAD_LEFT);

        return [
            'user_id' => \App\Models\User::factory(),
            'title' => $title,
            'card_number' => $cardNumber,
            'first_name' => $this->faker->firstName,
            'father_name' => $this->faker->lastName,
            'grand_father_name' => $this->faker->lastName,
            'first_name_t' => $this->faker->firstName,
            'father_name_t' => $this->faker->lastName,
            'grand_father_name_t' => $this->faker->lastName,
            'mother_name' => $this->faker->firstNameFemale,
            'mother_full_name_t' => $this->faker->name('female'),
            'mothers_father' => $this->faker->name('male'),
            'gender' => $this->faker->randomElement(['male', 'female']),
            'birthday' => $this->faker->date(),
            'nationality' => $this->faker->country,
            'place_of_birth' => $this->faker->city,
            'address_country' => $this->faker->country,
            'current_address' => $this->faker->address,
            'province' => $this->faker->state,
            'city' => $this->faker->city,
            'email' => $this->faker->unique()->safeEmail,
            'country_phone_code' => $this->faker->numerify('+###'),
            'phone' => $this->faker->phoneNumber,
            'whats_app' => $this->faker->phoneNumber,
            'emergency_contact_number' => $this->faker->phoneNumber,
            'contact_relation' => $this->faker->word,
            'eritrea_contact' => $this->faker->phoneNumber,
            'postal_code' => $this->faker->postcode,
            'marital_status' => $this->faker->randomElement(['single', 'married', 'divorced']),
            'have_children' => $this->faker->boolean,
            'children_number' => $this->faker->numberBetween(0, 5),
            'first_language' => $this->faker->languageCode,
            'second_language' => $this->faker->languageCode,
            'profession' => $this->faker->jobTitle,
            'level_of_education' => $this->faker->randomElement(['None', 'Primary', 'Secondary', 'College', 'University']),
            'father_of_confession' => $this->faker->name,
            'spouse_id' => null  // You can modify this to link to another Membership or leave as null
        ];
    }
}
