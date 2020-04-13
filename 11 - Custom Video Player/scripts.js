// Select Elements
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const toggle = document.querySelector('.toggle');
const volume = document.querySelector('input[name="volume"]');
const playbackRate = document.querySelector('input[name="playbackRate"]');
const playbackButtons = document.querySelectorAll('button[data-skip]');

// Create Functons
function handlePlay() {
  video.paused ? video.play() : video.pause();
}

function handleToggle() {
  video.paused ? (toggle.textContent = '►') : (toggle.textContent = '❚ ❚');
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
