<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('category', 'CategoryController', ['except' => ['create', 'edit']]);

Route::resource('product', 'ProductController', ['except' => ['create', 'edit']]);

Route::get('/category/{id}/products', 'CategoryController@products');

Route::get('/category/{id}/brands', function($id){
    return DB::select('SELECT DISTINCT brand FROM products WHERE category_id = '.$id);
});

Route::get('/brands', function(){
    return DB::select('SELECT DISTINCT brand FROM products');
});

Route::post('/search', function(Request $request) {
    $sql = 'SELECT * FROM products WHERE ';
    $brands = $request->brands;
    if($brands!=null) {
        $sql = $sql.'brand IN (';
        foreach ($brands as $brand)  {
            $sql = $sql.'"'.$brand.'"';
            if ($brand != end($brands)) {
                $sql = $sql.', ';
            }
        }
        $sql = $sql.')';
    }
    $categoryId = $request->categoryId;
    if($brands != null && $categoryId != null) {
        $sql = $sql.' AND ';
    }
    if($categoryId != null) {
        $sql = $sql.'category_id = '.$categoryId;
    }

    return DB::select($sql);
});

Route::post('/register', 'Auth\RegisterController@register');
Route::post('/login', 'Auth\LoginController@authenticate');

Route::get('/auth', function(){
    return Auth::user()!=null ? Auth::user() : "null";
});