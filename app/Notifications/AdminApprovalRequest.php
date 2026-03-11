<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;


class AdminApprovalRequest extends Notification
{
    use Queueable;
    
    protected $admin;

    public function __construct($admin)
    {
        $this->admin = $admin;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('New Admin Approval Request')
            ->line('A new admin has registered and needs your approval.')
            ->action('Review Admin', url('/admin/approval/' . $this->admin->id))
            ->line('Thank you for using our application!');
    }
}

