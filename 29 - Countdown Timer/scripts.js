const timeLeft = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const timerButtons = document.querySelectorAll('.timer__button');
let countdown;

function timer(seconds) {
  // clear existing timers
  clearInterval(countdown);
  // get time now
  const now = Date.now();
  //   modify new time with added seconds
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
  countdown = setInterval(function() {
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
  //   display countdown
  timeLeft.textContent = countdown;
  document.title = countdown;
}

function displayEndTime(timestamp) {
  // get current time
  const timeEnd = new Date(timestamp);
  const hours = timeEnd.getHours();
  const minutes = timeEnd.getMinutes();
  //   display time to be back
  endTime.textContent = `Come back at ${hours > 12 ? hours - 12 : hours}:${
    minutes < 10 ? '0' : ''
  }${minutes}`;
}

// Event Listener
timerButtons.forEach(timerButton => {
  timerButton.addEventListener('click', function() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
  });
});

const input = document.customForm;
input.addEventListener('submit', function(e) {
  e.preventDefault();
  const customMinutes = parseInt(this.minutes.value) * 60;
  timer(customMinutes);
  this.reset();
});
