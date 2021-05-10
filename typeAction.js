var app = document.getElementById("campo");
var boton = document.getElementById("boton");
var transformar = document.getElementById("transformar");
var valoresAceptados = /^[0-9]+$/;
boton.onclick = function () {
    if (!app.value.trim()) {
        alert("Campo nulo.");
    }
    else if (app.value.trim()) {
        if (isNaN((Number(app.value.trim())))) {
            alert("Es un string");
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
