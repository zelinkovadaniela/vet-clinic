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
            $table->integer("weight")->nullable();
            $table->integer("age");
            $table->string("image")->nullable();
            $table->unsignedBigInteger("owner_id");
            $table->timestamps();

            $table->foreign("owner_id")->references("id")->on("owners")->onDelete("cascade");
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
