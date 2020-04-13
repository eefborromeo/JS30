// Select Elements
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress .progress__filled');
const toggle = document.querySelector('.toggle');
const buttonRange = document.querySelectorAll('input[type="range"]');
const playbackButtons = document.querySelectorAll('button[data-skip]');

// Create Functons
function handlePlay() {
  video.paused ? video.play() : video.pause();
}

function handleToggle() {
  video.paused ? (toggle.textContent = '►') : (toggle.textContent = '❚ ❚');
}

function handleRange() {
  video[this.name] = parseFloat(this.value);
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progress.style.flexBasis = `${percent}%`;
}

// Attach Event Listeners
video.addEventListener('click', () => {
  handlePlay();
  handleToggle();
});
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', () => {
  handlePlay();
  handleToggle();
});

buttonRange.forEach(button => {
  button.addEventListener('mousemove', handleRange);
  button.addEventListener('mouseup', handleRange);
  button.addEventListener('mousedown', handleRange);
});

playbackButtons.forEach(button => {
  button.addEventListener('click', skip);
});
