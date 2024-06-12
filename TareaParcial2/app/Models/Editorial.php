<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Editorial extends Model
{
    use HasFactory;
    protected $table = 'Editorial';
    protected $fillable = ['Nombre'];
    public $timestamps = false; // Deshabilitar timestamps

    public function libros()
    {
        return $this->hasMany(Libro::class, 'editorial_id', 'id');
    }
}
