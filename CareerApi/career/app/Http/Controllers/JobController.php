<?php

namespace App\Http\Controllers;

use App\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    //
    
    public function index(){
        $jobs = Job::with('jobDepartment')->with('jobCompany')->with('jobAdmin')->get();
        return response()->json([
            "data" => $jobs,
            "message" => "Jobs retrieved successfully"
        ]);
    }

    public function show($id){
        $job = Job::find($id);
        return response()->json([
            "data" => $job,
            "message" => "Job retrieved successfully"
        ]);
    }

    public function store(Request $request){
        //validation
        $this->validate($request, [
            "title" => "required",
            "description" => "required",
            "startDate" => "required",
            "expiryDate" => "required",
            "experience" => "required",
            "salary" => "required",
            "type" => "required"
        ]);

        //insertion
        $job = Job::create($request->all());
        return response()->json([
            "data" => $job->fresh(),
            "message" => "Job created successfully"
        ], 200);
    }

    public function update($id, Request $request){
        //validation

        //update
        $job = Job::findOrFail($id);
        $job->update($request->all());
        $job = Job::with('jobDepartment')->with('jobCompany')->with('jobAdmin')->findOrFail($id);
        return response()->json([
            "data" => $job->fresh(),
            "message" => "Job updated successfully"
        ], 200);
    }

    public function destroy($id){
        Job::findOrFail($id)->delete();
        return response("Job deleted succesfully", 200);
    }
}
