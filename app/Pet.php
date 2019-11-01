<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    /**
     * Returns the photo of this pet
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function photo() {
        return $this->hasOne(Image::class);
    }
}
