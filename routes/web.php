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

Route::any('/', function () {
    return view('welcome');
});

Route::any('/contacts', function () {
    return view('welcome');
});

Route::any('/about', function () {
    return view('welcome');
});

Route::get('/show/all/products', function () {
    return view('welcome');
});

Route::get('/show/product/{id}', function ($id) {
    return view('welcome');
});

Route::get('/show/category/{id}/products', function ($id) {
    return view('welcome');
});

Route::get('/manage/products', function () {
    return view('welcome');
});

Route::get('/manage/product/{id}', function ($id) {
    return view('welcome');
});

// Authentication Routes...
Route::get('login', function () {
    return view('welcome');
})->name('login');
Route::post('login', 'Auth\LoginController@authenticate');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

// Registration Routes...
Route::get('register', function () {
    return view('welcome');
})->name('register');
Route::post('/register', 'Auth\RegisterController@register');

// Password Reset Routes...
Route::get('password/reset', function () {
    return view('welcome');
})->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', function () {
    return view('welcome');
})->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');