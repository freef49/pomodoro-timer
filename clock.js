// Global variables

var clock;
var currentTime;
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
	countdownTime -= 1;
	currentTime += 1;
	console.log(countdownTime);
}

function startCountDown() {
	clock = document.getElementById("clock");

	currentTime = millisecondsToSeconds(performance.now());

	countdownTime = minutesToSeconds(sessionTime);

	console.log(currentTime);
	
	while ( countdownTime > 0){
		if (millisecondsToSeconds(performance.now()) == currentTime + 1){
		
		countdownTime -= 1;
		currentTime += 1;
		console.log(countdownTime);
		} 
	}
	

	console.log("something");
}

// Programme logic

startCountDown();


