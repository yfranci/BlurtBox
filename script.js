const topicHeader = document.getElementById("topic");
const accessCodeContainer = document.getElementById("access-code-container");
const schoolSelect = document.getElementById("school-select");
const accessCodeInput = document.getElementById("access-code-input");
const validateButton = document.getElementById("validate-button");
const timerContainer = document.getElementById("timer-container");
const topicInputLabel = document.getElementById("topic-input-label");
const topicInput = document.getElementById("topic-input");
const startButton = document.getElementById("start-button");
const timer = document.getElementById("timer");
const resetButton = document.getElementById("reset-button");

let time = 300; // 5 minutes in seconds
let countdownInterval;

function startTimer() {
    topicHeader.textContent = topicInput.value;
    accessCodeContainer.style.display = "none";
    timerContainer.style.display = "block";
    startButton.style.display = "none";
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
    const selectedSchool = schoolSelect.value;
    const accessCode = accessCodeInput.value;

    let isValid = false;

    if (selectedSchool === "preuss" && accessCode === "k98w4Vyd^") {
        isValid = true;
    } else if (selectedSchool === "crawford" && accessCode === "#89iM4OTm") {
        isValid = true;
    }

    if (isValid) {
        topicInputLabel.style.display = "block";
        topicInput.style.display = "block";
        startButton.style.display = "block";
        validateButton.style.display = "none";
        accessCodeInput.style.display = "none";
        schoolSelect.style.display = "none";
    } else {
        alert("Incorrect access code. Please try again.");
    }
}

function resetTimer() {
    clearInterval(countdownInterval);
    time = 300;
    timer.textContent = "5:00";
    accessCodeInput.value = "";
    topicInput.value = "";
    topicHeader.textContent = "Enter a Topic";
    accessCodeContainer.style.display = "block";
    timerContainer.style.display = "none";
    topicInputLabel.style.display = "none";
    topicInput.style.display = "none";
    startButton.style.display = "none";
    validateButton.style.display = "block";
    accessCodeInput.style.display = "block";
    schoolSelect.style.display = "block";
    resetButton.style.display = "none";
}

validateButton.addEventListener("click", validateAccessCode);
startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
