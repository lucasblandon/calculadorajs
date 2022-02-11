let print = document.getElementById('print');
const erase = false;
let calc;

let goCalculadora = function(valorCalcular) {
    let x = valorCalcular;
    print.value += x;
}

let goRespuesta = function(respuesta) {
    if (respuesta === '='){
        print.value = '';
    }
}
