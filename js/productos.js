function renderizarProductos (productos) {

    listaProductos.innerHTML= "";
  
  for (const producto of productos) {
    const div = document.createElement ("div");
  div.className ="producto";
    const h2 = document.createElement ("h2");
    h2.innerHTML = `${producto.nombre}`;
  
  
    const h4 = document.createElement ("h4");
    h2.innerHTML = `${producto.precio}`;
  
  
    const button = document.createElement ("button");
    button.innerHTML = "Agregar al carrito";
  
    button.addEventListener ("click", () => {});
    console.log (producto);
  
   div.append (h2, h4, button);
   listaProductos.append (div);
  }
  }

  fetch ("/js/productos.json")
  .then ((response) => {
  
  return response.json ();
  })
  .then ((responseProductos) => {
    renderizarProductos (responseProductos);
  });

