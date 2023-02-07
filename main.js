



function calcularEdad(nombre, diaNacimiento, mesNacimiento, anioNacimiento) {
  var nombre = document.getElementById("nombre").value;
  var diaNacimiento = document.getElementById("dia").value;
  var mesNacimiento = document.getElementById("mes").value;
  var anioNacimiento = document.getElementById("anio").value;
  var salida = document.getElementById("salida");
  var salida2 = document.getElementById("salida2");
  var salida3 = document.getElementById("salida3");

  this.nombre = nombre;
  this.diaNacimiento = diaNacimiento;
  this.mesNacimiento = mesNacimiento;
  this.anioNacimiento = anioNacimiento;

  this.edad = function edad() {
    var calcula = 0;
    var objeto = new Date();
    var dia = objeto.getDate();
    var mes = objeto.getMonth() + 1;
    var hoy = objeto.getFullYear();

    if (mes < this.mesNacimiento || (mes == this.mesNacimiento && dia < this.dia)) {
      return calcula = parseInt(hoy - this.anioNacimiento) - 1;
    }
    else {
      return calcula = parseInt(hoy - this.anioNacimiento);
    }
  };
  salida.innerHTML = "La edad actual de " + nombre + " es  " + this.edad() + ".";

  //Agrego el mensaje sobre si puede hacer o no tragos, según mayoría de edad. Esto antes salía a través de prompts y alerts
  do {
    if (this.edad() >= 18) {
      salida2.innerHTML = "Eres mayor de edad,  puedes hacer nuestras recetas sobre tragos";

    } else {
      salida3.innerHTML = "Eres menor de edad, no puedes hacer nuestras recetas sobre tragos";
    }
  } while (isNaN(this.edad()))


}


function convertir(e) {

  //  Kilogramo = kilogramoIngresado * 2.20462  
  if (e.target.name == "convertirKilogramosALibras") {
    Kilo = document.getElementById("cantidad").value;

    Libra = Kilo * 2.20462;
    document.getElementById("mensaje").innerHTML = "Libras: " + Libra;

  }

  // Libras a Kilogramos LibrasIngresadas/ 2.2046
  else if (e.target.name == "convertirLibrasAKilogramos") {
    Libra = document.getElementById("cantidad").value;

    Kilo = Libra / 2.2046;
    document.getElementById("mensaje").innerHTML = ("Kilogramos: " + Kilo);

  }
  //Kilogramos a Onzas 
  else if (e.target.name == "convertirKilogramosaOnzas") {
    Onza = document.getElementById("cantidad").value;

    Onza = Kilo * 35.274;

    document.getElementById("mensaje").innerHTML = ("Onzas: " + Onza);

  }

  //Libras a Onzas
  else if (e.target.name == "convertirLibrasAOnzas") {
    Libra2 = document.getElementById("cantidad").value;

    Libra2 = Libra2 / 0.0625;

    document.getElementById("mensaje").innerHTML = ("Onzas: " + Libra2);

  }



}

let recetasPastas = []

let pastas = [
  {
    id: 1,
    nombre: "Gnocchi tricolor con salsa de tomate casera",
    vegetariana: true,
    dificultad: "baja",
    img: "https://4.bp.blogspot.com/-3s78bQ0DLcI/WBcvmSwhZ9I/AAAAAAAALOo/SlagzMHYB5EqvsfsV2jkkSG7sJvCtp3JACLcB/s640/IMG_20161028_141956copia.jpg",

  },
  {
    id: 2,
    nombre: "Spaghetti con ostras",
    vegetariana: false,
    dificultad: "media",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/15/e6/d2/e0/spaghetti-con-ostras.jpg",
  },
  {
    id: 3,
    nombre: "Penne rigatti Spicy",
    vegetariana: true,
    dificultad: "media",
    img: "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2019/10/Penne-Arrabbiata-Recipe1.jpg",

  },
  {
    id: 4,
    nombre: "Las cintas de pulpo",
    vegetariana: false,
    dificultad: "alta",
    img: "https://www.elreydelpulpo.com/wp-content/uploads/2019/03/portada-comer-pescado.jpg",
  },
  {
    id: 5,
    nombre: "Rigatoni con hongos",
    vegetariana: true,
    dificultad: "baja",
    img: "https://periodicodelpilar.medios.digital/download/multimedia.normal.80ba9bee63a52baa.494d475f333930395f6e6f726d616c2e6a7067.jpg",

  },
]

