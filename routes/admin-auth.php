<?php

use App\Http\Controllers\Admin\AdminAuthenticatedSessionController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminEmailVerificationNotificationController;
use App\Http\Controllers\Admin\AdminEmailVerificationPromptController;
use App\Http\Controllers\Admin\AdminGoogleSocialiteController;
use App\Http\Controllers\Admin\AdminVerifyEmailController;
use App\Http\Controllers\Admin\RegisteredAdminController;
use App\Http\Controllers\AdminApprovalController;
use App\Http\Controllers\AvatarController;
// use App\Http\Controllers\Admin\AdminEmailVerificationPromptController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\MembershipController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserRoleController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;




Route::get('/admin/approval/{admin}', [AdminApprovalController::class, 'show'])->name('admin.approval.show');
Route::post('/admin/approval/{admin}', [AdminApprovalController::class, 'approve'])->name('admin.approval.approve');



Route::prefix('admin')->name('admin.')->group(function () {
    // Routes for admin authentication
    Route::middleware('admin.guest')->group(function () {
        Route::get('register', [RegisteredAdminController::class, 'create'])->name('register');
        Route::post('register', [RegisteredAdminController::class, 'store']);

        Route::get('login', [AdminAuthenticatedSessionController::class, 'create'])->name('login');
        Route::post('login', [AdminAuthenticatedSessionController::class, 'store']);


        Route::get('/auth/google', [AdminGoogleSocialiteController::class, 'redirectToGoogle']);
        Route::get('/auth/google/callback', [AdminGoogleSocialiteController::class, 'handleCallback']);
    });

    // Routes requiring admin authentication
    Route::middleware(['auth:admin'])->group(function () {
        Route::post('logout', [AdminAuthenticatedSessionController::class, 'destroy'])->name('logout');

        // Admin Email Verification
        Route::get('verify-email', AdminEmailVerificationPromptController::class)
            ->name('verification.notice');

        Route::get('verify-email/{id}/{hash}', AdminVerifyEmailController::class)
            ->middleware(['signed', 'throttle:6,1'])
            ->name('verification.verify');

        Route::post('email/verification-notification', [AdminEmailVerificationNotificationController::class, 'store'])
            ->middleware('throttle:6,1')
            ->name('verification.send');

        // Route::post('email/verification-notification', function (Illuminate\Http\Request $request) {
        //     $request->user('admin')->sendEmailVerificationNotification();
        //     return back()->with('message', 'Verification link sent!');
        // })->middleware('throttle:6,1')->name('verification.send');
    });
});


// Route to admin dashboard page
// Route::middleware(['auth:admin', 'admin.approved'])->group(function () {
    Route::get('/admin/dashboard', [AdminDashboardController::class, 'dashboard'])->name('admin.dashboard');

    Route::get('/admin/profile', function () {
        return Inertia::render('Admin/Profile/AdminProfilePage');
    })->name('admin.profile');

    Route::get('/admin/people/adults', function () {
        return Inertia::render('People/Adults');
    })->name('people.adults');

    Route::get('/admin/people/children', function () {
        return Inertia::render('People/Children');
    })->name('people.children');


    Route::get('/admin/messages', [AdminDashboardController::class, 'messages'])->name('admin.messages');

    Route::get('/admin/groups', function () {
        return Inertia::render('Groups/AdminGroups');
    })->name('admin.groups');

    Route::get('/admin/form/adult', function () {
        return Inertia::render('Registration/FamilyForm/AdultForm/AdultMembershipForm');
    })->name('admin.form.adult');

    Route::get('/admin/form/child', function () {
        return Inertia::render('Registration/FamilyForm/ChildForm/AdminChildMembershipForm');
    })->name('admin.form.child');

    Route::get('/admin/roles', function () {
        return Inertia::render('Users&Roles/Roles');
    })->name('admin.roles');

    Route::get('/admin/users', function () {
        return Inertia::render('Users&Roles/Users');
    })->name('admin.users');

    Route::get('/admin/readings', function () {
        return Inertia::render('DailyReadings/AdminPostingPage');
    })->name('admin.readings');

    Route::get('admin/event/page/', function () {
        return Inertia::render('Events/EventsAdmin');
    })->name('event.page.admin');

    Route::prefix('/admin/api')->group(function () {
        Route::get('/dashboard-summary', [AdminDashboardController::class, 'dashboardSummaryApi']);
        Route::get('/messages', [AdminDashboardController::class, 'messagesApi']);
        Route::get('/groups', [GroupController::class, 'index']);
        Route::post('/groups', [GroupController::class, 'create']);
        Route::get('/roles', [RoleController::class, 'index']);
        Route::post('/roles', [RoleController::class, 'store'])->name('roles.store');
        Route::get('/events', [EventController::class, 'index']);
        Route::post('/events', [EventController::class, 'store']);
        Route::post('/upload-avatar', [AvatarController::class, 'uploadImageToSpaces']);
    });

    Route::get('/groups/{group}', [GroupController::class, 'show'])->name('groups.show');

    Route::post('/assign-role', [UserRoleController::class, 'assignRole'])->name('users.assignRole');
    Route::post('/revoke-role', [UserRoleController::class, 'revokeRole'])->name('users.revokeRole');

    // update membership
    Route::put('/admin/update-membership/{id}', [MembershipController::class, 'update'])->name('admin.update.membership');
    // delete membership
    Route::delete('/admin/delete-membership/{id}', [MembershipController::class, 'destroy'])->name('admin.delete.membership');


    // ========================================= GROUPS =========================================
    // Route::post('/groups/{group}/members', [GroupController::class, 'addMember']);
    Route::get('/groups/{group}/members', [GroupController::class, 'listMembers']);
    Route::post('/groups/{group}/addMembers', [GroupController::class, 'addMember'])->name('groups.addMembers');
// });
