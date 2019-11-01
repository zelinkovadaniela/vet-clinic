<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    protected $guarded = [];

	/**
     * Returns the owner
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function owner() {
        return $this->belongsTo(Owner::class);
    }

    public static function validate(Request $request) {
        return $request->validate([
            "name" => ["required", "string", "between:2,255"],
            "species" => ["required", "string", "between:2,255"],
            "breed" => ["required", "string", "between:2,255"],
            "weight" => ["nullable", "number"],
            "age" => ["required", "number"],
            "image" => ["nullable", "string"],
            "owner_id" => ["required", "number", "exists:users,id"],
        ]);
    }
}
