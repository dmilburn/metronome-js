function Metronome(tempo, beatsPerMeasure){
  this.tempo = Number(tempo);
  this.beatsPerMeasure = Number(beatsPerMeasure);
  this.interval = null;
}

Metronome.prototype.start = function(){
  var millisecondsToWait = this.tempoToMilliseconds(this.tempo);
  this.interval = window.setInterval(soundAndCounter, millisecondsToWait, this);
}

Metronome.prototype.tempoToMilliseconds = function(tempo){
  return (1000 * 60)/tempo;
}

Metronome.prototype.stop = function(){
  window.clearInterval(this.interval);
  var counter = document.getElementById("metronome-counter");
  counter.innerHTML = "";
}

soundAndCounter = function(metronome){
  updateCounterView(metronome);
  playSound();
  moveStick();
}

playSound = function(){
  $('#beep')[0].play();
}

updateCounterView = function(metronome){
  var counter = document.getElementById("metronome-counter");
  var pastBeat = Number(counter.innerHTML);
  if (pastBeat < metronome.beatsPerMeasure){
    counter.innerHTML = pastBeat + 1;
  } else {
    counter.innerHTML = 1;
  }
}

moveStick = function(){
  var stick = $("#metronome-stick")
  stick.toggleClass("right");
  if (stick.hasClass("right")){
    degrees = 20;
  } else {
    degrees = -20;
  }
  $("#metronome-stick").animate({ textIndent: degrees }, {
    step: function(degrees) {
        $(this).css('transform',"rotate(" + degrees + "deg)");
    }, duration: 1200
  } );
}