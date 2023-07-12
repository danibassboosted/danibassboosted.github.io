window.addEventListener('DOMContentLoaded', (event) => {
    const audioPlayer = document.getElementById('audio-player');

    audioPlayer.addEventListener('canplay', function() {
        audioPlayer.play();
    });
});
