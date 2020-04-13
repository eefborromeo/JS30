// Select Elements
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress .progress__filled');
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
  const percent = (this.currentTime / this.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const playTime = (e.offsetX / video.offsetWidth) * video.duration;
  video.currentTime = playTime;
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

let mousedown = false;
progress.addEventListener('click', e => scrub(e));
progress.addEventListener('mousemove', e => mousedown && scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
