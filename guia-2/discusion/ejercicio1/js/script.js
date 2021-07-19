window.onload = function(){
    var num = prompt("Ingrese el número del que quiere conocer que tiene:", "");

    if(!isNaN(num) && num > 0 && num < 100000){
        alert("El dato ingresado es correcto.");
        obtenerDatosNumero(num);
    }else if(num >= 100000){
        alert("El número es muy grande para ser procesado.");
    }else{
        alert("El dato ingresado no válido.");
    }
}

function obtenerDatosNumero(num){
    var c_titulo = document.getElementById("numero-title");
    var c_cantidadCifras = document.getElementById("cantidad-cifras");
    var c_cifrasImpares = document.getElementById("cifras-impares");
    var c_cifrasPares = document.getElementById("cifras-pares");
    var c_sumaCifrasImpares = document.getElementById("suma-cifras-impares");
    var c_sumaCrifrasPares = document.getElementById("suma-cifras-pares");
    var c_sumaCifras = document.getElementById("suma-cifras");
    var c_cifraMayor = document.getElementById("cifra-mayor");
    var c_cifraMenor = document.getElementById("cifra-menor");
    var cantidadCifras = num.length;
    var numAux = 0;
    var cifras = new Array();
    var cifrasImpares = new Array();
    var cifrasPares = new Array();
    var j = 0, k = 0;

    for(var i = 0; i < cantidadCifras; i++){
        numAux = num.charAt(i);

        cifras[i] = parseInt(numAux);
        
        if(numAux % 2 == 0){
            cifrasPares[j] = parseInt(numAux);
            j++;
        }else{
            cifrasImpares[k] = parseInt(numAux);
            k++;
        }
    }

    c_titulo.innerHTML = "¿Qué tiene mi número " + num + "?";

    c_cantidadCifras.innerHTML = cantidadCifras;
    c_cifrasImpares.innerHTML = cifrasImpares.length;
    c_cifrasPares.innerHTML = cifrasPares.length;
    c_sumaCifrasImpares.innerHTML = sumaSerie(cifrasImpares);
    c_sumaCrifrasPares.innerHTML = sumaSerie(cifrasPares);
    c_sumaCifras.innerHTML = suma = sumaSerie(cifras);
    c_cifraMayor.innerHTML = mayorSerie(cifras);
    c_cifraMenor.innerHTML = menorSerie(cifras);
}

function sumaSerie(numeros){
    let suma = 0;

    numeros.forEach(element => {
        suma += element;
    });

    return suma;
}

function mayorSerie(numeros){
    let mayor = numeros[0];

    numeros.forEach(element => {
        if(mayor < element){
            mayor = element;
        }
    });

    return mayor;
}

function menorSerie(numeros){
    let menor = numeros[0];

    numeros.forEach(element => {
        if(menor > element){
            menor = element;
        }
    });

    return menor;
}