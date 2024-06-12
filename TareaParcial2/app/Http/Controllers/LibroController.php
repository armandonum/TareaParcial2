<?php

namespace App\Http\Controllers;

use App\Models\Libro;
use App\Models\Editorial;
use Illuminate\Http\Request;

class LibroController extends Controller
{
    public function index()
    {
        $libros = Libro::all();
        return view('libros.index', compact('libros'));
    }

    public function create()
    {
        $editoriales = Editorial::all();
        return view('libros.create', compact('editoriales'));
    }

    public function store(Request $request)
    {
        $libro = Libro::create($request->all());
        return redirect()->route('libros.index');
    }

    public function show(Libro $libro)
    {
        return view('libros.show', compact('libro'));
    }

    public function edit(Libro $libro)
    {
        $editoriales = Editorial::all();
        return view('libros.edit', compact('libro', 'editoriales'));
    }

    public function update(Request $request, Libro $libro)
    {
        $libro->update($request->all());
        return redirect()->route('libros.index');
    }

    public function destroy(Libro $libro)
    {
        $libro->delete();
        return redirect()->route('libros.index');
    }
}