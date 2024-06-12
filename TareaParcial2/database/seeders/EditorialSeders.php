<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Editorial;
use Database\Factories\EditorialFactory;


class EditorialSeders extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Editorial::factory()
        ->count(10)
        ->create();
    }
}
