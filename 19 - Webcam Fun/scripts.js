const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices
    // get access to webcam not audio
    .getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      // if approved, then set localMediaStream to video's srcObject
      video.srcObject = localMediaStream;
      // play video for continuous stream
      video.play();
    })
    // create catch error if webcam access was denied
    .catch(err => {
      console.error('Webcam needed', err);
    });
}

function paintToCanvas() {
  // get video width and height
  const width = video.videoWidth;
  const height = video.videoHeight;

  // set canvas width and height to video width and height
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    // paint video element to canvas element
    ctx.drawImage(video, 0, 0, width, height);

    // get pixels from canvas
    let pixels = ctx.getImageData(0, 0, width, height);
    // apply filter function
    // pixels = redEffect(pixels);
    // pixels = rgbSplit(pixels);
    pixels = greenScreen(pixels);
    // put pixels back to canvas
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  //  play the sound
  snap.currentTime = 0;
  snap.play();

  // take the photo out of the canvas
  const photoData = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = photoData;
  link.setAttribute('download', 'photo');
  link.innerHTML = `<img src="${photoData}" alt="photobooth" />`;
  strip.insertBefore(link, strip.firstChild);
}

// Filter functions
function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach(input => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i += 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

// paint to canvas when video can play
video.addEventListener('canplay', paintToCanvas);
