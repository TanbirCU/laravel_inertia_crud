<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\SalesController;

Route::get('/', function () {
    return redirect()->route('products.index');
});
Route::resource('products', ProductController::class);
Route::get('contacts', [ProductController::class, 'contacts'])->name('contacts');
Route::post('contacts', [ProductController::class, 'contact_store'])->name('contact.store');
Route::resource('clients', ClientController::class);
Route::resource('sales', SalesController::class);

