function limpiarFormulario(){
	 document.getElementById("miForm").reset();
}
	 var comparar = function(n1, n2, n3){
	
 var numero1 = parseInt(document.getElementById("numero1").value);
 var numero2 = parseInt(document.getElementById("numero2").value);
 var numero3 = parseInt(document.getElementById("numero3").value);
 
 if(numero1 <= numero2 && numero1 <= numero3)
 	menor = numero1;
 else if(numero2 < numero1 && numero2 <= numero3)
 	menor = numero2;
 else
 	menor = numero3;

 return menor;
}

function limpiarFormulario(){
	 document.getElementById("miForm").reset();
}
	 var conversion = function(d1){
	
 var distancia1 = parseInt(document.getElementById("distancia1").value);
 var resultado = distancia1 / 2.54;

 return resultado;
}
function limpiarFormulario(){
	 document.getElementById("miForm").reset();
}
     var cambio = function(l1){

var longitud1 = parseInt(document.getElementById("longitud1").value);
var resultado = longitud1 * 1.0936;

return resultado;
}