function mostrarPersonajes() {
    document.getElementById("contenido").innerHTML = `
        <h1>Personajes Principales de Deadpool</h1>
        <h2>Deadpool (Wade Wilson)</h2>
        <p>Deadpool, también conocido como <strong>Wade Wilson</strong>, es el protagonista de la película. Es un mercenario con un sentido del humor único y habilidades de combate excepcionales.</p>
        <p><img src="recursos/Imagen 1.jpeg" alt="Deadpool" width="300"></p>
        <h3>Vanessa</h3>
        <p>Vanessa Carlysle es la novia de Wade Wilson. Es una figura clave en la vida de Deadpool y su motivación principal en la historia.</p>
        <p><img src="recursos/Imagen 2.jpeg" alt="Vanessa" width="300"></p>
        <h3>Colossus</h3>
        <p>Colossus, también conocido como Piotr Rasputin, es un miembro de los X-Men que intenta guiar a Deadpool hacia un camino más heroico.</p>
        <p><img src="recursos/Imagen 3.jpeg" alt="Colossus" width="300"></p>
        <p>Estos son solo algunos de los personajes memorables de la película Deadpool.</p>
        <br><a href="#" onclick="mostrarMenuPrincipal()">Volver al Menú Principal</a>
    `;
}
