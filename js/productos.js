
function editarCantidad (producto, nuevaCantidad) {

  const indiceProductoExiste = carrito.findIndex( (productoCarrito) => {
      return productoCarrito.nombre === producto.nombre;
  });

  if(indiceProductoExiste !== -1) {

      carrito[indiceProductoExiste].cantidad = nuevaCantidad;

  }

  renderizarCarrito(carrito);

  agregarCarritoAlLS();
}

function renderizarTotal () {

  const total = carrito.reduce( (acc, productoCarrito) => {
      return acc + (productoCarrito.precio * productoCarrito.cantidad);
  }, 0);

  totalSpan.innerHTML = `$${total}`;
}

function obtenerCarritoDelLS () {

  let carrito = [];
  const carritoLS = localStorage.getItem("carrito");

  if(carritoLS !== null) {
      carrito = JSON.parse(carritoLS);
  }

  return carrito;
}

function agregarCarritoAlLS () {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito (producto) {

  const indiceProductoExiste = carrito.findIndex( (productoCarrito) => {
      return productoCarrito.nombre === producto.nombre;
  });

  if(indiceProductoExiste === -1) {

      carrito.push({
          nombre: producto.nombre,
          precio: producto.precio,
          cantidad: 1,
      });

  } else {

      carrito[indiceProductoExiste].cantidad++;

  }

  renderizarCarrito(carrito);

  agregarCarritoAlLS();
}

function renderizarCarrito (productos) {

  tbodyCarrito.innerHTML = "";

  for(const producto of productos) {

      const tr = document.createElement("tr");

      const tdNombre = document.createElement("td");
      tdNombre.innerHTML = `${producto.nombre}`;

      const tdPrecio = document.createElement("td");
      tdPrecio.innerHTML = `$${producto.precio}`;

      const tdCantidad = document.createElement("td");
      const spanCantidad = document.createElement("span");
      spanCantidad.innerHTML = `${producto.cantidad}`;

      tdCantidad.append(spanCantidad);

      spanCantidad.addEventListener("click", () => {

          spanCantidad.className = "ocultar";

          const inputCantidad = document.createElement("input");
          inputCantidad.value = producto.cantidad;

          inputCantidad.addEventListener("change", () => {

              const nuevaCantidad = inputCantidad.value;

              spanCantidad.className = "mostrar";

              inputCantidad.remove();

              editarCantidad(producto, nuevaCantidad);
          });

          tdCantidad.append(inputCantidad);

      });

      tr.append(tdNombre, tdPrecio, tdCantidad);

      tbodyCarrito.append(tr);
  }

  renderizarTotal();
}

function renderizarProductos (productos) {

  listaProductos.innerHTML = "";

  for(const producto of productos) {

      const div = document.createElement("div");
      div.className = "producto";

      const h3 = document.createElement("h3");
      h3.innerHTML = `${producto.nombre}`;

      const h4 = document.createElement("h4");
      h4.innerHTML = `$${producto.precio}`;

      const button = document.createElement("button");
      button.innerHTML = "Agregar al carrito";

      button.addEventListener("click", () => {

          agregarAlCarrito(producto);

      });
      div.append(h3, h4, button);

      listaProductos.append(div);
  }
}


const carrito = obtenerCarritoDelLS();

const listaProductos = document.getElementById("listaProductos");
const tbodyCarrito = document.getElementById("tbodyCarrito");
const totalSpan = document.querySelector("#total span");

fetch("/js/productos.json")
  .then( (response) => {
      return response.json();
  })
  .then( (responseProductos) => {

      renderizarProductos(responseProductos);

  });


//function renderizarProductos(productos) {

  //listaProductos.innerHTML = "";

//  for (const producto of productos) {
    
  //  const div = document.createElement("div");
    //div.className = "producto";

//    const h2 = document.createElement("h2");
  //  h2.innerHTML = `${producto.nombre}`;


    //const h4 = document.createElement("h4");
   // h2.innerHTML = `${producto.precio}`;


  //  const button = document.createElement("button");
   // button.innerHTML = "Agregar al carrito";

 //   button.addEventListener("click", () => { });
//    console.log(producto);

  //  div.append(h2, h4, button);
   // listaProductos.append(div);
  //}
//}



