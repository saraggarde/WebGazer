// Este es un comentario de una sola línea

/* Este es un comentario
   de varias líneas */

// Declaración de una variable
var mensaje = "¡Hola, mundo!";

// Muestra el mensaje en la consola del navegador
console.log(mensaje);

// Función que muestra una alerta en la página web
function mostrarAlerta() {
    alert(mensaje);
}

// Llamada a la función cuando se hace clic en un botón
document.getElementById("boton").addEventListener("click", mostrarAlerta);

webgazer.begin()
webgazer.setGazeListener(function(data, elapsedTime) {
	if (data == null) {
		return;
	}
	var xprediction = data.x; //these x coordinates are relative to the viewport
	var yprediction = data.y; //these y coordinates are relative to the viewport
   console.log(data.x)
   console.log(data.y)
	console.log(elapsedTime); //elapsed time is based on time since begin was called
}).begin();
