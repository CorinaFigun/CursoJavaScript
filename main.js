

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
        prompt ("te dejamos el link de nuestras mejores pastas:");
        break;
      case "2":
        prompt ("te dejamos el link de nuestras mejores pizzas:");
        break;
      case "3":
        prompt ("te dejamos el link de nuestras mejores postres:");
        break;
      default:
        prompt ("seguramente encontraras otras recetas de tu interes");
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

do {
  alert = ("Ahora queremos saber si nuestro contenido es el indicado para vos")
  cocinar = prompt("contanos si te gusta cocinar para conocer el contenido de nuestro sitio (contestar con si o no)")
}

while (cocinar != "si") {

  alert = ("si tu respuesta no es afirmativa no tenemos cómo ayudarte")
  Cocinar = prompt("entonces estas en el lugar indicado")
}




queRico();
function TiposRecetas (tipo, tiempo, dificultad, link ) {

  this.tipo = tipo;
  this.tiempo = tiempo;
  this.dificultad = dificultad;
  this.link = link;
  
  this.mostrarDificultad = function () {
    console.log("Esta receta es" + " " + dificultad)

  }
}

TiposRecetas ();
 this.mostrarDificultad (); 

const receta1 = new TiposRecetas ("pastas","treinta minutos","baja", "www.recetasCori/pennerigatti.net"); 
  
const receta2 = new TiposRecetas ("postres", "una hora y media" , "alta", "www.recetascori/rogel.net");

const receta3 = new TiposRecetas ("pizzas", "cuarenta minutos", "baja", "www.recetascori/pizzaroqueydurazno"); 
  
const receta4 = new TiposRecetas ("postres", "cuarenta minutos", "baja", "www.recetascori/moussemaracuya"); 

  receta3.mostrarDificultad();

if ("link" in receta1) {

  console.log("Tenemos el link de la receta de penne rigatti")
}

for (const propiedad in receta1) {
console.log (receta1 [propiedad]);
}

const ingredientes = [ "harina", "aceite", "huevos", "polvo de hornear", "levadura", "verduras", "frutas", "azucar", "sal", "leche", "agua" ] 
for (const ingrediente of ingredientes) {
  console.log (ingrediente); 
}


class Postres {

  constructor (harina, huevos, azucar, fruta, leche, crema, otros) {
  this.harina = harina;
  this.huevos= huevos;
  this.azucar = azucar;
  this.fruta= fruta;
  this.leche= leche;
  this.crema = crema;
  this.otros= otros;
}
}

const postres = [
  new Postres ( "no" ,  "no",  "100 gr",  "1 maracuya",  "no",  "quinientos gr", "leche condensada - 25 ml" ),
  new Postres ("500 gr",  "2",  "100 gr",  "no",  "no",  "no", "no"),
];

let operacion = prompt ("Qué te gustaría? 1- postres con frutas 2- postres faciles 3- tortas 4-no me gustan los postres" );
while (operacion !== "4") {
  switch (operacion) {

    case "1":
    postresConFrutas () 
      let frutas = prompt ("Queres hacer una receta con frutas?")
    
    break;

    case "2":

    break;

    case "3":

    break;

    default:
      console.log ("opcion incorrecta");
      break;
  }
}