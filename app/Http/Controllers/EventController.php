<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRequests\StoreEventRequest;
use App\Http\Requests\UpdateRequests\UpdateEventRequest;
use App\Models\Event;
use App\Models\Membership;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Event::with('groups')->get(); // Eager load the related groups
        return response()->json($events);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(StoreEventRequest $request)
    // {
    //     $event = Event::create($request->all());


    //     // Attach groups to the event
    //     if ($request->has('selected_groups')) {
    //         $event->groups()->attach($request->selected_groups);
    //     }

    //     return response()->json(['message' => 'Event created successfully', 'event' => $event]);

    // }

    public function store(Request $request)
    {
        try {
            $data = $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'nullable|string',
                'image_url' => 'nullable|string',
                'date' => 'nullable|string',
                'start_time' => 'nullable|string',
                'end_time' => 'nullable|string',
                'selected_groups' => 'array',
                'selected_groups.*' => 'integer',
                'attendees_type' => 'nullable|string|max:255',
                'visibility' => 'nullable|string|max:255',
                'location' => 'nullable|string|max:255',
                'repeat' => 'nullable|string|max:255',
                'manager' => 'nullable|string|max:255',
                'day_of_the_week' => 'nullable|string|max:255',
                'day_of_the_month' => 'nullable|string|max:255',
                'date_of_the_year' => 'nullable|string|max:255',
            ]);

            $event = Event::create($data);

            if (!empty($data['selected_groups'])) {
                $event->groups()->sync($data['selected_groups']);
            }

            return response()->json(['message' => 'Event created successfully', 'event' => $event]);
        } catch (\Exception $e) {
            Log::error('Error storing event: ' . $e->getMessage(), [
                'request_data' => $request->all(),
                'exception' => $e
            ]);
            return response()->json(['message' => 'Error creating event: ' . $e->getMessage()], 500);
        }
    }


    // public function checkIn(Request $request, $eventId)
    // {
    //     $event = Event::findOrFail($eventId);
    //     $attendee = $event->attendees()->where('user_id', $request->user_id)->first();

    //     if ($attendee) {
    //         $attendee->pivot->checked_in_at = true;
    //         $attendee->pivot->save();

    //         return response()->json(['message' => 'Attendee checked in successfully']);
    //     }

    //     return response()->json(['message' => 'Attendee not found'], 404);
    // }

    // public function getEventGroupMembers($eventId)
    // {
    //     $event = Event::with('groups.members')->findOrFail($eventId); // Eager load groups and their members

    //     $members = collect();
    //     foreach ($event->groups as $group) {
    //         // Merge all members of each group into a single collection
    //         // Ensure each member is listed only once using unique()
    //         $members = $members->merge($group->members)->unique('id');
    //     }

    //     return response()->json($members);
    // }

    public function getEventGroupMembers($eventId)
    {
        $event = Event::with('groups.members.avatar')->findOrFail($eventId); // Eager load groups and their members, including avatars

        $members = collect();
        foreach ($event->groups as $group) {
            // Ensure each member is listed only once using unique()
            // Use 'values()' to reindex the collection after 'unique()'
            $members = $members->merge($group->members)->unique('id')->values();
        }

        return response()->json($members->map(function ($member) {
            return [
                'id' => $member->id,
                'first_name' => $member->first_name,
                'email' => $member->email,
                'image_url' => $member->avatar ? $member->avatar->image_url : 'resources/js/assets/images/users/user.png', // Assuming the avatar relationship and url field exist
            ];
        }));
    }

    public function checkInFromQRCode(Request $request, $eventId)
    {
        try {
            $event = Event::findOrFail($eventId);
            $user = auth()->user(); // Get the authenticated user

            // Check if the user has a valid membership
            $membership = Membership::where('user_id', $user->id)->where('status', 'active')->first();
            if (!$membership) {
                return response()->json(['message' => 'No active membership found'], 403);
            }

            // Check if the user is already checked in
            if ($event->attendees()->where('membership_id', $membership->id)->exists()) {
                return response()->json(['message' => 'Already checked in'], 409);
            }

            // Register check-in
            $event->attendees()->attach($membership->id, ['checked_in_at' => now()]);

            return response()->json(['message' => 'Checked in successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error checking in: ' . $e->getMessage()], 500);
        }
    }




    public function checkIn(Request $request, $eventId)
    {
        Log::info('Request Data:', $request->all());

        try {
            $event = Event::with('groups.members')->findOrFail($eventId);
            $membership = Membership::findOrFail($request->membership_id);

            // First, ensure the pivot entry exists
            if (!$event->attendees()->where('membership_id', $request->membership_id)->exists()) {
                $event->attendees()->attach($request->membership_id, ['checked_in_at' => now()]);
                return response()->json(['message' => 'Attendee added and checked in successfully']);
            }

            // Update the existing pivot entry
            $checkedIn = $event->attendees()->updateExistingPivot($request->membership_id, [
                'checked_in_at' => now(),
            ]);

            // Log::info('Event :', ['event' => $event]);
            // Log::info('Membership :', ['membership' => $membership]);
            // Log::info('Checked In:', ['checked' => $checkedIn]);

            if ($checkedIn == 0) {
                return response()->json(['message' => 'No update needed or member not found'], 400);
            }

            return response()->json(['message' => 'Attendee checked in successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error: ' . $e->getMessage()], 500);
        }
    }

    public function checkOut(Request $request, $eventId)
    {
        Log::info('Checkout Request Data:', $request->all());

        try {
            $event = Event::findOrFail($eventId);
            $membership = Membership::findOrFail($request->membership_id);

            // Check if the attendee is already checked in
            if (!$event->attendees()->where('membership_id', $request->membership_id)->wherePivot('checked_in_at', '!=', null)->exists()) {
                return response()->json(['message' => 'Attendee not checked in or does not exist'], 400);
            }

            // Delete the pivot table entry
            $event->attendees()->detach($request->membership_id);

            return response()->json(['message' => 'Attendee checked out successfully and entry deleted']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error: ' . $e->getMessage()], 500);
        }
    }


    // public function checkOut(Request $request, $eventId)
    // {
    //     Log::info('Checkout Request Data:', $request->all());

    //     try {
    //         $event = Event::findOrFail($eventId);
    //         $membership = Membership::findOrFail($request->membership_id);

    //         // Check if the attendee is already checked in
    //         if (!$event->attendees()->where('membership_id', $request->membership_id)->wherePivot('checked_in_at', '!=', null)->exists()) {
    //             return response()->json(['message' => 'Attendee not checked in or does not exist'], 400);
    //         }

    //         // Update the pivot table to set checked_in_at to null
    //         $checkedOut = $event->attendees()->updateExistingPivot($request->membership_id, [
    //             'checked_in_at' => null,
    //         ]);

    //         Log::info('Event :', ['event' => $event]);
    //         Log::info('Membership :', ['membership' => $membership]);
    //         Log::info('Checked Out:', ['checked' => $checkedOut]);

    //         if ($checkedOut == 0) {
    //             return response()->json(['message' => 'No checkout needed or member not found'], 400);
    //         }

    //         return response()->json(['message' => 'Attendee checked out successfully']);
    //     } catch (\Exception $e) {
    //         return response()->json(['message' => 'Error: ' . $e->getMessage()], 500);
    //     }
    // }


    public function getAbsentees($eventId)
    {
        $event = Event::with('groups.attendees')->findOrFail($eventId);
        $absentees = collect();

        foreach ($event->groups as $group) {
            foreach ($group->attendees as $attendee) {
                if (is_null($attendee->pivot->checked_in_at)) {
                    $absentees->push($attendee);
                }
            }
        }

        return response()->json(['absentees' => $absentees]);
    }

    
    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        // Optionally, load related data if needed
        $event->load('groups', 'attendees');

        return Inertia::render('Events/EventDetails', [
            'event' => $event
        ]);
        // Return the event details as a JSON response
        // return response()->json($event);
    }
    public function memberView(Event $event)
    {
        // Optionally, load related data if needed
        return Inertia::render('Events/EventDetailsMember', [
            'event' => $event
        ]);
        // Return the event details as a JSON response
        // return response()->json($event);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEventRequest $request, Event $event)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        //
    }
}
