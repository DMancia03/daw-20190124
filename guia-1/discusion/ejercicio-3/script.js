window.onload = function(){
    var espacioTrabajo = document.getElementById("espacio-trabajo");
    var celsius = prompt("Ingresa la temperatura en grados Celsius: ", "");
    var fahrenheit = 0;

    celsius = parseFloat(celsius);

    if(!isNaN(celsius)){
        fahrenheit = ( celsius * 1.8 ) + 32;
        espacioTrabajo.innerHTML = "<p>" + celsius + " °C es igual a " + fahrenheit.toFixed(2) + " °F</p>";
    }else{
        alert("La cantidad ingresada es incorrecta.");
    }
}