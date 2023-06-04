const topicHeader = document.getElementById("topic");
const accessCodeContainer = document.getElementById("access-code-container");
const accessCodeInput = document.getElementById("access-code-input");
const validateButton = document.getElementById("validate-button");
const timerContainer = document.getElementById("timer-container");
const timer = document.getElementById("timer");
const resetButton = document.getElementById("reset-button");

let time = 300; // 5 minutes in seconds
let countdownInterval;

function startTimer() {
    topicHeader.textContent = accessCodeInput.value;
    accessCodeContainer.style.display = "none";
    timerContainer.style.display = "block";
    resetButton.style.display = "block";

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
    const accessCode = accessCodeInput.value;

    if (accessCode === "k98w4Vyd^" || accessCode === "#89iM4OTm") {
        startTimer();
    } else {
        alert("Incorrect access code. Please try again.");
    }
}

function resetTimer() {
    clearInterval(countdownInterval);
    time = 300;
    timer.textContent = "5:00";
    accessCodeInput.value = "";
    topicHeader.textContent = "Enter a Topic";
    accessCodeContainer.style.display = "block";
    timerContainer.style.display = "none";
    resetButton.style.display = "none";
}

validateButton.addEventListener("click", validateAccessCode);
resetButton.addEventListener("click", resetTimer);
