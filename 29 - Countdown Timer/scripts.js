const timeLeft = document.querySelector('.display__time-left');

function timer(seconds) {
  displayTimeLeft(seconds);
  const countdown = setInterval(function() {
    seconds -= 1;
    if (seconds === 0) {
      clearInterval(countdown);
    }
    displayTimeLeft(seconds);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const countdown = `${minutes}:${
    remainderSeconds < 10 ? '0' : ''
  }${remainderSeconds}`;
  timeLeft.textContent = countdown;
  document.title = countdown;
}
