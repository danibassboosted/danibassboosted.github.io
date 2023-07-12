window.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('login-form');
    const uploadContainer = document.getElementById('upload-container');
    const uploadForm = document.getElementById('upload-form');
    
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Aquí debes realizar la validación del inicio de sesión con tu lógica de autenticación
        
        // Ejemplo de validación básica
        if (username === 'admin' && password === '1234') {
            loginForm.style.display = 'none';
            uploadContainer.style.display = 'block';
        } else {
            alert('Credenciales de inicio de sesión incorrectas');
        }
    });
});
