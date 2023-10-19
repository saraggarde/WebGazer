console.log("Ancho de pantalla: " + screen.width);
console.log("Alto de pantalla: " + screen.height);
var estado = "cal";
var clicks = 0;
var LeftTop = document.getElementById("LeftTop");
var LeftMid = document.getElementById("LeftMid");
var LeftBot = document.getElementById("LeftBot");

var MidTop = document.getElementById("MidTop");
var MidMid = document.getElementById("MidMid");
var MidBot = document.getElementById("MidBot");

var RigTop = document.getElementById("RigTop");
var RigMid = document.getElementById("RigMid");
var RigBot = document.getElementById("RigBot");

LeftTop.style.display = "none";
LeftMid.style.display = "none";
LeftBot.style.display = "none";
MidTop.style.display = "none";
MidBot.style.display = "none";
RigTop.style.display = "none";
RigMid.style.display = "none";
RigBot.style.display = "none";



webgazer.begin()
webgazer.setGazeListener(function(data, elapsedTime) {
	if (data == null) {
		return;
	}
	var xprediction = data.x; //these x coordinates are relative to the viewport
	var yprediction = data.y; //these y coordinates are relative to the viewport
   //console.log(data.x, data.y)
}).begin();
