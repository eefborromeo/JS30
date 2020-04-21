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

getVideo();
