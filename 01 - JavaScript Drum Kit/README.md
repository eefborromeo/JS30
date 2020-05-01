# Day 1 - Javascript Drum Kit
This project provided `div` elements which contained the keys, data, and audio needed for the Drum Kit. The challenge was to write the functionality needed to play the source contained in `audio`. To do this, the `keyCode` of the key that was pressed needed to match with the `data-*` attribute of the div element. The challenge also included removing the `.playing` class from the element after it was clicked.

## Struggles and Lessons Learned
I learned about the `transitionend` event and struggled with removing the `.playing` class from the element. I tried to write the code needed to remove the `.playing` class within the same function used to play the audio. 

I later realized that playing the audio file and adding the `.playing` class to the element was the event the browser had to listen for so that it could remove the `.playing` class from the element.
