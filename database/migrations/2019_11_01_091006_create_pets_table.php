<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pets', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string("name", 255);
            $table->string("species", 255);
            $table->string("breed", 255);
            $table->integer("weight");
            $table->integer("age");
            $table->unsignedBigInteger("owner_id");
            $table->unsignedBigInteger("image_id")->nullable();
            $table->timestamps();

            $table->foreign("owner_id")->references("id")->on("owners");
            $table->foreign("image_id")->references("id")->on("images")->onDelete("set null");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pets');
    }
}