let html = ""

pastas.forEach(el => {
  const classCard = el.vegetariana ? "card" : "redCard"
  html += `
        <div class=${classCard} >
            <img src=${el.img} class="img" />
            <ul class="list">
                <h3>Nuestras recetas de pastas</h3>
                <hr />
                <br />
                <li>
                    <p>
                        <b>
                            ${el.nombre}
                        </b>
                    </p>
                </li>
                <li>
                    <p>
                        Dificultad
                        <b>
                            ${el.dificultad}
                        </b>
                    </p>
                </li>
            </ul>
            <button id=${el.id} class="button" onclick=buscarRecetasPastas(${el.id})>Buscar</button>
        </div>
`

})

document.getElementById("container").innerHTML = html



function buscarRecetasPastas(idbusquedaRecetasPastas) {

  let VegetarianaSINO = pastas.find(el => el.id === idbusquedaRecetasPastas)
  localStorage.getItem("lista") ? recetasPastas = JSON.parse(localStorage.getItem("lista")) : recetasPastas = []

  if (VegetarianaSINO.vegetariana) {
    if (!misInscripciones.some(el => el.id === idbusquedaRecetasPastas)) {
      let recetaVeg = recetasPastas.find(el => el.id === idbusquedaRecetasPastas)
      misInscripciones.push(recetaVeg)
      localStorage.setItem("lista", JSON.stringify(recetasPastas))
    } else {
      alert("Encontraste una gran receta vegetariana")
    }
  } else {
    alert("Esta receta no es vegetariana")
  }
}



/**Objeto con Class para postres*/

class TiposPostres {
  constructor(tiempo, dificultadPostres, link, id) {

    this.tiempo = tiempo;
    this.dificultadPostres = this.dificultadPostres;
    this.link = link;
    this.id = id;


    this.mostrarDificultad = function () {
      console.log("Esta receta tiene un grado de dificultad" + " " + dificultadPOstres)
      this.mostrarDificultad = alert("Esta receta tiene un grado de dificultad" + " " + dificultadPOstres)
    }
  }
}



const postre1 = new TiposPostres("treinta minutos", "baja", "www.recetasCori/moussemaracuyá.net", 1);

const postre2 = new TiposPostres("una hora y media", "media", "www.recetascori/tiramisu.net", 2);

const postre3 = new TiposPostres("cuarenta minutos", "alta", "www.recetascori/rogel", 3);



const postres = [postre1, postre2, postre3]
let postresDificultades = []



  
TiposPostres.forEach(el => {
  const classCard = el.vegetariana ? "card" : "redCard"
  html += `
        <div class=${classCard} >
            <img src=${el.img} class="img" />
            <ul class="list">
                <h3>Nuestras recetas de pastas</h3>
                <hr />
                <br />
                <li>
                    <p>
                        <b>
                            ${el.nombre}
                        </b>
                    </p>
                </li>
                <li>
                    <p>
                        Dificultad
                        <b>
                            ${el.dificultad}
                        </b>
                    </p>
                </li>
            </ul>
            <button id=${el.id} class="button" onclick=buscarRecetasPastas(${el.id})>Buscar</button>
        </div>
`

})

document.getElementById("contenedor").innerHTML = html




  function seleccionPostre ()
  {
  let salidapostre1 =document.getElementById("salidapostre1");
  let salidapostre2 =document.getElementById("salidapostre2");
  let salidapostre3 =document.getElementById("salidapostre3");
  let salida=document.getElementById ("salida");
let postreElegido=document.getElementById('postreElegido').value;


do { postreElegido = console.log ("hola")
    if (postreElegido >= 0 && postreElegido <= 4) {
      switch (postreElegido) {
        case 1:          
          salidapostre1.innerHTML= "Podes ver nuestra receta de mousse de maracuya en: www.recetasCori/moussemaracuyá.net";
          break;

        case 2:
          salidapostre2.innerHTML= "Podes ver nuestra receta de mousse de tiramisu en: www.recetasCori/tiramisu.net";
          break;

        case 3:
          salidapostre3.innerHTML= "Podes ver nuestra receta de mousse de tiramisu en: www.recetasCori/tiramisu.net";
          break;

          default:

          break;
       
      }
    }
    else {
      salida.innerHTML = "no podemos ayudarte";
    }
  }

  while (postreElegido !== 4 && postreElegido !== 0)
}

