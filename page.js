// Declaración de una variable
var mensaje = "¡Hola, mundo!";

// Muestra el mensaje en la consola del navegador
console.log(mensaje);

webgazer.begin()
webgazer.setGazeListener(function(data, elapsedTime) {
	if (data == null) {
		return;
	}
	var xprediction = data.x; //these x coordinates are relative to the viewport
	var yprediction = data.y; //these y coordinates are relative to the viewport
   console.log(data.x, data.y)
}).begin();
