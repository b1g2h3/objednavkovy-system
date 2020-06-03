<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Auth::routes();

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
    
// Route::get('/seed', function () {
//     Artisan::call('db:seed');
// });
// Route::get('/migrate', function () {
//     Artisan::call('migrate:fresh');
// });