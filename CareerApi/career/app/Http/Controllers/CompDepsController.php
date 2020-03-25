<?php

namespace App\Http\Controllers;

use App\CompDep;
use Illuminate\Http\Request;

class CompDepsController extends Controller
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
        return response()->json(CompDep::all());
    }

    public function show($id){
        return response()->json(CompDep::find($id));
    }

    public function store(Request $request){
        //validation but should be removed only used for testing
        $this->validate($request, [
            "compID" => "required",
            "depID" => "required"
        ]);

        //insertion
        $compdep = CompDep::create($request->all());
        return response()->json($compdep, 201);
    }

    public function update($id, Request $request){
        // validate

        //update
        $compdep = CompDep::findOrFail($id);
        $compdep->update($request->all());
        return response()->json($compdep, 200);
    }

    public function destroy($id){
        CompDep::findOrFail($id)->delete();
        return response("Deleted Successfully", 200);
    }
}
