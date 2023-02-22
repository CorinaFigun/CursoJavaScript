
function editarCantidad (producto, nuevaCantidad) {

  const indiceProductoExiste = carrito.findIndex( (productoCarrito) => {
      return productoCarrito.nombre === producto.nombre;
  });

  // Si el producto está en el carrito
  if(indiceProductoExiste !== -1) {

      // Le cambiamos el atributo cantidad por la nueva que se escribió en el input
      carrito[indiceProductoExiste].cantidad = nuevaCantidad;

  }

  renderizarCarrito(carrito);

  agregarCarritoAlLS();
}

function renderizarTotal () {

  // Calculo el total
  const total = carrito.reduce( (acc, productoCarrito) => {
      return acc + (productoCarrito.precio * productoCarrito.cantidad);
  }, 0);

  // Añado el total al span
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

  // Busco índice del producto en el carrito
  const indiceProductoExiste = carrito.findIndex( (productoCarrito) => {
      return productoCarrito.nombre === producto.nombre;
  });

  // Si el producto no está en el carrito
  if(indiceProductoExiste === -1) {

      // Agrego un nuevo objeto al array de carrito
      carrito.push({
          nombre: producto.nombre,
          precio: producto.precio,
          cantidad: 1,
      });

  } else {

      // Modifico la cantidad del producto existente en el carrito
      carrito[indiceProductoExiste].cantidad++;

  }

  // Renderizar el carrito
  renderizarCarrito(carrito);

  // Guardo en LS
  agregarCarritoAlLS();
}

function renderizarCarrito (productos) {

  // Limpio el contenedor
  tbodyCarrito.innerHTML = "";

  for(const producto of productos) {

      // Creo el tr
      const tr = document.createElement("tr");

      // Creo los tds
      const tdNombre = document.createElement("td");
      tdNombre.innerHTML = `${producto.nombre}`;

      const tdPrecio = document.createElement("td");
      tdPrecio.innerHTML = `$${producto.precio}`;

      const tdCantidad = document.createElement("td");
      const spanCantidad = document.createElement("span");
      spanCantidad.innerHTML = `${producto.cantidad}`;

      tdCantidad.append(spanCantidad);

      // Agrego evento de click al span de la cantidad
      spanCantidad.addEventListener("click", () => {

          // Ocultamos el span
          spanCantidad.className = "ocultar";

          // Creamos un input
          const inputCantidad = document.createElement("input");
          inputCantidad.value = producto.cantidad;

          inputCantidad.addEventListener("change", () => {

              const nuevaCantidad = inputCantidad.value;

              // Mostrar nuevamente el span
              spanCantidad.className = "mostrar";

              // Eliminar el input
              inputCantidad.remove();

              // Editar cantidad
              editarCantidad(producto, nuevaCantidad);
          });

          // Agregamos el input al td de cantidad
          tdCantidad.append(inputCantidad);

      });

      // Agrego tds al tr
      tr.append(tdNombre, tdPrecio, tdCantidad);

      // Agrego tr al tbody
      tbodyCarrito.append(tr);
  }

  // Renderizar total
  renderizarTotal();
}

function renderizarProductos (productos) {

  // Limpio el contenedor
  listaProductos.innerHTML = "";

  for(const producto of productos) {

      // Crear el div principal
      const div = document.createElement("div");
      div.className = "producto";

      const h2 = document.createElement("h2");
      h2.innerHTML = `${producto.nombre}`;

      const h4 = document.createElement("h4");
      h4.innerHTML = `$${producto.precio}`;

      const button = document.createElement("button");
      button.innerHTML = "Agregar al carrito";

      button.addEventListener("click", () => {

          agregarAlCarrito(producto);

      });
      div.append(h2, h4, button);

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



