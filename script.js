const topicInput = document.getElementById("topic-input");
const topicHeader = document.getElementById("topic");
const timer = document.getElementById("timer");

let time = 300; // 5 minutes in seconds
let countdownInterval;
let timerStarted = false;

function startTimer() {
    topicHeader.textContent = topicInput.value;
    topicInput.style.display = "none";
    timer.style.display = "block";

    countdownInterval = setInterval(updateTimer, 1000);
    timerStarted = true;
}

function updateTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer.textContent = minutes + ":" + seconds;

    if (time === 0) {
        clearInterval(countdownInterval);
        timer.textContent = "Time's up!";
        showResetButton();
    }

    time--;
}

function resetTimer() {
    clearInterval(countdownInterval);
    time = 300;
    timer.textContent = "5:00";
    topicHeader.textContent = "Enter a Topic";
    topicInput.style.display = "block";
    hideResetButton();
    timerStarted = false;
}

function showResetButton() {
    const resetButton = document.getElementById("reset-button");
    if (resetButton) {
        resetButton.style.display = "block";
    } else {
        const container = document.getElementById("container");
        container.insertAdjacentHTML('beforeend', '<button id="reset-button" onclick="resetTimer()">Reset</button>');
    }
}

function hideResetButton() {
    const resetButton = document.getElementById("reset-button");
    if (resetButton) {
        resetButton.style.display = "none";
    }
}

topicInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && topicInput.value.trim() !== "" && !timerStarted) {
        startTimer();
    }
});
