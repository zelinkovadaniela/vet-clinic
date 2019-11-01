<?php

namespace App\Http\Controllers;

use App\Pet;
use Illuminate\Http\Request;

class PetController extends Controller
{
    /**
     * Searches through pets
     *
     * @return \Illuminate\Http\Response
     */
    public function search($name)
    {
        return Pet::with("owner")->where("name", "like", "%{$name}%" )->get();
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
        // $attributes = Pet::validate($request);

        // Persist
        return Pet::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Pet  $pet
     * @return \Illuminate\Http\Response
     */
    public function show(Pet $pet)
    {
        return Pet::with("owner")->findOrFail($pet->id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Pet  $pet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pet $pet)
    {
        // Validate
        // $attributes = Pet::validate($request);
        
        // Update
        return $pet->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Pet  $pet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pet $pet)
    {
        if ($pet->delete()) return json_encode(true);
    }
}
