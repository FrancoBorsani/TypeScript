var app = document.getElementById("campo") as HTMLInputElement;
var boton = document.getElementById("boton") as HTMLElement;
var transformar = document.getElementById("transformar") as HTMLElement;
var valoresAceptados: RegExp = /^[0-9]+$/;

boton.onclick = () => {
    if (!(app).value) {
        alert("Campo nulo.");
    } else if ((app).value) {
        if (isNaN((Number((app).value)))) {
            alert("No es un número");
        } else {
            alert("El campo contiene solo numeros");
        }
    }
};
//LE QUITA LOS NÚMEROS AL CAMPO INGRESADO.
transformar.onclick = () => {
    const valorSinNumeros: string = ((app).value).toString().replace(/[0-9]/g, '');
    alert(valorSinNumeros);
};
