function limpiarFormulario(){
	 document.getElementById("miForm").reset();

}
	var velocidad = function(n1, n2){
	
 var n1 = parseFloat(document.getElementById("m").value);
 var n2 = parseFloat(document.getElementById("s").value);

ms=n1/n2;
 return "VELOCIDAD ES DE "+ms+" m/s ";
}


function limpiaFormulario(){
	 document.getElementById("borrar").reset();

}
	var velocidadkm = function(n1, n2){
	
 var n1 = parseFloat(document.getElementById("km").value);
 var n2 = parseFloat(document.getElementById("h").value);

kmh=n1/n2;
 return "VELOCIDAD ES DE "+kmh+" km/h ";
}


function limpFormulario(){
	 document.getElementById("eliminar").reset();

}
	var derivada = function(n1, n2){

 var n1 = parseFloat(document.getElementById("num").value);
 var n2 = parseFloat(document.getElementById("ex").value);

derivada=n1*n2;
exponente=n2-1;
num=n1;
ex=n2;
 return "LA DERIVADA DE LA EXPRESION "+ num + "X" + "^" + ex + " ES : " + derivada +"X"+"^"+exponente;

}