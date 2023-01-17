


function nombre() {
  let nombreIngresado = prompt("Ingrese su nombre")

  console.log("Mensaje de prueba")
  let nombre = "Corina Figun"
  console.log(nombre)

  alert("Hola" + " " + nombreIngresado);
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


function queRico() {
  let recetas = prompt("¿Qué tipo de recetas te gusta hacer? 1)Pastas 2)Pizza 3)Postres 0)Para salir ") ;

  while (recetas !== 0) {

    switch (recetas) {

      case 1:
        alert("te dejamos el link de nuestras mejores pastas:") ;
        break;
      case 2:
        alert("te dejamos el link de nuestras mejores pizzas:") ;
        break;
      case 3:
        alert("te dejamos el link de nuestras mejores postres:") ;
        break;
      default:
        alert("seguramente encontraras otras recetas de tu interes") ;
        break;
    }

    recetas = prompt("¿Qué tipo de recetas te gusta hacer? 1)Pastas 2)Pizza 3)Postres 0)Para salir ") ;

  }
}
queRico()

