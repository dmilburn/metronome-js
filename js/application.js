$(document).ready(function(){

  $(".metronome-parameters").on("submit", function(event){
    event.preventDefault();
    if ($('#metronome-button').val() === "Start"){
      $('#metronome-button').val("Stop");
      var tempo = $("#tempo-field").val();
      var beatsPerMeasure = $("#beats-field").val();
      metronome = new Metronome(tempo, beatsPerMeasure);
      metronome.start();
    } else {
      $('#metronome-button').val("Start");
      metronome.stop();
    }

  });


  $("#metronome-stick").animate({ textIndent: 100 }, {
    step: function(degrees) {
        $(this).css('transform',"rotate(" + degrees + "deg)");
    }
  } );
})