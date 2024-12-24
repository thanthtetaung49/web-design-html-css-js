<?php

use App\DataTables\UsersDataTable;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;

Route::get('/', function (UsersDataTable $dataTable) {
     return $dataTable->render('welcome');
    // return view('welcome');
});

Auth::routes();

Route::get('/users', [UsersController::class, 'index'])->name('users.index');
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

