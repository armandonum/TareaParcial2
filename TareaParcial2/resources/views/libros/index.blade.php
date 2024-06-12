
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
        <h2>crud de libros 
          <a href="{{ route('libros.create') }}" class="btn btn-primary">Crear</a>
        </h2>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">titulo</th>
      <th scope="col">editorial</th>
      <th scope="col">edicion</th>
      <th scope="col">pais</th>
      <th scope="col">edicion</th>
      <th scope="col">acciones</th>

    </tr>
  </thead>
  <tbody>
    @foreach($libros as $libro)
    <tr>
      <th scope="row">{{ $libro->id }}</th>
      <td>{{ $libro->titulo }}</td>
      <td>{{ $libro->editorial_id }}</td>
      <td>{{ $libro->edicion }}</td>
        <td>{{ $libro->pais }}</td>
        <td>{{ $libro->precio }}</td>
        <td > 
        <a href="{{ route('libros.edit', $libro->id) }}" class="btn btn-primary">Editar</a>
                        <form action="{{ route('libros.destroy', $libro->id) }}" method="POST" style="display:inline-block;">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger"><i class="bi bi-file-earmark-excel-fill"></i></button>
                        </form>
            <!-- <a href="" class="btn btn-danger"><i class="bi bi-file-earmark-excel-fill"></i></a> -->
        </td>
    </tr>
      @endforeach
  </tbody>
</table>
    </div>
</div>

</body>
</html>