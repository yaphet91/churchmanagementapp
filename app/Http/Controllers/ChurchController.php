<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRequests\StoreChurchRequest;
use App\Http\Requests\UpdateRequests\UpdateChurchRequest;
use App\Models\Church;
use Illuminate\Support\Facades\Log;

class ChurchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(StoreChurchRequest $request)
    {
        try {
            $data = $request->validated(); // Use validated data
            $church = Church::create($data);
            return response()->json($church, 201);
        } catch (\Exception $e) {
            // Log error and return a response
            Log::error('Error creating church: ' . $e->getMessage());
            return response()->json(['error' => 'Server Error'], 500);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(Church $church)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Church $church)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateChurchRequest $request, Church $church)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Church $church)
    {
        //
    }
}
