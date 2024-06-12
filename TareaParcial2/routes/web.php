<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LibroController;


Route::get('/', [LibroController::class, 'index'])->name('libros.index');
Route::get('/libros/create', [LibroController::class, 'create'])->name('libros.create');
Route::post('/libros', [LibroController::class, 'store'])->name('libros.store');

//Route::resource('libros', 'LibroController');