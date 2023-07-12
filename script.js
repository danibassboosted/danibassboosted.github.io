window.addEventListener('DOMContentLoaded', (event) => {
    const audioPlayer = document.getElementById('audio-player');
    
    audioPlayer.addEventListener('ended', function() {
        audioPlayer.currentTime = 0;
        audioPlayer.play();
    });
});
