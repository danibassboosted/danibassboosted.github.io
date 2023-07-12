window.addEventListener('DOMContentLoaded', (event) => {
    const audioPlayer = document.getElementById('audio-player');
    
    audioPlayer.addEventListener('loadedmetadata', function() {
        audioPlayer.play();
    });
    
    audioPlayer.addEventListener('ended', function() {
        audioPlayer.currentTime = 0;
        audioPlayer.play();
    });
});
