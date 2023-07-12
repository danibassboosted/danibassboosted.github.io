window.addEventListener('DOMContentLoaded', (event) => {
    const audioPlayer = document.getElementById('audio-player');
    
    // Aquí debes configurar la URL de tu archivo de música
    const musicURL = 'Musica/Musica.mp3';
    
    fetch(musicURL)
        .then(response => response.blob())
        .then(blob => {
            const musicBlob = new Blob([blob], { type: 'audio/mp3' });
            const musicURLObject = URL.createObjectURL(musicBlob);
            audioPlayer.src = musicURLObject;
            audioPlayer.play();
        })
        .catch(error => {
            console.error('Error al cargar el archivo de música:', error);
        });
});
