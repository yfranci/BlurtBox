window.onload = function () {
  let interval;

  function setTopic() {
    let topic = document.getElementById("topicInput").value;
    if (topic) {
      document.getElementById("topicHeader").innerText = topic;
      document.getElementById("topicBox").style.display = "none";
      startTimer(5, document.getElementById("time"));
    }
  }

  function startTimer(duration, display) {
    let timer = duration * 60, minutes, seconds;
    interval = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = duration * 60;
        clearInterval(interval);
        alert("Time's up!");
      }
    }, 1000);
  }

  document.getElementById("startButton").addEventListener("click", setTopic);
};
