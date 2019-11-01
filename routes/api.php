<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::group(["middleware" => ["auth:api"]], function () {
	Route::resource("owners", "OwnerController")->except([
		"index", "create", "edit"
	]);
	Route::get("owners/search/{name}", "OwnerController@search")->name("owners.search");

	Route::resource("pets", "PetController")->except([
		"index", "create", "edit"
	]);
	Route::get("pets/search/{name}", "PetController@search")->name("pets.search");
// });
