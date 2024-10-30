function mostrarFrases() {
    document.getElementById("contenido").innerHTML = `
        <h1>Frases Memorables de Deadpool</h1>
        <p>Deadpool es conocido por su ingenio rápido y su sentido del humor único. Aquí hay algunas de sus frases más memorables:</p>
        <h2>Citas Famosas</h2>
        <ul>
            <li><em>"Maximum effort!"</em></li>
            <li><em>"I'm about to do to you what Limp Bizkit did to music in the late '90s."</em></li>
            <li><em>"You're probably thinking, 'This was a superhero movie but that guy in the suit just turned that other guy into a kebab!'"</em></li>
        </ul>
        <p><strong>Nota:</strong> Cada una de estas frases captura perfectamente el espíritu sarcástico y subversivo de Deadpool.</p>
        <h2>Video de las Mejores Escenas</h2>
        <video width="340" height="360" controls>
            <source src="recursos/Video.mp4">
        </video>
        <br><br><a href="#" onclick="mostrarMenuPrincipal()">Volver al Menú Principal</a>
    `;
}
