function timer(seconds) {
  const countdown = setInterval(function() {
    seconds -= 1;
    console.log(seconds);
    if (seconds === 0) {
      clearInterval(countdown);
    }
  }, 1000);
}
