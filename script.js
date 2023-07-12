window.addEventListener('DOMContentLoaded', (event) => {
    const audioPlayer = document.getElementById('audio-player');
    
    audioPlayer.addEventListener('canplay', function() {
        audioPlayer.play();
    });
    
    audioPlayer.addEventListener('ended', function() {
        audioPlayer.currentTime = 0;
        audioPlayer.play();
    });
});
