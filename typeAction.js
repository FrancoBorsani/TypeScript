var app = document.getElementById("campo");
var boton = document.getElementById("boton");
var transformar = document.getElementById("transformar");
var valoresAceptados = /^[0-9]+$/;
boton.onclick = function () {
    if (!(app).value) {
        alert("Campo nulo.");
    }
    else if ((app).value) {
        if (isNaN((Number((app).value)))) {
            alert("No es un número");
        }
        else {
            alert("El campo contiene solo numeros");
        }
    }
};
//LE QUITA LOS NÚMEROS AL CAMPO INGRESADO.
transformar.onclick = function () {
    var valorSinNumeros = ((app).value).toString().replace(/[0-9]/g, '');
    alert(valorSinNumeros);
};
