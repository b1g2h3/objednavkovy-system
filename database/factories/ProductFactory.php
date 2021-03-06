<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'category_id' => $faker->numberBetween(0, 10),
        'name' => $faker->name,
        'hmotnost' => $faker->randomNumber()

    ];
});
