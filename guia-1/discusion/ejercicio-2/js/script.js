function convertir(valorConversion, nuevaMedida){
    var espacioTrabajo = document.getElementById("espacio-trabajo");
    var metros = prompt("Ingrese la cantidad de metros a convertir: ", "");
    var resultado;

    metros = parseFloat(metros);

    if(!isNaN(metros)){
        resultado = metros * valorConversion;
        espacioTrabajo.innerHTML = "<p>" + metros + " metros es igual a " + resultado.toFixed(2) + " " + nuevaMedida + "</p>";
    }else{
        alert("La cantidad ingresada es incorrecta.");
    }
}

window.onload = function(){
    var btnPulgadas = document.getElementById("pulgadas");
    var btnPies = document.getElementById("pies");
    var btnYardas = document.getElementById("yardas");

    btnPulgadas.onclick = function(){
        convertir(39.3701, "Pulgadas");
    }
    btnPies.onclick = function(){
        convertir(3.28084, "Pies");
    }
    btnYardas.onclick = function(){
        convertir(1.09361, "Yardas");
    }
    //btnPies.onclick = convertir(39.3701, "Pies");
    //btnYardas.onclick = convertir(39.3701, "Yardas");
}