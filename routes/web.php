<?php

use App\Http\Controllers\Admin\AdminGoogleSocialiteController;
use App\Http\Controllers\AdminApprovalController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\GoogleSocialiteController;
use App\Http\Controllers\Auth\FacebookLoginController;
use App\Http\Controllers\Auth\LinkedInController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\AvatarController;
use App\Http\Controllers\ChildController;
use App\Http\Controllers\ChurchController;
use App\Http\Controllers\ChurchHistoryController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\DailyReadingController;
use App\Http\Controllers\MembershipController;
use App\Models\Membership;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserRoleController;
use App\Http\Controllers\YouTubeController;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => ['web', 'IdentifyTenant']], function () {
    // Auth::routes(); // Includes registration routes
});


Route::middleware(['auth:admin', 'role:super-admin'])->group(function () {
    Route::get('/admin/approvals', [AdminApprovalController::class, 'index'])->name('admin.approval.index');
    Route::post('/admin/approvals/{admin}/approve', [AdminApprovalController::class, 'approve'])->name('admin.approval.approve');
});


Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('welcome');


Route::get('auth/google', [GoogleSocialiteController::class, 'redirectToGoogle']);
Route::get('auth/google/callback', [GoogleSocialiteController::class, 'handleCallback']);

Route::get('auth/facebook', [FacebookLoginController::class, 'redirectToFacebook']);
Route::get('auth/facebook/callback', [FacebookLoginController::class, 'handleFacebookCallback']);
Route::get('auth/linkedin', [LinkedInController::class, 'redirectToLinkedIn'])->name('auth.linkedin');
Route::get('auth/linkedin/callback', [LinkedInController::class, 'handleLinkedInCallback']);

Route::get('/', function () {
    return Inertia::render('LandingPage/Landing');
})->name('landing');


// Route to membership application page
// Route::middleware(['auth'])->group(function () {

    Route::get('/membership/form', function () {
        return Inertia::render('Registration/MultiStepperForm/MultiStepForm');
    })->name('membership.form');

    Route::get('/membership/form/success', function () {
        return Inertia::render('Registration/MultiStepperForm/Steps/Success');
    })->name('membership.form.success');

    Route::get('/member/dashboard', function () {
        return Inertia::render('Dashboards/Member/MemberDashboard');
    })->name('member.dashboard');

    Route::get('/profile', function () {
        return Inertia::render('/Profile/ProfilePage');
    })->name('profile');

    Route::get('/form/child', function () {
        return Inertia::render('Registration/FamilyForm/ChildForm/ChildMembershipForm');
    })->name('child.form');

    Route::get('/form/child/success', function () {
        return Inertia::render('Registration/FamilyForm/ChildForm/ChildFormSteps/ChildSuccess');
    })->name('child.form.success');

    Route::get('/membership-id', [MembershipController::class, 'getMembershipId']);
    Route::get('/memberships/{id}/children', [MembershipController::class, 'getChildren']);
    Route::get('/memberships/{id}/spouse', [MembershipController::class, 'getSpouse']);


    Route::get('/member/groups', function () {
        return Inertia::render('Groups/MemberGroups');
    })->name('member.groups');

    Route::get('/member/children', function () {
        return Inertia::render('Family/Children');
    })->name('member.children');

    Route::get('/member/spouse', function () {
        return Inertia::render('Family/Spouse');
    })->name('member.spouse');

    Route::get('/messages', function () {
        return Inertia::render('Messages/Messages');
    })->name('messages');

    Route::get('/member/events', function () {
        return Inertia::render('Events/EventsMember');
    })->name('member.events');

    Route::get('/calendar/gregorian', function () {
        return Inertia::render('Calendar/GregorianCalendar');
    })->name('calendar.gregorian');


    Route::get('/church', function () {
        return Inertia::render('Church/Church');
    });
// });


Route::get('/daily-readings', [DailyReadingController::class, 'index']);
Route::post('/daily-readings', [DailyReadingController::class, 'store']);
Route::get('/daily-readings/{date}', [DailyReadingController::class, 'show']);
Route::put('/daily-readings/{date}', [DailyReadingController::class, 'update']);




