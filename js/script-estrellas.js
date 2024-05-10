// Función para crear una estrella
function crearEstrella() {
    const estrella = document.createElement('div');
    estrella.className = 'estrella'; // Use className instead of classList.add

    // Posicionamiento aleatorio
    estrella.style.left = Math.random() * window.innerWidth + 'px';
    estrella.style.top = Math.random() * window.innerHeight + 'px';

    // Tamaño aleatorio entre 2px y 8px
    const tamaño = Math.random() * (8 - 2) + 2;
    estrella.style.width = tamaño + 'px';
    estrella.style.height = tamaño + 'px';

    // Agregar la estrella al contenedor
    document.body.appendChild(estrella);

    // Animación de desvanecimiento
    setTimeout(() => {
        estrella.remove();
    }, Math.random() * 5000 + 1000); // Desaparecerá entre 1 y 6 segundos
}

// Crear 500 estrellas
for (let i = 0; i < 500; i++) {
    crearEstrella();
}
