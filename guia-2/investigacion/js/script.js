window.onload = function(){
    var btnABS = document.getElementById("ejemplo-abs");
    var btnROUND = document.getElementById("ejemplo-round");
    var btnCEIL = document.getElementById("ejemplo-ceil");
    var btnFLOOR = document.getElementById("ejemplo-floor");
    var btnEXP = document.getElementById("ejemplo-exp");
    var btnLOG = document.getElementById("ejemplo-log");
    var btnRANDOM = document.getElementById("ejemplo-random");

    btnABS.onclick = ejemploABS;
    btnROUND.onclick = ejemploROUND;
    btnCEIL.onclick = ejemploCEIL;
    btnFLOOR.onclick = ejemploFLOOR;
    btnEXP.onclick = ejemploEXP;
    btnLOG.onclick = ejemploLOG;
    btnRANDOM.onclick = ejemploRANDOM;
};

document.addEventListener("scroll", 
    function(e){
        var y = window.scrollY;
        changeheader(y);
    }
);

function changeheader(y) {
    var header = document.getElementById("header");
    if(y > 40){
        header.className = "header-small";
    }else if(y < 5){
        header.className = "header-big";
    }
}

function ejemploABS() {
    var num = prompt("Escribe un número entero:", "");
    var valorAbsoluto = Math.abs(num);

    if(isNaN(valorAbsoluto)){
        alert("No colocaste un número.");
    }else{
        alert("El valor absoluto del número es: " + valorAbsoluto);
    }
}

function ejemploROUND() {
    var num = prompt("Escribe un número decimal:", "");
    var resultado = Math.round(num);

    if(isNaN(resultado)){
        alert("No colocaste un número.");
    }else{
        alert("El número redondeado es: " + resultado);
    }
}

function ejemploCEIL() {
    var num = prompt("Escribe un número decimal:", "");
    var resultado = Math.ceil(num);

    if(isNaN(resultado)){
        alert("No colocaste un número.");
    }else{
        alert("El entero mayor es: " + resultado);
    }
}

function ejemploFLOOR() {
    var num = prompt("Escribe un número decimal:", "");
    var resultado = Math.floor(num);

    if(isNaN(resultado)){
        alert("No colocaste un número.");
    }else{
        alert("El entero menor es: " + resultado);
    }
}

function ejemploEXP() {
    var num = prompt("Escribe un número entero:", "");
    var resultado = Math.exp(num);

    if(isNaN(resultado)){
        alert("No colocaste un número.");
    }else{
        alert("Resultado: " + resultado);
    }
}

function ejemploLOG() {
    var num = prompt("Escribe un número entero:", "");
    var resultado = Math.log(num);

    if(isNaN(resultado)){
        alert("No colocaste un número.");
    }else{
        alert("Resultado: " + resultado);
    }
}

function ejemploRANDOM() {
    var resultado = Math.random();

    alert("Tu numero aleatorio es: " + resultado.toFixed(2));
}