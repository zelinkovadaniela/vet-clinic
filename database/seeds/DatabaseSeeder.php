<?php

use Faker\Generator as Faker;
use Illuminate\Database\Seeder;

use App\Pet;
use App\Image;
use App\Owner;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(Faker $faker) {
    	$clients = json_decode(file_get_contents(storage_path('app/clients.json')), true); 

    	// Go through all clients
    	foreach ($clients as $client) {
    		// Get info about client
	    	$firstname = $client["first_name"];
	    	$surname = $client["surname"];
    		$pets = data_get($client, "pets", []);

    		// Save the client
    		$owner = Owner::create([
    			"first_name" => $firstname,
    			"surname" => $surname,
    			"address" => $faker->address,
    			"phone" => $faker->phoneNumber,
    			"email" => $faker->email
    		]);

    		// Save pets
    		foreach ($pets as $pet) {
				// Get info about a pet
				$species = "dog";
				$age = $pet["age"];
				$name = $pet["name"];
				$breed = $pet["breed"];
				$image = $pet["photo"];
				$weight = $pet["weight"];

				// Create new image
				$image = Image::create([
					"path" => $image
				]);

				// Create new pet
				Pet::create([
					"name" => $name,
					"species" => $species,
					"breed" => $breed,
					"weight" => $weight,
					"age" => $age,
					"owner_id" => $owner->id,
					"image_id" => $image->id
				]);
    		}
    	}
        // $this->call(UsersTableSeeder::class);
    }
}
