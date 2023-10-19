// Declaración de una variable
var mensaje = "¡Hola, mundo!";

// Muestra el mensaje en la consola del navegador
console.log(mensaje);

document.getElementById('miBoton').addEventListener('click', function() {
  // Agrega aquí el código que se ejecutará cuando se haga clic en el botón
  alert('¡Hiciste clic en el botón!');
});

webgazer.begin()
webgazer.setGazeListener(function(data, elapsedTime) {
	if (data == null) {
		return;
	}
	var xprediction = data.x; //these x coordinates are relative to the viewport
	var yprediction = data.y; //these y coordinates are relative to the viewport
   console.log(data.x, data.y)
}).begin();