Route::apiResource('users', RegisteredUserController::class);
Route::apiResource('memberships', MembershipController::class);
Route::apiResource('avatars', AvatarController::class);
Route::apiResource('children', ChildController::class);



Route::post('/membership/complete', [MembershipController::class, 'complete'])->name('membership.complete');
Route::middleware(['auth'])->group(function () {
    Route::post('/memberships', [MembershipController::class, 'store'])->name('membership.upload');
    Route::post('/upload-avatar', [AvatarController::class, 'uploadImageToSpaces'])->name('avatar.upload');
    Route::post('/store-avatar-path', [AvatarController::class, 'store'])->name('avatar.store');
    Route::post('/courses', [CourseController::class, 'store'])->name('courses.upload');
    Route::post('/church-history', [ChurchHistoryController::class, 'store'])->name('church.history.upload');


    Route::post('/child/register', [ChildController::class, 'store'])->name('child.register');
    Route::post('/memberships/link-spouses', [MembershipController::class, 'linkSpouses']);
    Route::post('/memberships/verify', [MembershipController::class, 'verifyMembershipId']);

    Route::post('/churches', [ChurchController::class, 'store'])->name('church.store');

    // ========================================= EVENTS =========================================
    Route::post('/events/{event}/check-in', [EventController::class, 'checkIn']);
    Route::post('/events/{event}/check-out', [EventController::class, 'checkOut']);
    // Route::post('/events/{event}/assign-group', [GroupController::class, 'assignToEvent']);
    Route::get('/events/{event}', [EventController::class, 'show']);
    Route::get('/events/member/{event}', [EventController::class, 'memberView']);
    Route::get('/events/{eventId}/members', [EventController::class, 'getEventGroupMembers']);



    Route::get('/event/attendance', function () {
        return Inertia::render('Events/AttendancePage');
    })->name('event.attendance');

    Route::get('/event/member/attendance', function () {
        return Inertia::render('Events/MemberAttendancePage');
    })->name('event.member.attendance');


    Route::get('/events', [EventController::class, 'index']);
    Route::get('/groups', [GroupController::class, 'index']);
    Route::get('/groups/{group}', [GroupController::class, 'show'])->name('groups.show');
    Route::get('/youtube-videos', [YouTubeController::class, 'getChannelVideos']);


    // ========================================= ROLES =========================================
    Route::post('/roles', [RoleController::class, 'store']);
    Route::post('/roles/{role}/permissions', [RoleController::class, 'assignPermissions']);

});


Route::get('/csrf-token', function () {
    return csrf_token();
});



// Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Route for processing the donation through Stripe
    Route::post('/create_donation_intent', [DonationController::class, 'donate'])->name('donation.intent');
    Route::get('/donation/checkout', function () {
        return Inertia::render('Donation/DonationSteps/Checkout', [
            'auth' => [
                'user' => optional(Auth::user())->only(['id', 'name', 'email']),
            ]
        ]);
    })->name('donations.checkout');
// });


//###################### DONATIONS #############################################################
// Route to show donation form or donation options

Route::get('/donations', function () {
    return Inertia::render('Donation/Donation');
})->name('donations');

// Route for handling the success redirect from Stripe
Route::get('/donation/success', [DonationController::class, 'success'])->name('donation.success');
Route::get('donation/success_page', function () {
    return Inertia::render('Donation/SuccessPage');
})->name('donation.successPage');

// Optional: Route for handling the cancel redirect from Stripe
Route::get('/donation/cancel', function () {
    return redirect()->route('donate')->with('error', 'Donation was cancelled.');
})->name('donation.cancel');

// Route for Stripe webhook (make sure to adjust the verification as needed)
Route::post('/webhook/stripe', [DonationController::class, 'webhook'])->name('stripe.webhook');


Route::get('/.well-known/apple-developer-merchantid-domain-association', function () {
    return response()->file(
        public_path('.well-known/apple-developer-merchantid-domain-association')
    );
});


require __DIR__ . '/auth.php';
require __DIR__ . '/admin-auth.php';
