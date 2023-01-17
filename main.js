function QueRico () {
  
  
const pastas = ["pastas", "pasta", "tallarines", "ravioles", "ñoquis", "fideos", "fideo"]

const pizza = ["pizza", "piza", "pisa", "pizzeta", "muzzarella", "fugazzeta"]

const postres = ["postre", "postres", "tiramisu", "mousse"]


if (pastas) { prompt ("te dejamos el link de nuestras mejores pastas:")}

if (pizza) { prompt ("te dejamos el link de nuestras mejores pizzas")}

if (postres) {prompt ("te dejamos el link de nuestros mejores postres")}

else {prompt ("lo siento")}
}

let nombreIngresado = prompt ("Ingrese su nombre")

console.log ("Mensaje de prueba")
let nombre = "Corina Figun"
console.log (nombre)

alert ("Hola" + " " + nombreIngresado);

let edad = parseInt (prompt ("Contanos cuál es tu edad"));

do {
  if (edad >= 18) {
    console.log("Eres mayor de edad");
    alert ("Eres mayor de edad,  puedes hacer nuestras recetas sobre tragos");
    
  } else {
    console.log("Eres menor de edad");
    alert ("Eres menor de edad, no puedes hacer nuestras recetas sobre tragos")
  }
} while(isNaN(edad))



let cocinar = "TeGustaCocinar"

do {
alert= ("Ahora queremos saber si nuestro contenido es el indicado para vos")
cocinar = prompt ("contanos si te gusta cocinar para conocer el contenido de nuestro sitio (contestar con si o no)")
}

while (cocinar != "si" )   {

alert= ("si tu respuesta no es afirmativa no tenemos cómo ayudarte")
Cocinar = prompt ("entonces estas en el lugar indicado")}

let gustosCocina = prompt ("¿Qué tipo de recetas te gusta hacer?")
  
console.log ("gustos cocina")


  
  
const pastas = ["pastas", "pasta", "tallarines", "ravioles", "ñoquis", "fideos", "fideo"]
  
const pizza = ["pizza", "piza", "pisa", "pizzeta", "muzzarella", "fugazzeta"]
  
const postres = ["postre", "postres", "tiramisu", "mousse"]
  
let recetas = "RecetasEspecificas"

do {
alert= ("¿Qué tipo de recetas te gusta hacer?")
pastas = prompt ("te dejamos el link de nuestras mejores pastas:")
}

while (recetas != "pastas" )  {

  alert= ("si tu respuesta no es afirmativa no tenemos cómo ayudarte")
  Cocinar = prompt ("entonces estas en el lugar indicado")

}
QueRico ()

