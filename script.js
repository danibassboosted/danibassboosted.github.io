window.addEventListener('DOMContentLoaded', (event) => {
    const audioPlayer = document.getElementById('audio-player');
    
    // Aquí debes configurar la URL de tu archivo de música
    const musicURL = 'Musica/Musica.mp3';
    
    audioPlayer.src = musicURL;
    audioPlayer.play();
});
