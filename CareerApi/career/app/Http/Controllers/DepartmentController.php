<?php

namespace App\Http\Controllers;

use App\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
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
        $departments = Department::with('departmentAdmin')->get();
        return response()->json([
            "data" => $departments,
            "message" => "Departments retrieved successfully"
        ]);
    }

    public function show($id){
        $department = Department::find($id);
        return response()->json([
            "data" => $department,
            "message" => "Department retrieved successfully"
        ]);
    }

    public function store(Request $request){
        //validation
        $this->validate($request, [
            "title" => "required",
            "description" => "required"
        ]);

        //insertion
        $department = Department::create($request->all());
        return response()->json([
            "data" => $department->fresh(),
            "message" => "Department created successfully"
        ], 201);
    }

    public function update($id, Request $request){
        //validation

        //update
        $department = Department::findOrFail($id);
        $department->update($request->all());
        $department = Department::with('departmentAdmin')->findOrFail($id);
        return response()->json([
            'message' => "Department updated successfully",
            'data'=>$department
        ], 200);
        // return response()->json($department, 200);
    }

    public function destroy($id){
        Department::findOrFail($id)->delete();
        return response("Department deleted successfully", 200);
    }
}
