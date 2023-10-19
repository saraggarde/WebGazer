console.log("Ancho de pantalla: " + screen.width);
console.log("Alto de pantalla: " + screen.height);

var estado = "cal";
var clicks = 0;
var contenido = '';

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

// 2
LeftTop.addEventListener('click', function() {
	contenido += ("LeftTop: " + LeftTop.offsetLeft + ", "+ LeftTop.offsetTop + "\n");
	clicks ++;
	if (clicks == 5) {
		clicks = 0;
		LeftTop.style.display = "none";
		MidTop.style.display = "block";
	}
});
//5
LeftMid.addEventListener('click', function() {
	contenido += ("LeftMid: " + LeftMid.offsetLeft + ", "+ LeftMid.offsetTop + "\n");
	clicks ++;
	if (clicks == 5) {
		clicks = 0;
		LeftMid.style.display = "none";
		RigMid.style.display = "block";
	}
});
// 7
LeftBot.addEventListener('click', function() {
	contenido += ("LeftBot: " + LeftBot.offsetLeft + ", "+ LeftBot.offsetTop + "\n");
	clicks ++;
	if (clicks == 5) {
		clicks = 0;
		LeftBot.style.display = "none";
		MidBot.style.display = "block";
	}
});
// 3
MidTop.addEventListener('click', function() {
	contenido += ("MidTop: " + MidTop.offsetLeft + ", "+ MidTop.offsetTop + "\n");
	clicks ++;
	if (clicks == 5) {
		clicks = 0;
		MidTop.style.display = "none";
		RigTop.style.display = "block";
	}
});
// 1
MidMid.addEventListener('click', function() {
	contenido += ("MidMid: " + MidMid.offsetLeft + ", "+ MidMid.offsetTop + "\n");
	clicks ++;
	if (clicks == 5) {
		clicks = 0;
		MidMid.style.display = "none";
		LeftTop.style.display = "block";
	}
});
// 8
MidBot.addEventListener('click', function() {
	contenido += ("MidBot: " + MidBot.offsetLeft + ", "+ MidBot.offsetTop + "\n");
	clicks ++;
	if (clicks == 5) {
		clicks = 0;
		MidBot.style.display = "none";
		RigBot.style.display = "block";
	}
});
//4
RigTop.addEventListener('click', function() {
	contenido += ("RigTop: " + RigTop.offsetLeft + ", "+ RigTop.offsetTop + "\n");
	clicks ++;
	if (clicks == 5) {
		clicks = 0;
		RigTop.style.display = "none";
		LeftMid.style.display = "block";
	}
});
// 6
RigMid.addEventListener('click', function() {
	contenido += ("RigMid: " + RigMid.offsetLeft + ", "+ RigMid.offsetTop + "\n");
	clicks ++;
	if (clicks == 5) {
		clicks = 0;
		RigMid.style.display = "none";
		LeftBot.style.display = "block";
	}
});
// 9
RigBot.addEventListener('click', function() {
	contenido += ("RigBot: " + RigBot.offsetLeft + ", "+ RigBot.offsetTop + "\n");
	clicks ++;
	if (clicks == 5) {
		clicks = 0;
		RigBot.style.display = "none";
		if (estado == "cal") MidMid.style.display = "block";
		if (estado == "val") {
			var blob = new Blob([contenido], { type: 'text/plain' });
			var enlace = document.createElement('a');
			enlace.href = URL.createObjectURL(blob);
			enlace.download = 'archivo.txt';
			enlace.innerHTML = 'Descargar archivo';
			enlace.style.position = 'fixed';
			enlace.style.top = '50%';
			enlace.style.left = '50%';
			document.body.appendChild(enlace);
			webgazer.pause();
			webgazer.resume();
			console.log("Fin");
		}
		estado = "val";
	}
});

webgazer.begin()
webgazer.setGazeListener(function(data, elapsedTime) {
	if (data == null) {
		return;
	}
	var xprediction = data.x;
	var yprediction = data.y;
        contenido += (data.x + ", " data.y + "\n");
}).begin();
