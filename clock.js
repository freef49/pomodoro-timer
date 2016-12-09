// Global variables
var timerId;
var countdownTime = 0;
var timerHasLooped = 0;
var timerHasStarted = 0;
var timerHasPaused = 0;

function millisecondsToSeconds(time) {
	return Math.floor(time/1000);
}

function minutesToSeconds(time) {
	return time*60;
}

function secondsToMinutes(time) {
	return time/60;
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
	var MMSS;
	var clock;
	var minutesRemaining = 0;
	var secondsRemaining = 0;

	MMSS = secondsToMMSS(countdownTime);

	minutesRemaining = MMSS[0];
	secondsRemaining = MMSS[1];
	colon = " : "

	if (minutesRemaining < 10){
		minutesRemaining = "0" + minutesRemaining;
	}

	if (secondsRemaining < 10) {
		secondsRemaining = "0" + secondsRemaining;
	}

	clock = minutesRemaining + colon + secondsRemaining;

	timerHasStarted = 1;

	document.getElementById("clock").innerHTML = clock;

	countdownTime -= 1;

	if(countdownTime < 0){
		clearInterval(timerId);
		if (timerHasLooped === 0){
			startBreak();
			timerHasLooped = 1;
		}
		else{
			startCountDownClock();
			timerHasLooped = 0;
		}
		
	}

}

function startCountDown(){
	if (timerHasStarted === 0){
		startCountDownClock();
		}
	else if(timerHasPaused === 1){
		timerId = setInterval(countdown, 1000);
		timerHasPaused = 0;
	}
}

function startCountDownClock(){
		var sessionTime = getSessionLength();
		countdownTime = sessionTime;
		timerId = setInterval(countdown, 1000);
}

function getSessionLength() {
	var sessionTime = 0;
	var sessionLength = document.getElementById("sessionLength").value;
	sessionTime = parseInt(sessionLength);	 
	return sessionTime = minutesToSeconds(sessionTime);
}

function getbreakLength() {
	var breakTime = 0;
	var breakLength = document.getElementById("breakLength").value;
	breakTime = parseInt(breakLength);
	return breakTime = minutesToSeconds(breakTime);
}

function stopCountDown(){
	clearInterval(timerId);
	document.getElementById("clock").innerHTML = "00 : 00";
	timerHasStarted = 0;
}

function pauseCountDown() {
	if (timerHasPaused === 0){
		clearInterval(timerId);
		timerHasPaused = 1;
	}
}

function startBreak() {
	var breakTime = 0;

	var breakTime = getbreakLength();

	countdownTime = breakTime;
	timerId = setInterval(countdown, 1000);
}