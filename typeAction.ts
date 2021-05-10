var app: unknown = document.getElementById("campo");
var boton = document.getElementById("boton") as HTMLElement;
var transformar = document.getElementById("transformar") as HTMLElement;
var valoresAceptados: RegExp = /^[0-9]+$/;

boton.onclick = () => {
    if (!(app as HTMLInputElement).value) {
        alert("Campo nulo.");
    } else if ((app as HTMLInputElement).value) {
        if (isNaN((Number((app as HTMLInputElement).value)))) {
            alert("Es un string");
        } else {
            alert("El campo contiene solo numeros");
        }
    }
};
//LE QUITA LOS NÚMEROS AL CAMPO INGRESADO.
transformar.onclick = () => {
    const valorSinNumeros: string = (((app) as HTMLInputElement).value).toString().replace(/[0-9]/g, '');
    alert(valorSinNumeros);
};
