window.onload = function() {
    var c_ventas = document.getElementById("contenedor-ventas");
    var c_suma = document.getElementById("total-ventas");
    var productos = new Array();
    var decision = "Y";
    var texto = "";
    var suma = 0;
    //Controlador
    var j = 0;

    do {
        productos[j] = new Array();
        productos[j][0] = prompt("Nombre del producto:", "");
        productos[j][1] = prompt("Precio del producto:", "");
        while (isNaN(productos[j][1])) {
            if(productos[j][1] <= 0){
                alert("El precio no puede ser negativo.")
                productos[j][1] = prompt("Precio del producto:", "");
            }else{
                alert("Precio inválido.")
                productos[j][1] = prompt("Precio del producto:", "");
            }
        }
        j++;
        decision = prompt("¿Desea seguir introduciendo productos? Y/N", "")
    } while (decision == "Y" || decision == "y");

    productos.forEach(element => {
        texto += "<tr>";
        texto += "<td>" + element[0] + "</td>";
        texto += "<td>$" + element[1] + "</td>";
        texto += "</tr>";

        suma += parseInt(element[1]);
    });

    c_ventas.innerHTML = texto;
    c_suma.innerHTML = "$" + suma;
}