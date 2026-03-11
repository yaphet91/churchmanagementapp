<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRequests\StoreMembershipRequest;
use App\Http\Requests\UpdateRequests\UpdateMembershipRequest;
use App\Http\Resources\MembershipCollection;
use App\Http\Resources\MembershipResource;
use App\Mail\MembershipRegistered;
use App\Models\Membership;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Log;

class MembershipController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $memberships = Membership::all();
            return new MembershipCollection($memberships);
        } catch (Exception $e) {
            Log::error('Failed to retrieve memberships', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Failed to retrieve memberships'], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMembershipRequest $request)
    {
        try {
            $data = $request->all();
            $data['user_id'] = auth()->id();  // Retrieve the currently authenticated user's ID

            // Automatically fill tenant_id from the current tenant context
            // $tenant = app('tenant');
            // $data['tenant_id'] = $tenant->id;
            
            $membership = Membership::create($data);

            // Send registration email
            Mail::to($membership->user->email)->send(new MembershipRegistered($membership));

            return response()->json([
                'message' => 'Membership created successfully.',
                'membership' => $membership
            ], 201);
        } catch (Exception $e) {
            Log::error('Failed to create membership', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Failed to create membership'], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Membership $membership)
    {
        try {
            return new MembershipResource($membership);
        } catch (Exception $e) {
            Log::error('Failed to retrieve membership', ['membership_id' => $membership->id, 'error' => $e->getMessage()]);
            return response()->json(['message' => 'Failed to retrieve membership'], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMembershipRequest $request, Membership $membership)
    {
        try {
            $membership->update($request->validated());

            return response()->json([
                'message' => 'Membership updated successfully.',
                'membership' => $membership
            ], 200);
        } catch (Exception $e) {
            Log::error('Failed to update membership', ['membership_id' => $membership->id, 'error' => $e->getMessage()]);
            return response()->json(['message' => 'Failed to update membership'], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Membership $membership)
    {
        try {
            $membership->delete();

            return response()->json(['message' => 'Membership deleted successfully.'], 200);
        } catch (Exception $e) {
            Log::error('Failed to delete membership', ['membership_id' => $membership->id, 'error' => $e->getMessage()]);
            return response()->json(['message' => 'Failed to delete membership'], 500);
        }
    }

    /**
     * Complete the membership form for the authenticated user.
     */
    public function complete(Request $request)
    {
        try {
            $user = Auth::user();

            if ($user) {
                $user->has_completed_membership_form = true;
                $user->save();

                return response()->json(['message' => 'Membership form completed successfully!'], 200);
            }

            return response()->json(['message' => 'Unauthorized'], 401);
        } catch (Exception $e) {
            Log::error('Failed to complete membership form', ['user_id' => Auth::id(), 'error' => $e->getMessage()]);
            return response()->json(['message' => 'Failed to complete membership form'], 500);
        }
    }

    /**
     * Link two memberships as spouses.
     */
    public function linkSpouses(Request $request)
    {
        try {
            $membershipId = $request->input('membership_id');
            $spouseId = $request->input('spouse_id');

            if (!$membershipId || !$spouseId) {
                return response()->json(['message' => 'Membership ID and Spouse ID are required.'], 400);
            }

            $membership = Membership::find($membershipId);
            $spouseMembership = Membership::find($spouseId);

            if ($membership && $spouseMembership) {
                $membership->spouse_id = $spouseId;
                $membership->save();

                // Optionally, set the reverse relationship
                $spouseMembership->spouse_id = $membershipId;
                $spouseMembership->save();

                return response()->json(['message' => 'Spouses linked successfully.'], 200);
            }

            return response()->json(['message' => 'Membership not found.'], 404);
        } catch (Exception $e) {
            Log::error('Failed to link spouses', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Failed to link spouses'], 500);
        }
    }

    /**
     * Get the membership ID of the authenticated user.
     */
    public function getMembershipId()
    {
        try {
            $user = Auth::user();
            $membership = $user->membership;
            $membershipId = $membership ? $membership->id : null;

            return response()->json([
                'membership_id' => $membershipId,
            ], 200);
        } catch (Exception $e) {
            Log::error('Failed to retrieve membership ID', ['user_id' => Auth::id(), 'error' => $e->getMessage()]);
            return response()->json(['message' => 'Failed to retrieve membership ID'], 500);
        }
    }

    /**
     * Get the children associated with a membership.
     */
    public function getChildren($membershipId)
    {
        try {
            $membership = Membership::with('children')->find($membershipId);

            if (!$membership) {
                return response()->json(['message' => 'Membership not found'], 404);
            }

            return response()->json($membership->children, 200);
        } catch (Exception $e) {
            Log::error('Failed to retrieve children for membership', ['membership_id' => $membershipId, 'error' => $e->getMessage()]);
            return response()->json(['message' => 'Failed to retrieve children'], 500);
        }
    }

    /**
     * Verify if a membership ID exists.
     */
    public function verifyMembershipId(Request $request)
    {
        try {
            $membershipId = $request->input('membership_id');
            $membership = Membership::find($membershipId);

            if ($membership) {
                return response()->json(['exists' => true], 200);
            } else {
                return response()->json(['exists' => false], 404);
            }
        } catch (Exception $e) {
            Log::error('Failed to verify membership ID', ['membership_id' => $request->input('membership_id'), 'error' => $e->getMessage()]);
            return response()->json(['message' => 'Failed to verify membership ID'], 500);
        }
    }

    /**
     * Get the spouse of a membership.
     */
    public function getSpouse($membershipId)
    {
        try {
            $membership = Membership::with(['spouse', 'spouse.avatar'])->find($membershipId);

            if (!$membership) {
                return response()->json(['message' => 'Membership not found'], 404);
            }

            if (!$membership->spouse) {
                return response()->json(['message' => 'Spouse not found'], 404);
            }

            return response()->json([
                'spouse' => $membership->spouse,
                'avatar' => $membership->spouse->avatar->image_url ?? null,
            ], 200);
        } catch (Exception $e) {
            Log::error('Failed to retrieve spouse for membership', ['membership_id' => $membershipId, 'error' => $e->getMessage()]);
            return response()->json(['message' => 'Failed to retrieve spouse'], 500);
        }
    }
}
