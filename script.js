const topicHeader = document.getElementById("topic");
const accessCodeContainer = document.getElementById("access-code-container");
const schoolSelect = document.getElementById("school-select");
const accessCodeInput = document.getElementById("access-code-input");
const startButton = document.getElementById("start-button");
const timerContainer = document.getElementById("timer-container");
const timer = document.getElementById("timer");

let time = 300; // 5 minutes in seconds
let countdownInterval;

function startTimer() {
    topicHeader.textContent = schoolSelect.options[schoolSelect.selectedIndex].text;
    accessCodeContainer.style.display = "none";
    timerContainer.style.display = "block";

    countdownInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer.textContent = minutes + ":" + seconds;

    if (time === 0) {
        clearInterval(countdownInterval);
        timer.textContent = "Time's up!";
    }

    time--;
}

function validateAccessCode() {
    const selectedSchool = schoolSelect.value;
    const accessCode = accessCodeInput.value;

    let isValid = false;

    if (selectedSchool === "preuss" && accessCode === "k98w4Vyd^") {
        isValid = true;
    } else if (selectedSchool === "crawford" && accessCode === "#89iM4OTm") {
        isValid = true;
    }

    if (isValid) {
        startTimer();
    } else {
        alert("Incorrect access code. Please try again.");
    }
}

startButton.addEventListener("click", validateAccessCode);
