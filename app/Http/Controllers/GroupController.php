<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Group;
use App\Models\Membership;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class GroupController extends Controller
{

    public function index()
    {
        // Fetch all groups with the count of users
        $groups = Group::withCount('members')->get();

        return response()->json($groups);
    }


    public function show(Group $group)
    {
        // Eager load members when retrieving the group
        // $group->load('members');
        $group->load(['members', 'members.avatar']);


        return Inertia::render('Groups/GroupDetails', [
            'group' => $group
        ]);
    }

    public function create(Request $request)
    {
        $group = Group::create($request->all());
        return response()->json($group, 201);
    }


    public function addMember($groupId, Request $request)
    {
        try {
            $group = Group::findOrFail($groupId);
            $membershipIds = $request->members;  // Assuming these are membership IDs

            // Validate membership IDs
            $validMemberships = Membership::whereIn('id', $membershipIds)->get();
            if (count($validMemberships) !== count($membershipIds)) {
                return response()->json(['error' => 'One or more membership IDs are invalid'], 422);
            }

            // Attach memberships to the group
            foreach ($validMemberships as $membership) {
                $group->members()->attach($membership->user_id, ['role' => 'member']);  // Assuming the Membership model has a user_id
            }

            return response()->json(['message' => 'Members added successfully'], 200);
        } catch (\Exception $e) {
            Log::error('Failed to add members: ' . $e->getMessage(), [
                'group_id' => $groupId,
                'membership_ids' => $membershipIds
            ]);

            return response()->json(['error' => 'Failed to add members'], 500);
        }
    }



    public function listMembers($groupId)
    {
        $group = Group::with('members')->findOrFail($groupId);
        return response()->json($group->members);
    }

    public function assignToEvent(Request $request, $eventId)
    {
        $event = Event::findOrFail($eventId);
        $group = Group::findOrFail($request->group_id);

        $event->groups()->attach($group);

        // Attach users of the group as attendees to the event
        foreach ($group->users as $user) {
            $event->attendees()->attach($user);
        }

        return response()->json(['message' => 'Group assigned to event successfully']);
    }
}
