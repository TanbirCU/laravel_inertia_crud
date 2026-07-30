<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SalesMaster extends Model
{
    protected $fillable = [
        'client_id',
        'invoice_no',
        'grand_total',
        'invoice_date'
    ];

    public function sales_details()
    {
        return $this->hasMany(SalesDetails::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
