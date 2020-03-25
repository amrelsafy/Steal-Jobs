<?php

namespace App\Http\Controllers;

use App\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
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
        $companies = Company::all();
        return response()->json([
            "data" => $companies,
            "message" => "Companies retrieved successfully"
        ]);
    }

    public function show($id){
        $company = Company::find($id);
        return response()->json([
            "data" => $company,
            "message" => "Company retrieved successfully"
        ]);
    }

    public function store(Request $request){
        // validation
        $this->validate($request, [
            "title" => "required",
            "location" => "required",
            "type" => "required"
        ]);

        //insertion
        $company = Company::create($request->all());
        return response()->json([
            "data" => $company,
            "message" => "Company created successfully"
        ], 201);
    }

    public function update($id, Request $request){
        // validate

        //update
        $company = Company::findOrFail($id);
        $company->update($request->all());
        return response()->json([
            "data" => $company,
            "message" => "Company updated successfully"
        ], 200);
    }

    public function destroy($id){
        Company::findOrFail($id)->delete();
        return response("Company deleted successfully", 200);
    }
}
