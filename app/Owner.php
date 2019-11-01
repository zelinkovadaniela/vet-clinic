<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Owner extends Model
{
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
}
