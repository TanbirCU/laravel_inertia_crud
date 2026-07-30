<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SalesDetails extends Model
{
    protected $fillable=[
        'sales_master_id',
        'product_id',
        'qty',
        'price',
        'sub_total'
    ];

    public function sales_master()
    {
        return $this->belongsTo(SalesMaster::class);
    }
}
