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

Route::get('/show/category/{id}/products', function ($id) {
    return view('welcome');
});