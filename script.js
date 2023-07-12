window.addEventListener('DOMContentLoaded', (event) => {
    const audioPlayer = document.getElementById('audio-player');
    
    const playPromise = audioPlayer.play();
    
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                // La reproducción se inició correctamente
            })
            .catch(error => {
                // No se pudo iniciar la reproducción automáticamente
                // Pide al usuario que interactúe con la página para iniciar la reproducción manualmente
                const playButton = document.createElement('button');
                playButton.textContent = 'Reproducir';
                
                playButton.addEventListener('click', function() {
                    audioPlayer.play();
                    playButton.style.display = 'none';
                });
                
                document.body.appendChild(playButton);
            });
    }
});
