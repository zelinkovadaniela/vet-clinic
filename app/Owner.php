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

    
}
