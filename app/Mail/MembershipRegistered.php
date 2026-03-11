<?php

namespace App\Mail;

use App\Models\Membership;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MembershipRegistered extends Mailable
{
    use Queueable, SerializesModels;

    public $membership;

    /**
     * Create a new message instance.
     *
     * @param Membership $membership
     */
    public function __construct(Membership $membership)
    {
        $this->membership = $membership;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Membership Registered')
            ->view('emails.membershipRegistered')
            ->with([
                'membershipId' => $this->membership->card_number,
                'userName' => $this->membership->first_name, // Adjusted to use `user->name` if related correctly
            ]);
    }
}
