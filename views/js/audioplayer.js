function playSong(songName){
    var player = document.getElementById("player");
    var songTitle = document.getElementById("song-title");
    var artistName = document.getElementById("artist-name");

    playerHTML = '<source src="\01-Battery.mp3" type="audio/mp3">';
    songTitleHTML = 'Happy Birthday';
    artistNameHTML = 'Someone I Guess';
    player.innerHTML = playerHTML;
    songTitle.innerHTML = songTitleHTML;
    artistName.innerHTML = artistNameHTML;

}


    function playTunes() {
      var request = new XMLHttpRequest();
      request.open("GET", "http://localhost:3000/audio/", true);
      request.responseType = "arraybuffer";

     // spinner.show();

      request.onload = function() {
     //     spinner.hide();
        var Data = request.response;
        process(Data);
      };

      request.send();
    }

    function process(Data) {
      source = context.createBufferSource(); // Create Sound Source
      context.decodeAudioData(Data, function(buffer) {
        source.buffer = buffer;
        source.connect(context.destination);
        source.start(context.currentTime);
      });
    }
