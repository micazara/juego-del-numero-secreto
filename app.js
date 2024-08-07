let numeroSecreto = 0;
let intentos = 0;
let numerosGenerados = [];
const numeroMaximo = 10;

function asignarTextoAlElemento(elemento, texto) {
    etiqueta = document.querySelector(elemento);
    etiqueta.innerHTML = texto;
}

function verificarIntento() {
    numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoAlElemento("p", `Acertaste el número secreto en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        if (numeroUsuario < numeroSecreto) {
            asignarTextoAlElemento("p", "El número secreto es mayor")
        } else if (numeroUsuario > numeroSecreto) {
            asignarTextoAlElemento("p", "El número secreto es menor")
        }
        intentos++;
    }
    limpiarCampo();
}

function limpiarCampo() {
    document.getElementById("numeroUsuario").value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (numerosGenerados.length == numeroMaximo) {
        asignarTextoAlElemento("p", "Ya se sortearon todos los numeros posibles")
    } else {
        if (numerosGenerados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numerosGenerados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    numeroSecreto = generarNumeroSecreto();
    asignarTextoAlElemento("h1", "Juego del numero secreto!")
    asignarTextoAlElemento("p", "Indica un numero entre 1 y 10")
    intentos = 1;
}

function nuevoJuego() {
    condicionesIniciales();
    limpiarCampo();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();

