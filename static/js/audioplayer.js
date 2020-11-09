function playSong(songName){
    var player = document.getElementById("player");
    var songTitle = document.getElementById("song-title");
    var artistName = document.getElementById("artist-name");

    playerHTML = '<source src="https://music442.s3.us-east-2.amazonaws.com/songs/Metallica/Metallica+-+1986+-+Master+Of+Puppets/01+-+Battery.mp3" />';
    songTitleHTML = 'Happy Birthday';
    artistNameHTML = 'Someone I Guess';
    player.innerHTML = playerHTML;
    songTitle.innerHTML = songTitleHTML;
    artistName.innerHTML = artistNameHTML;

}
