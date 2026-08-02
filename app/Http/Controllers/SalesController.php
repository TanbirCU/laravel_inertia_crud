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
        $request->validate([
            'client_id' => 'required|exists:clients,id',
            'items' => 'required|array|min:1',
            'items.*.productId' => 'required|exists:products,id',
            'items.*.qty' => 'required|integer|min:1',
        ]);

        $grand_total = 0;
        $items_data = [];

        foreach ($request->items as $item) {
            $product = Product::findOrFail($item['productId']);
            $price = (float)$product->price;
            $sub_total = $price * (int)$item['qty'];
            $grand_total += $sub_total;

            $items_data[] = [
                'product_id' => $item['productId'],
                'qty' => $item['qty'],
                'price' => $price,
                'sub_total' => $sub_total,
            ];
        }

        $sales_master = SalesMaster::create([
            'client_id' => $request->client_id,
            'invoice_no' => 'INV-' . strtoupper(uniqid()),
            'grand_total' => $grand_total,
            'invoice_date' => date('Y-m-d'),
        ]);

        foreach ($items_data as $detail) {
            $sales_master->sales_details()->create($detail);
        }

        return redirect()->route('sales.index')
            ->with('success', 'Invoice created successfully.');
    }

    public function show(string $id)
    {
        $data['sales'] = SalesMaster::with(['sales_details.product', 'client'])->findOrFail($id);
        return Inertia::render('sales/show', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $data['sales'] = SalesMaster::with('sales_details')->findOrFail($id);
        $data['clients'] = Client::all();
        $data['products'] = Product::all();
        return Inertia::render('sales/edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'client_id' => 'required|exists:clients,id',
            'items' => 'required|array|min:1',
            'items.*.productId' => 'required|exists:products,id',
            'items.*.qty' => 'required|integer|min:1',
        ]);

        $sales_master = SalesMaster::findOrFail($id);
        
        $grand_total = 0;
        $items_data = [];

        foreach ($request->items as $item) {
            $product = Product::findOrFail($item['productId']);
            $price = (float)$product->price;
            $sub_total = $price * (int)$item['qty'];
            $grand_total += $sub_total;

            $items_data[] = [
                'product_id' => $item['productId'],
                'qty' => $item['qty'],
                'price' => $price,
                'sub_total' => $sub_total,
            ];
        }

        // Delete old details
        $sales_master->sales_details()->delete();

        // Save new details
        foreach ($items_data as $detail) {
            $sales_master->sales_details()->create($detail);
        }

        // Update master
        $sales_master->update([
            'client_id' => $request->client_id,
            'grand_total' => $grand_total,
        ]);

        return redirect()->route('sales.index')
            ->with('success', 'Invoice updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $sales_master = SalesMaster::findOrFail($id);
        $sales_master->sales_details()->delete();
        $sales_master->delete();

        return redirect()->route('sales.index')
            ->with('success', 'Invoice deleted successfully.');
    }
}
