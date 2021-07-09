window.onload = escribirMaquetacion();

//Función
function escribirMaquetacion() {
    var cuerpo = "";

    //Forma de escribir línea por línea
    document.write("<header>");
    document.write("<h1>HEADER</h1>");
    document.write("</header>");

    //Forma de escribir guardando el texto en una variable y escribiendo dicha variable
    cuerpo = "<div class='grid-2'>";
    cuerpo += "<nav>";
    cuerpo += "<h2>NAVEGACIÓN</h2>";
    cuerpo += "</nav>";
    cuerpo += "<section>";
    cuerpo += "<article>";
    cuerpo += "<h3>ARTICLE</h3>";
    cuerpo += "</article>";
    cuerpo += "<article>";
    cuerpo += "<h3>ARTICLE</h3>";
    cuerpo += "</article>";
    cuerpo += "<article>";
    cuerpo += "<h3>ARTICLE</h3>";
    cuerpo += "</article>";
    cuerpo += "</section>";
    cuerpo += "</div>";
    document.write(cuerpo);

    //Forma de escribir todo un elemento HTML en una linea
    document.write("<footer><h2>FOOTER</h2></footer>");
}