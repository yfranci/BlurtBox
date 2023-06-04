// Timer variables
let timer;
let minutes = 5;
let seconds = 0;

// Timer display
const timerDisplay = document.getElementById('timerDisplay');

// Start the timer
function startTimer() {
    const topic = document.getElementById('topicInput').value;
    if (topic.trim() !== '') {
        document.getElementById('topic').innerText = topic;
        document.getElementById('topicInput').style.display = 'none';
        document.getElementById('timer').style.display = 'block';
        timer = setInterval(updateTimer, 1000);
    }
}

// Update the timer every second
function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        alert('Timer expired!');
        return;
    }

    if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    timerDisplay.innerText = `${formattedMinutes}:${formattedSeconds}`;
}

// Reset the timer
function resetTimer() {
    clearInterval(timer);
    minutes = 5;
    seconds = 0;
    timerDisplay.innerText = '05:00';
}
