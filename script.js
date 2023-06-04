const accessCodeContainer = document.getElementById("access-code-container");
const schoolSelect = document.getElementById("school-select");
const accessCodeInput = document.getElementById("access-code-input");
const validateButton = document.getElementById("validate-button");
const topicContainer = document.getElementById("topic-container");
const topicInput = document.getElementById("topic-input");
const submitButton = document.getElementById("submit-button");
const timerContainer = document.getElementById("timer-container");
const topicHeader = document.getElementById("topic-header");
const timer = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");

let time = 300; // 5 minutes in seconds
let countdownInterval;

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
        accessCodeContainer.style.display = "none";
        topicContainer.style.display = "block";
    } else {
        alert("Incorrect access code. Please try again.");
    }
}

function submitTopic() {
    const topic = topicInput.value.trim();
    if (topic === "") {
        alert("Please enter a topic.");
        return;
    }

    topicHeader.textContent = topic;
    topicContainer.style.display = "none";
    timerContainer.style.display = "block";
    startButton.style.display = "none";
    resetButton.style.display = "block";

    countdownInterval = setInterval(updateTimer, 1000);
}

function startTimer() {
    submitTopic();
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

function resetTimer() {
    clearInterval(countdownInterval);
    time = 300;
    timer.textContent = "5:00";
    accessCodeInput.value = "";
    topicInput.value = "";
    topicHeader.textContent = "";
    accessCodeContainer.style.display = "block";
    topicContainer.style.display = "none";
    timerContainer.style.display = "none";
    resetButton.style.display = "none";
}

validateButton.addEventListener("click", validateAccessCode);
submitButton.addEventListener("click", submitTopic);
startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
