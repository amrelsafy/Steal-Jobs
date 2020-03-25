<?php

namespace App\Http\Controllers;

use App\Application;
use Illuminate\Http\Request;

class ApplicationController extends Controller
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
        $applications = Application::with('applicationUser')->with('applicationJob')->get();
        return response()->json([
            "data" => $applications,
            "message" => "Applications retrieved successfully"
        ], 200);
    }

    public function show($id){
        $application = Application::find($id);
        return response()->json([
            "data" => $application,
            "message" => "Application retrieved successfully"
        ], 200);
    }

    public function store(Request $request){
        // validation wrong but used for testing
        $this->validate($request, [
            "status" => "required"
        ]);

        // insertion
        $application = Application::create($request->all());
        return response()->json([
            "data" => $application->fresh(),
            "message" => "Application created successfully"
        ], 201);
    }

    public function update($id, Request $request){
        // validate

        // update
        $application = Application::findOrFail($id);
        $application->update($request->all());
        return response()->json([
            "data" => $application->fresh(),
            "message" => "Application updated successfully"
        ], 200);
    }

    public function destroy($id){
        Application::findOrFail($id)->delete();
        return response("Application deleted successfully", 200);
    }
}
