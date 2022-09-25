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

Route::get('/', function () {
    return redirect(\App\Providers\RouteServiceProvider::GUEST);
});

/**
 * GUEST
 */
Route::group([
    'middleware' => ['guest'],
    'prefix'     => 'guest',
    'as'         => 'guest.',
    'namespace' => 'Guest',
], function () {
    // auth
    Route::post('login', 'AuthController@login')->name('login');
    Route::group([
        'prefix' => 'password',
        'as'     => 'password.'
    ], function () {
        Route::post('request', 'AuthController@passwordRequest')->name('request');
        Route::post('reset', 'AuthController@passwordReset')->name('reset');
    });

    // Vue
    Route::get('/{any?}', 'AuthController@home')->where('any', '.*')->name('home');
});
