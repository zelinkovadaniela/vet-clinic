<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class Owner extends Model
{
    protected $guarded = [];

    /**
     * Get the full name of this owner.
     *
     * Example: John Doe
     *
     * @return string
     */
    public function getFullNameAttribute() {
        return $this->first_name . " " . $this->surname;
    }

    /**
     * Returns all Pets that are associated with this owner
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function pets() {
        return $this->hasMany(Pet::class);
    }

    public static function validate(Request $request) {
        return $request->validate([
            "first_name" => ["required", "string", "between:2,255"],
            "surname" => ["required", "string", "between:2,255"],
            "addresss" => ["required", "string", "between:2,255"],
            "phone" => ["required", "string", "between:2,20"],
            "email" => ["nullable", "email"]
        ]);
    }
}
