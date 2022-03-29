<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\dataController;

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
// php artisan serve --host=192.168.0.122 --port=8000
Route::get('nusers', 'App\Http\Controllers\dataController@index');
Route::post('postnusers', 'App\Http\Controllers\dataController@index');