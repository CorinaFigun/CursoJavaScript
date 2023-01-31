

function nombre() {
  let nombreIngresado = prompt("Ingrese su nombre")

  console.log("Mensaje de prueba")
  let nombre = "Corina Figun"
  console.log(nombre)

  alert("Hola" + " " + nombreIngresado);
}

function edad() {
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

}

function contenido() {
  let cocinar = "TeGustaCocinar"

  alert("Ahora queremos saber si nuestro contenido es el indicado para vos")

  do {
    cocinar = prompt("contanos si te gusta cocinar para conocer el contenido de nuestro sitio (contestar con si o no)");

  } while (cocinar != "si");

  alert("entonces estas en el lugar indicado. Si tu respuesta es negativa no podremos ayudarte :(")
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


/**Objeto con Class */

class TiposPostres {
  constructor(tiempo, dificultad, link, id) {

    this.tiempo = tiempo;
    this.dificultad = dificultad;
    this.link = link;
    this.id = id;


    this.mostrarDificultad = function () {
      console.log("Esta receta tiene un grado de dificultad" + " " + dificultad)
      this.mostrarDificultad = alert("Esta receta tiene un grado de dificultad" + " " + dificultad)
    }
  }
}



const postre1 = new TiposPostres("treinta minutos", "baja", "www.recetasCori/moussemaracuyá.net", 1);

const postre2 = new TiposPostres("una hora y media", "media", "www.recetascori/tiramisu.net", 2);

const postre3 = new TiposPostres("cuarenta minutos", "alta", "www.recetascori/rogel", 3);



const postres = [postre1, postre2, postre3]
let postresDificultades = []

function seleccionPostre() {
  let postreElegido;
  do {
    postreElegido = parseInt(prompt("Ingrese el grado de dificultad del postre que le gustaría cocinar: 1-baja 2-media 3-alta. Para salir, ingrese 0. Para buscar recetas de pastas presione 4"))

    if (postreElegido >= 0 && postreElegido <= 4) {
      switch (postreElegido) {
        case 1:
          alert("Podes ver nuestra receta de mousse de maracuya en: www.recetasCori/moussemaracuyá.net");
          break;

        case 2:
          alert("Podes ver nuestra receta de mousse de tiramisu en: www.recetascori/tiramisu.net");
          break;

        case 3:
          alert("Podes ver nuestra receta de mousse de rogel en: www.recetascori/rogel.net");
          break;

        case 0:
          alert("Saliste, nos vemos en la próxima receta!")
          break;

        case 4:
          alert("Más adelante podras encontrar otro tipo de recetas")
          break;


      }
    }
    else {
      alert("ingresó un valor inválido")
    }
  }

  while (postreElegido !== 4 && postreElegido !== 0)
}






nombre();


edad();



contenido();


queRico();


seleccionPostre();











function conversor() {
  let medidaElegida;
  do {
    medidaElegida = parseInt(prompt("Ingrese qué medidas desea convertir 1-Kilogramos a Libras 2-Libras a Kilogramos 3-Kilogramos a Onzas 4- Onzas a Kilogramos. Si no queres hacer ninguna conversión, ingresa 0. "))

    if (medidaElegida >= 0 && medidaElegida <= 5) {
      switch (medidaElegida) {
        case 1:

          convertirKilogramosALibras()

          break;

        case 2:
          convertirLibrasAKilogramos()
          break;

        case 3:
          convertirKilogramosaOnzas()
          break;

        case 0:
          alert("Saliste, nos vemos en la próxima receta!")
          break;

        case 4:
          convertirOnzasaKilogramos()
          break;


      }
    }
    else {
      alert("ingresó un valor inválido")
    }
  }

  while (medidaElegida !== 4 && medidaElegida !== 0)
}

function convertirKilogramosALibras() {
  let kilogramoIngresado = prompt("Ingrese los kilos a convertir a libras")
  console.log("cantidad en kilos:", kilogramoIngresado * 2.20462)

  alert("El resultado es" + " " + kilogramoIngresado * 2.20462);
}


function convertirLibrasAKilogramos() {
  let libraIngresada = prompt("Ingrese las libras a convertir en Kilogramos")
  console.log("cantidad en libras:", libraIngresada / 2.20462)

  alert("El resultado es" + " " + libraIngresada / 2.20462);
}

function convertirKilogramosaOnzas() {
  let kilogramoIngresado2 = prompt("Ingrese los kilogramos a convertir en onzas")
  console.log("cantidad en libras:", kilogramoIngresado2 * 35.274)

  alert("El resultado es" + " " + kilogramoIngresado2 * 35.274);
}

function convertirOnzasaKilogramos() {
  let onzaIngresada = prompt("Ingrese los kilogramos a convertir en onzas")
  console.log("cantidad en libras:", onzaIngresada / 35.274)

  alert("El resultado es" + " " + onzaIngresada / 35.274);
}

conversor ();

/**Así había armado antes el conversor. Funcionaba, dandole un valor desde la consola
 * 
 * 
 * function KilogramosAOtro(valor1) {
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


 * 
 * 
 * 
 */