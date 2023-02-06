
/** Pregunta sobre cocina */

function contenido() {
  let cocinar = "TeGustaCocinar"

  alert("Ahora queremos saber si nuestro contenido es el indicado para vos")

  do {
    cocinar = prompt("contanos si te gusta cocinar para conocer el contenido de nuestro sitio (contestar con si o no)");

  } while (cocinar != "si");

  alert("entonces estas en el lugar indicado. Si tu respuesta es negativa no podremos ayudarte :(")
}

/** Pregunta tipos de recetas */
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


/**Objeto con Class para postres*/

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
function calcularEdad(nombre, diaNacimiento, mesNacimiento, anioNacimiento) 
{
  let nombre=document.getElementById("nombre").value;
  let diaNacimiento=document.getElementById("dia").value;
  let mesNacimiento=document.getElementById("mes").value;
  let anioNacimiento =document.getElementById("anio").value;
  let salida=document.getElementById("salida");
  
        this.nombre=nombre;
        this.diaNacimiento=diaNacimiento;
        this.mesNacimiento=mesNacimiento;
        this.anioNacimiento=anioNacimiento;
    
        this.edad=function edad()
        {
           let calcula=0;
           let objeto=new Date();
           let dia=objeto.getDate();
           let mes= objeto.getMonth()+1;
           let hoy=objeto.getFullYear();

                if(mes<this.mesNacimiento||(mes==this.mesNacimiento&&dia<this.dia))
                {
                  return calcula=parseInt(hoy-this.anioNacimiento)-1; 
                }
                else
                {
                   return calcula=parseInt(hoy-this.anioNacimiento);  
                }
          };
    salida.innerHTML= "La edad actual de "+nombre+" es  "+this.edad()+".";

    //Agrego el mensaje sobre si puede hacer o no tragos, según mayoría de edad. Esto antes salía a través de prompts y alerts
     do {
      if (this.edad () >= 18) {
        salida2.innerHTML ="Eres mayor de edad,  puedes hacer nuestras recetas sobre tragos";
  
      } else {
        salida3.innerHTML = "Eres menor de edad, no puedes hacer nuestras recetas sobre tragos";
      }
    } while (isNaN(this.edad ()))
  
}



      function convertir(e) {

      //  Kilogramo = kilogramoIngresado * 2.20462  
        if (e.target.name == "convertirKilogramosALibras") {
        Kilo = document.getElementById("cantidad").value;

        Libra = Kilo * 2.20462;
       document.getElementById("mensaje").innerHTML = "Libras: " + Libra;

        }

        // Libras a Kilogramos LibrasIngresadas/ 2.2046
        else if (e.target.name == "convertirLibrasAKilogramos"){
         Libra = document.getElementById("cantidad").value;

        Kilo = Libra / 2.2046;
       document.getElementById("mensaje").innerHTML = ("Kilogramos: " + Kilo);

        }
            //Kilogramos a Onzas 
            else if (e.target.name == "convertirKilogramosaOnzas"){
        Onza  = document.getElementById("cantidad").value;

        Onza = Kilo *35.274;

       document.getElementById("mensaje").innerHTML = ("Onzas: " + Onza);

        }

        //Libras a Onzas
            else if (e.target.name == "convertirLibrasAOnzas"){
         Libra2 = document.getElementById("cantidad").value;

       Libra2= Libra2 / 0.0625;

       document.getElementById("mensaje").innerHTML = ("Onzas: " + Libra2);  

        }

        
         
        }



        //Codigos anteriores


     

/**funcion para pedir la edad 

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
  } while (isNaN(edad))}
*/   



/**Así había armado antes el conversor. Funcionaba, dandole un valor desde la consola, pero no sabía hacer lo del prompt
 * Este conversor es previo a poder hacerlo con prompt y alert
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


/** Este conversor es cuando ya podía hacerlo con prompt y alert
 * Previo a poder hacerlo a través de html
 * 
 * 
 * /**Conversor con switch */
//function conversor() {
  /*let medidaElegida;
  do {
    medidaElegida = parseInt(prompt("Ingrese qué medidas desea convertir 1-Kilogramos a Libras 2-Libras a Kilogramos 3-Kilogramos a Onzas 4- Onzas a Kilogramos 5-Libras a Onzas. Si no queres hacer ninguna conversión, ingresa 0. "))

    if (medidaElegida >= 0 && medidaElegida <= 6) {
      switch (medidaElegida) {
        case 1:


          break;

        case 2:
          convertirLibrasAKilogramos()
          break;

        case 3:
          convertirKilogramosaOnzas()
          break;

        case 4:
          convertirOnzasaKilogramos()
          break;

        case 5:
          convertirLibrasAOnzas()
          break;

        case 0:
          alert("Saliste, nos vemos en la próxima receta!")
          break;

      }
    }
    else {
      alert("ingresó un valor inválido")
    }
  }

  while (medidaElegida !== 6 && medidaElegida !== 0)
//}


 * 
 * function convertirKilogramosALibras() {
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

function convertirLibrasAOnzas() {
  let libraIngresada2 = prompt("Ingrese las libras a convertir en onzas")
  console.log("cantidad en libras:", libraIngresada2 / 0.0625)

  alert("El resultado es" + " " + libraIngresada2 / 0.0625);
}

*/


/**Funcion de eleccion de postres
 * 
 * 
 * 
 * const postre1 = new TiposPostres("treinta minutos", "baja", "www.recetasCori/moussemaracuyá.net", 1);

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

 */