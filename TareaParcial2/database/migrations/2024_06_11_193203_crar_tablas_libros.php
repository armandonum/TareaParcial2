<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
           Schema::create('Libro', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
        $table->biginteger('editorial_id')->constrained('Editorial');
        $table->tinyInteger('edicion');
        
            $table->string('pais');
         $table->decimal('precio');
         $table->timestamps(); // Agregar timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Libro');
    }
};
