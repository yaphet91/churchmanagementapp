<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRequests\StoreCourseRequest;
use App\Http\Requests\UpdateRequests\UpdateCourseRequest;
use App\Models\Course;

class CourseController extends Controller
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
    public function store(StoreCourseRequest $request)
    {
        $data = $request->all();
        $data['user_id'] = auth()->id();  // Retrieve the currently authenticated user's ID

        // Automatically fill tenant_id from the current tenant context
        // $tenant = app('tenant');
        // $data['tenant_id'] = $tenant->id;
        
        $courses = Course::create($data);
        // return redirect()->route('membership.form.success')->with('successMessage', 'Membership created successfully.');

        return response()->json([
            'message' => 'Courses updated successfully.',
            'membership' => $courses
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCourseRequest $request, Course $course)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        //
    }
}
