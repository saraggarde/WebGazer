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
MidMid.style.display = "block";
MidBot.style.display = "none";
RigTop.style.display = "none";
RigMid.style.display = "none";
RigBot.style.display = "none";

// 2
LeftTop.addEventListener('click', function() {
	console.log("LeftTop: " + LeftTop.offsetLeft + ", "+ LeftTop.offsetTop);
	clicks ++;
	if (clicks == 5) {
		clicks = 0;
		LeftTop.style.display = "none";
		MidTop.style.display = "block";
	}
});
//5
LeftMid.addEventListener('click', function() {
	console.log("LeftMid: " + LeftMid.offsetLeft + ", "+ LeftMid.offsetTop);
	clicks ++;
	if (clicks == 5) {
		clicks = 0;
		LeftMid.style.display = "none";
		RigMid.style.display = "block";
	}
});
// 7
LeftBot.addEventListener('click', function() {
	console.log("LeftBot: " + LeftBot.offsetLeft + ", "+ LeftBot.offsetTop);
	clicks ++;
	if (clicks == 5) {
		clicks = 0;
		LeftBot.style.display = "none";
		MidBot.style.display = "block";
	}
});
// 3
MidTop.addEventListener('click', function() {
	console.log("MidTop: " + MidTop.offsetLeft + ", "+ MidTop.offsetTop);
	clicks ++;
	if (clicks == 5) {
		clicks = 0;
		MidTop.style.display = "none";
		RigTop.style.display = "block";
	}
});
// 1
MidMid.addEventListener('click', function() {
	console.log("MidMid: " + MidMid.offsetLeft + ", "+ MidMid.offsetTop);
	clicks ++;
	if (clicks == 5) {
		clicks = 0;
		MidMid.style.display = "none";
		LeftTop.style.display = "block";
	}
});
// 8
MidBot.addEventListener('click', function() {
	console.log("MidBot: " + MidBot.offsetLeft + ", "+ MidBot.offsetTop);
	clicks ++;
	if (clicks == 5) {
		clicks = 0;
		MidBot.style.display = "none";
		RigBot.style.display = "block";
	}
});
//4
RigTop.addEventListener('click', function() {
	console.log("RigTop: " + RigTop.offsetLeft + ", "+ RigTop.offsetTop);
	clicks ++;
	if (clicks == 5) {
		clicks = 0;
		RigTop.style.display = "none";
		LeftMid.style.display = "block";
	}
});
// 6
RigMid.addEventListener('click', function() {
	console.log("RigMid: " + RigMid.offsetLeft + ", "+ RigMid.offsetTop);
	clicks ++;
	if (clicks == 5) {
		clicks = 0;
		RigMid.style.display = "none";
		LeftBot.style.display = "block";
	}
});
// 9
RigBot.addEventListener('click', function() {
	console.log("RigBot: " + RigBot.offsetLeft + ", "+ RigBot.offsetTop);
	clicks ++;
	if (clicks == 5) {
		clicks = 0;
		RigBot.style.display = "none";
		if (estado == "cal") MidMid.style.display = "block";
	}
	estado = "val";
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
