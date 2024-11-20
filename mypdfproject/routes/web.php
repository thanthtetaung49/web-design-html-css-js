<?php

use Illuminate\Support\Facades\Route;
use Mpdf\Mpdf;;

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
    return view('welcome');
});

Route::get('pdf/view', function () {
    
    $data = [
        'foo' => 'bar'
    ];

    $pdf = PDF::loadView('pdf', $data);

    return $pdf->stream('document.pdf');
});
