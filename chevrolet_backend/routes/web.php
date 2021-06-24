<?php

use Illuminate\Support\Facades\Route;

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
Artisan::call('storage:link'); //add local storage link

Route::get('/', function () {
    return view('welcome');
});


//Setting up Vue in Laravel
//run [composer require laravel/ui]
//Install Vue - [php artisan ui vue]
//if you Install Vue with auth use [php artisan ui vue --auth]
//run [npm install].
//run [npm run dev].
//run PHP artisan serve.

