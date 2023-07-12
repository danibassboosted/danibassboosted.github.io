<?php
    session_start();
    
    // Verificar si el usuario ha iniciado sesión
    if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
        header('HTTP/1.0 403 Forbidden');
        exit('Acceso denegado');
    }
    
    // Lógica de subida de archivos aquí
    
    // Ejemplo: Guardar el archivo subido en una carpeta
    $uploadDirectory = 'uploads/';
    
    if (!is_dir($uploadDirectory)) {
        mkdir($uploadDirectory, 0777, true);
    }
    
    $uploadedFile = $uploadDirectory . basename($_FILES['music-file']['name']);
    
    if (move_uploaded_file($_FILES['music-file']['tmp_name'], $uploadedFile)) {
        echo 'Archivo subido con éxito';
    } else {
        echo 'Error al subir el archivo';
    }
?>
