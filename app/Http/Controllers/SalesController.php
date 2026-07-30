<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SalesMaster;
use App\Models\SalesDetails;
use App\Models\Client;
use App\Models\Product;
use Inertia\Inertia;


class SalesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data['sales'] = SalesMaster::with('sales_details', 'client')->get();
        return Inertia::render('sales/index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data['clients'] = Client::all();
        $data['products'] = Product::all();
        return Inertia::render('sales/create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
