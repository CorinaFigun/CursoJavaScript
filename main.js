

function nombre() {
  let nombreIngresado = prompt("Ingrese su nombre")

  console.log("Mensaje de prueba")
  let nombre = "Corina Figun"
  console.log(nombre)

  alert("Hola" + " " + nombreIngresado);
}

function queRico() {
  let recetas = prompt("¿Qué tipo de recetas te gusta hacer? 1)Pastas 2)Pizza 3)Postres 0)Para salir ");

  while (recetas !== "0") {

    switch (recetas) {

      case "1":
        alert("te dejamos el link de nuestras mejores pastas: www.RecetasCori/pastas.net");
        break;
      case "2":
        alert("te dejamos el link de nuestras mejores pizzas: www.RecetasCori/pizzas.net");
        break;
      case "3":
        alert("te dejamos el link de nuestras mejores postres: www.RecetasCori/postres.net");
        break;
      default:
        alert("seguramente encontraras otras recetas de tu interes");
        break;
    }

    recetas = prompt("¿Qué tipo de recetas te gusta hacer? 1)Pastas 2)Pizza 3)Postres 0)Para salir ");

  }
}


nombre();

let edad = parseInt(prompt("Contanos cuál es tu edad"));

do {
  if (edad >= 18) {
    console.log("Eres mayor de edad");
    alert("Eres mayor de edad,  puedes hacer nuestras recetas sobre tragos");

  } else {
    console.log("Eres menor de edad");
    alert("Eres menor de edad, no puedes hacer nuestras recetas sobre tragos")
  }
} while (isNaN(edad))



let cocinar = "TeGustaCocinar"

alert("Ahora queremos saber si nuestro contenido es el indicado para vos")

do {
  cocinar = prompt("contanos si te gusta cocinar para conocer el contenido de nuestro sitio (contestar con si o no)");

} while (cocinar != "si");

alert("entonces estas en el lugar indicado")

while (cocinar == "no");
alert("nopodemos auyudarte")


queRico();

function KilogramosAOtro(valor1) {
  return (cantidad1) => (valor1 * cantidad1);
}

const KilogramosALibras = KilogramosAOtro(2.20462);
const KilogramosAOnzas = KilogramosAOtro(35.274);
const KilogramosAGramos = KilogramosAOtro(1000);



const cantidad1 = 2;
console.log(KilogramosAGramos(cantidad1));

alert(KilogramosAGramos(cantidad1))

function LibrasAOtro(valor2) {
  return (cantidad2) => (valor2 / cantidad2);
}

const LibrasAKilogramos = LibrasAOtro(2.2046);
const LibrasAGramos = LibrasAOtro(0.0022046);
const LibrasAOnzas = LibrasAOtro(0.0625);

const cantidad2 = 4;

console.log(LibrasAKilogramos(cantidad2));
alert(LibrasAKilogramos(cantidad2));






function OnzasAOtro(valor3) {
  return (cantidad3) => (valor3 / cantidad3);
}


const OnzasAKilogramos = OnzasAOtro(35.274);
const OnzasAGramos = OnzasAOtro(0.035274);
const OnzasALibras = OnzasAOtro(16);

const cantidad3 = 3;

console.log(OnzasALibras(cantidad3));
alert(OnzasALibras(cantidad3));










class TiposRecetas {
  constructor(tiempo, dificultad, link) {

    this.tiempo = tiempo;
    this.dificultad = dificultad;
    this.link = link;


    this.mostrarDificultad = function () {
      console.log("Esta receta tiene un grado de dificultad" + " " + dificultad)
      this.mostrarDificultad = alert("Esta receta tiene un grado de dificultad" + " " + dificultad)
    }
  }
}



const receta1 = new TiposRecetas("treinta minutos", "baja", "www.recetasCori/pennerigatti.net");

const receta2 = new TiposRecetas("una hora y media", "alta", "www.recetascori/rogel.net");

const receta3 = new TiposRecetas("cuarenta minutos", "baja", "www.recetascori/pizzaroqueydurazno");

const receta4 = new TiposRecetas("cuarenta minutos", "media", "www.recetascori/moussemaracuya");

receta3.mostrarDificultad();

const recetasTipos = [receta1, receta2, receta3, receta4]
let dificultades = []

function elegirDificultad() {
  let recetaElegidaDificultad;
  do {
    recetaElegidaDificultad = prompt("Ingrese cuanta dificultad desea que tenga la próxima receta que va a cocinar: 1-baja 2-media 3-alta. Para salir, ingrese 0. Para buscar recetas según ingredientes presione 4");

    if (recetaElegidaDificultad >= 0 && recetaElegidaDificultad <= 4) {
      switch (recetaElegidaDificultad) {
        case 0:
          alert("Saliste, nos vemos en la próxima receta!")
          break;

        case 4:
          recetasPorIngredientes()
          break;

        default:
          buscarRecetaDificultad (recetaElegidaDificultad)
          break;
      }
    }
    else {
      alert("ingreso un valor inválido")
    }
  }

 while (recetaElegidaDificultad !== 4 && recetaElegidaDificultad !== 0)
}

function buscarRecetaDificultad (valor) {
const recetaBuscadaDificultad = recetasTipos.find (recetaDificultad => receta.id === valor)
elegirDificultad (recetaBuscadaDificultad)
}

function elegirDificultad (recetaElegidaDificultad) {
  let dificultades = prompt ("Ingrese dificultad deseada");
if (dificultades.some (recetaDificultad => recetaDificultad.id  === recetaElegidaDificultad.id)) {
  dificultades.forEach (recetaDificultad=> {
    if (recetaDificultad.id === recetaElegidaDificultad.id) {
      recetaDificultad.dificultades = recetaElegidaDificultad.dificultades + dificultades 
    }
  } )
} else {
  alert ("Muchas gracias")
}
}

ElegirReceta ();