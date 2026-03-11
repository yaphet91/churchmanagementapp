<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRequests\StoreChurchHistoryRequest;
use App\Http\Requests\UpdateRequests\UpdateChurchHistoryRequest;
use App\Http\Resources\ChurchHistoryCollection;
use App\Http\Resources\ChurchHistoryResource;
use App\Models\ChurchHistory;
use Illuminate\Support\Facades\Log;

class ChurchHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new ChurchHistoryCollection(ChurchHistory::all());
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
    public function store(StoreChurchHistoryRequest $request)
    {
        try {
            // Log::info('Received data:', $request->all());
            $data = $request->all();
            // Automatically fill tenant_id from the current tenant context
            // $tenant = app('tenant');
            // $data['tenant_id'] = $tenant->id;
            
            $churchHistory = ChurchHistory::create($data);
            return response()->json(['response' => $churchHistory, 'message' => 'User church history updated successfully.']);
        } catch (\Exception $e) {
            Log::error('Error storing church history:', ['message' => $e->getMessage(), 'trace' => $e->getTraceAsString()]);
            return response()->json(['error' => $e->getMessage(), 'trace' => $e->getTraceAsString()], 500);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(ChurchHistory $churchHistory)
    {
        return new ChurchHistoryResource($churchHistory);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ChurchHistory $churchHistory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateChurchHistoryRequest $request, ChurchHistory $churchHistory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ChurchHistory $churchHistory)
    {
        //
    }
}
