<?php

namespace App\Http\Controllers;

use App\Owner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OwnerController extends Controller
{
    /**
     * Searches through owners
     *
     * @return \Illuminate\Http\Response
     */
    public function search($name)
    {
        return Owner::with("pets")
        ->where("first_name", "like", "%{$name}%" )
        ->Orwhere("surname", "like", "%{$name}%" )
        ->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate
        // $attributes = Owner::validate($request);

        // Persist
        return Owner::create($request->all());        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Owner  $owner
     * @return \Illuminate\Http\Response
     */
    public function show(Owner $owner)
    {
        return Owner::with("pets")->findOrFail($owner->id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Owner  $owner
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Owner $owner)
    {
        // Validate
        // $attributes = Owner::validate($request);

        // Update
        return $owner->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Owner  $owner
     * @return \Illuminate\Http\Response
     */
    public function destroy(Owner $owner)
    {
        if ($owner->delete()) return json_encode(true);
    }
}
