function mostrarMenuPrincipal() {
    document.getElementById("contenido").innerHTML = `
        <h1>Bienvenido al sitio de Deadpool</h1>
        <p>Explora las siguientes páginas para conocer más de Deadpool y sus frases memorables.</p>
        <h3>Menú de Navegación</h3>
        <nav>
            <ul>
                <li><a href="#" onclick="mostrarPersonajes()">Personajes Principales</a></li>
                <li><a href="#" onclick="mostrarFrases()">Frases Memorables de Deadpool</a></li>
            </ul>
        </nav>
        <h2>¿Quién es Deadpool?</h2>
        <p>Deadpool, también conocido como <strong>Wade Wilson</strong>, es un antihéroe de Marvel conocido por su humor sarcástico y sus habilidades de combate.</p>
        <img src="recursos/Imagen 1.jpeg" alt="Deadpool" width="240">
    `;
}
