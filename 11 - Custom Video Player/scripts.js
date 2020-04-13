// Select Elements
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
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
  console.log(this.name);
  console.log(parseFloat(this.value));
}

// Attach Event Listeners
video.addEventListener('click', () => {
  handlePlay();
  handleToggle();
});
toggle.addEventListener('click', () => {
  handlePlay();
  handleToggle();
});

buttonRange.forEach(button => {
  button.addEventListener('mousemove', handleRange);
  button.addEventListener('mouseup', handleRange);
  button.addEventListener('mousedown', handleRange);
});
