// Global variables

var clock;
var currentTime = 0;
var sessionTime = 1;
var breakTime;
var countdownTime;

// Functions
function millisecondsToSeconds(time) {
	return Math.floor(time/1000);
}

function minutesToSeconds(time) {
	return time*60;
}

function secondsToMMSS(time) {
	var secondsRemaining;
	var minutesRemaining;
	var MMSSRemaining;

	secondsRemaining = time%60;
	minutesRemaining = Math.floor(time/60);

	return [minutesRemaining, secondsRemaining];
}

function countdown(){

	
	document.getElementById("clock").innerHTML = countdownTime;

	countdownTime -= 1;

	if(countdownTime === 0){
		clearInterval(timerId)
	}


}
// Programme logic

// countdownTime = minutesToSeconds(sessionTime)

countdownTime = 5;

var timerId = setInterval(countdown, 1000);













