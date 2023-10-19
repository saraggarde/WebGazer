console.log("Ancho de pantalla: " + screen.width);
console.log("Alto de pantalla: " + screen.height);


document.getElementById('LeftMid').addEventListener('click', function() {
  var boton = document.getElementById("LeftMid");
  console.log("LeftMid: " + boton.offsetLeft + ", "+ boton.offsetTop);
});
document.getElementById('LeftBot').addEventListener('click', function() {
  var boton = document.getElementById("LeftBot");
  console.log("LeftBot: " + boton.offsetLeft + ", "+ boton.offsetTop);
});

webgazer.begin()
webgazer.setGazeListener(function(data, elapsedTime) {
	if (data == null) {
		return;
	}
	var xprediction = data.x; //these x coordinates are relative to the viewport
	var yprediction = data.y; //these y coordinates are relative to the viewport
   //console.log(data.x, data.y)
}).begin();
