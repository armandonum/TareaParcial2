
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</head>
<body>
    
<div class="container">
    <div class="row mt-5">
        <h2>
            Crear LIbro 
        
        </h2>
        <form method="post" action="{{ route('libros.store') }}">
            @csrf
            <div class="mb-3">
                <label class="form-label">Titulo</label>
                <input type="text" class="form-control" name="titulo">
            </div>
            <div class="mb-3">
                <label class="form-label">Editorial</label>
                <select class="form-control" name="editorial_id">
                    @foreach($editoriales as $editorial)
                    <option value="{{ $editorial->id }}">{{ $editorial->Nombre }}</option>
                    @endforeach
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label">Edicion</label>
                <input type="text" class="form-control" name="edicion">
            </div>
            <div class="mb-3">
                <label class="form-label">Pais</label>
                <input type="number" class="form-control" name="pais">
            </div>
            <div class="mb-3">
                <label class="form-label">Precio</label>
                <input type="number" class="form-control" name="precio">
            </div>
            
            <button type="submit" class="btn btn-primary">Guardar</button>
        </form>
  
    </div>
</div>

</body>
</html>