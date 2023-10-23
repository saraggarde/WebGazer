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
		MidMid.style.display = "block";
		estado = "val";
		setTimeout(mostrarSiguiente, 5000);
		contenido += ("Val_MidMid: " + MidMid.offsetLeft + ", "+ MidMid.offsetTop + "\n");
	}
});

function mostrarSiguiente() {
	// 1
	if (MidMid.style.display == "block") {
		MidMid.style.display = "none";
		LeftTop.style.display = "block";
		setTimeout(mostrarSiguiente, 5000);
		contenido += ("Val_LeftTop: " + LeftTop.offsetLeft + ", "+ LeftTop.offsetTop + "\n");
	}
	// 2
	if (LeftTop.style.display == "block") {
		LeftTop.style.display = "none";
		MidTop.style.display = "block";
		setTimeout(mostrarSiguiente, 5000);
		contenido += ("Val_MidTop: " + MidTop.offsetLeft + ", "+ MidTop.offsetTop + "\n");
	}
	// 3
	if (MidTop.style.display == "block") {
		MidTop.style.display = "none";
		RigTop.style.display = "block";
		setTimeout(mostrarSiguiente, 5000);
		contenido += ("Val_RigTop: " + RigTop.offsetLeft + ", "+ RigTop.offsetTop + "\n");
	}
	// 4
	if (RigTop.style.display == "block") {
		RigTop.style.display = "none";
		LeftMid.style.display = "block";
		setTimeout(mostrarSiguiente, 5000);
		contenido += ("Val_LeftMid: " + LeftMid.offsetLeft + ", "+ LeftMid.offsetTop + "\n");
	}
	// 5
	if (LeftMid.style.display == "block") {
		LeftMid.style.display = "none";
		RigMid.style.display = "block";
		setTimeout(mostrarSiguiente, 5000);
		contenido += ("Val_RigMid: " + RigMid.offsetLeft + ", "+ RigMid.offsetTop + "\n");
	}
	// 6
	if (RigMid.style.display == "block") {
		RigMid.style.display = "none";
		LeftBot.style.display = "block";
		setTimeout(mostrarSiguiente, 5000);
		contenido += ("Val_LeftBot: " + LeftBot.offsetLeft + ", "+ LeftBot.offsetTop + "\n");
	}
	// 7
	if (LeftBot.style.display == "block") {
		LeftBot.style.display = "none";
		MidBot.style.display = "block";
		setTimeout(mostrarSiguiente, 5000);
		contenido += ("Val_MidBot: " + MidBot.offsetLeft + ", "+ MidBot.offsetTop + "\n");
	}
	// 8
	if (MidBot.style.display == "block") {
		MidBot.style.display = "none";
		RigBot.style.display = "block";
		setTimeout(mostrarSiguiente, 5000);
		contenido += ("Val_RigBot: " + RigBot.offsetLeft + ", "+ RigBot.offsetTop + "\n");
	}
	// 9
	if (RigBot.style.display == "block") {
		RigBot.style.display = "none";
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
}

webgazer.begin()
webgazer.setGazeListener(function(data, elapsedTime) {
	if (data == null) return;
	var xprediction = data.x;
	var yprediction = data.y;
        contenido += (xprediction + ", " + yprediction + "\n");
}).begin();
