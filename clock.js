// Global variables
var timerId;
var countdownTime = 0;
var timerHasLooped = 0;
var timerHasStarted = 0;
var timerHasPaused = 0;

function millisecondsToSeconds(time) {
    return Math.floor(time / 1000);
}

function minutesToSeconds(time) {
    return time * 60;
}

function secondsToMinutes(time) {
    return time / 60;
}

function secondsToMMSS(time) {
    var secondsRemaining;
    var minutesRemaining;
    var MMSSRemaining;

    secondsRemaining = time % 60;
    minutesRemaining = Math.floor(time / 60);

    return [minutesRemaining, secondsRemaining];
}

function startCountDown() {
    if (timerHasStarted === 0) {
        startCountDownClock();
        timerHasStarted = 1;
    } else if (timerHasPaused === 1) {
        timerId = setInterval(countdown, 1000);
        timerHasPaused = 0;
    }
}

function countdown() {
    var MMSS;
    var clock;
    var minutesRemaining = 0;
    var secondsRemaining = 0;

    MMSS = secondsToMMSS(countdownTime);

    minutesRemaining = MMSS[0];
    secondsRemaining = MMSS[1];
    colon = ":"

    if (minutesRemaining < 10) {
        minutesRemaining = "0" + minutesRemaining;
    }

    if (secondsRemaining < 10) {
        secondsRemaining = "0" + secondsRemaining;
    }

    clock = minutesRemaining + colon + secondsRemaining;

    timerHasStarted = 1;

    document.getElementById("clock").innerHTML = clock;

    countdownTime -= 1;

    if (countdownTime < 0) {
        clearInterval(timerId);
        if (timerHasLooped === 0) {
            startBreakClock();
            timerHasLooped = 1;
        } else {
            startCountDownClock();
            timerHasLooped = 0;
        }

    }

}

function getSessionLength() {
    var sessionTime = 0;
    var sessionLength = document.getElementById("sessionLength").value;
    sessionTime = parseFloat(sessionLength);
    return sessionTime;
}

function getbreakLength() {
    var breakTime = 0;
    var breakLength = document.getElementById("breakLength").value;
    breakTime = parseFloat(breakLength);
    return breakTime;
}



function startCountDownClock() {
    var sessionTime = getSessionLength();
    if ((typeof sessionTime === "number") && Math.floor(sessionTime) === sessionTime) {
        countdownTime = minutesToSeconds(sessionTime);
        document.getElementById("sessionLength").disabled = true;
        document.getElementById("breakLength").disabled = true;
        timerId = setInterval(countdown, 1000);
    }
    else{
    	 document.getElementById("clock").innerHTML = "Error";
    	 console.log("Please insert a whole number!");
    }
}

function startBreakClock() {
    var breakTime = 0;
    var breakTime = getbreakLength();
    if ((typeof breakTime === "number") && Math.floor(breakTime) === breakTime) {
        countdownTime = minutesToSeconds(breakTime);
        document.getElementById("sessionLength").disabled = true;
        document.getElementById("breakLength").disabled = true;
        timerId = setInterval(countdown, 1000);
    }
    else{
    	 document.getElementById("clock").innerHTML = "Error";
    	 console.log("Please insert a whole number!");
    }
}

function stopCountDown() {
    clearInterval(timerId);
    document.getElementById("clock").innerHTML = "00:00";
    timerHasStarted = 0;
    document.getElementById("sessionLength").disabled = false;
    document.getElementById("breakLength").disabled = false;
}

function pauseCountDown() {
    if (timerHasPaused === 0) {
        clearInterval(timerId);
        timerHasPaused = 1;
    }
}
