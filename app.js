var $minutes = document.getElementById("@minutes");
var $seconds = document.getElementById("@seconds");
var $milliseconds = document.getElementById("@milliseconds");
var startBtn = document.getElementById("@startBtn");
var video = document.getElementById("myVideo");
video.pause();

var minutes = 0;
var seconds = 0;
var milliseconds = 0;

var watchinterval;

function start() {
  if (video.paused) {
    video.play();
  }
  watchinterval = setInterval(function () {
    milliseconds++;
    if (milliseconds >= 99) {
        seconds++;
        milliseconds = 0;
    }
    if (seconds >= 59) {
        minutes++;
        seconds = 0;
    }
   

    $milliseconds.innerText = milliseconds;
    $seconds.innerText = seconds < 10 ? "0" +seconds : seconds;
    $minutes.innerText = minutes < 10 ? "0" +minutes : minutes;
    startBtn.disabled = true;
    
  }, 10);
}

function stop() {
  clearInterval(watchinterval);
  startBtn.disabled = false;
  if (video.play) {
    video.pause();
  }
}

function Reset() {
  window.location.reload()
  // clearInterval(watchinterval);
  // startBtn.disabled = false;
  
  //  minutes = 0;
  //  seconds = 0;
  //  milliseconds = 0;

  // $minutes.innerText = 0;
  // $seconds.innerText = 0;
  // $milliseconds.innerText = 0;
}
