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

getVideo();

// paint to canvas when video can play
video.addEventListener('canplay', paintToCanvas);
