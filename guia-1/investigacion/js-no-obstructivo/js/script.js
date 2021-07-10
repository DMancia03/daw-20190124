window.onload = function(){
    var boton = document.getElementById("btn1");

    boton.onclick = function(){
        var contenedor = document.getElementById("espacio-saludo");

        alert("Este alert esta apareaciendo porque le dimos a un div>p una función JS onclick desde el script JS externo.");
        
        var name = prompt("¿Cúal es tu nombre?", "");

        contenedor.innerHTML = "<p>Hola " + name + ", estas siendo saludado al modificar el DOM desde un script de JS no intrusivo.</p>";
    }
}