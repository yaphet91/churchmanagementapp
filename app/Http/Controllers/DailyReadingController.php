<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDailyReadingRequest;
use App\Http\Requests\UpdateDailyReadingRequest;
use App\Models\DailyReading;
use Illuminate\Http\Request;

class DailyReadingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return DailyReading::all();
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
    public function store(Request $request)
    {
        // Validate and store reading
        $request->validate([
            'date' => 'required|date|unique:daily_readings,date',
            'synaxarium' => 'required|string',
            'epistelsOfPaul' => 'required|string',
            'otherEpistle' => 'required|string',
            'acts' => 'required|string',
            'psalm' => 'required|string',
            'gospel' => 'required|string',
            'holyLiturgy' => 'required|string',
        ]);
      

        DailyReading::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show($date)
    {
        return DailyReading::where('date', $date)->firstOrFail();

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DailyReading $dailyReading)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $date)
    {
        // Validate and update reading
        $request->validate([
            'synaxarium' => 'required|string',
            'epistelsOfPaul' => 'required|string',
            'otherEpistle' => 'required|string',
            'acts' => 'required|string',
            'psalm' => 'required|string',
            'gospel' => 'required|string',
            'holyLiturgy' => 'required|string',
        ]);

        $reading = DailyReading::where('date', $date)->firstOrFail();
        $reading->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DailyReading $dailyReading)
    {
        //
    }
}
