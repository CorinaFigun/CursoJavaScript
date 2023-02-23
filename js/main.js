
//Funciones

let boton1 = document.getElementById ("btn1")
boton1.addEventListener ("click", calcularEdad) 


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


