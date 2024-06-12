<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Libro;

class LibrosSeders extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Libro::factory()
     ->count(1000)
     ->create();   
        
    }
}
