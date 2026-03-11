<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRequests\StoreChildRequest;
use App\Http\Requests\UpdateChildRequest;
use App\Http\Resources\ChildCollection;
use App\Http\Resources\ChildResource;
use App\Models\Child;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class ChildController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new ChildCollection(Child::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }


    public function store(StoreChildRequest $request)
    {
        try {
            $data = $request->all();

            // $data['user_id'] = auth()->id();
            
            // Automatically fill tenant_id from the current tenant context
            // $tenant = app('tenant');
            // $data['tenant_id'] = $tenant->id;

            // Create the child record
            $child = Child::create($data);
            // Log::alert($child);
            // Return a success response
            
            // return response()->json([
            //     'message' => 'Child registered successfully.',
            //     'child' => $child
            // ], 201);
            return redirect()->route('child.form.success');

        } catch (\Exception $e) {
            // Log::alert($e);
            // Handle all other exceptions
            return response()->json([
                'message' => 'An unexpected error occurred',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Child $child)
    {
        return new ChildResource($child);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Child $child)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateChildRequest $request, Child $child)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Child $child)
    {
        //
    }
}
