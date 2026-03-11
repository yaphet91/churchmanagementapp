<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRequests\StoreAvatarRequest;
use App\Http\Requests\UpdateRequests\UpdateAvatarRequest;
use App\Http\Resources\AvatarCollection;
use App\Http\Resources\AvatarResource;
use App\Models\Avatar;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AvatarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new AvatarCollection(Avatar::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function uploadImageToSpaces(Request $request)
    {
        $file = $request->file('image');
        $filePath = 'uploads/images/' . time() . '_' . $file->getClientOriginalName();

        // Upload the file to DigitalOcean Spaces
        // $path = Storage::disk('spaces')->put($filePath, file_get_contents($file), 'public');
        $path = Storage::disk('spaces')->put($filePath, fopen($file->getRealPath(), 'r+'), 'public');

        // Return the public URL of the uploaded file
        return Storage::disk('spaces')->url($filePath);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAvatarRequest $request)
    {
        try {
            $data = $request->all();  // This ensures that only validated data is used

            $data['user_id'] = auth()->id();

            // Automatically fill tenant_id from the current tenant context
            // $tenant = app('tenant');
            // $data['tenant_id'] = $tenant->id;
            
            $avatar = Avatar::create($data);

            return response()->json(['response' => $avatar, 'message' => 'Avatar uploaded and saved successfully.']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Avatar $avatar)
    {
       return new AvatarResource($avatar);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Avatar $avatar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAvatarRequest $request, Avatar $avatar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Avatar $avatar)
    {
        //
    }
}
