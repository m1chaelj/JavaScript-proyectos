let listaAmigos = [];


function asignarTextoElemento(id, texto) {
    let elementoHTML = document.querySelector(`#${id}`);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    console.log(listaAmigos);

    if (nombre === '') {
        alert('Por favor, ingresa un nombre');
    } else{
        if (listaAmigos.includes(nombre)) { 
            alert('Este nombre ya fue agregado');
        } else {
            listaAmigos.push(nombre);
            asignarTextoElemento('listaAmigos', listaAmigos.map(amigo => `<li>${amigo}</li>`).join(''));
        }
        limpiarCaja();
    }
}

function sortearAmigo() {
    limpiarLista();
    let amigo = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    asignarTextoElemento('resultado', `El amigo secreto sorteado es: ${amigo}`);
}

function limpiarCaja() {
    document.querySelector('#amigo').value= '';
}

function limpiarLista() {
    document.querySelector('#listaAmigos').innerHTML= '';
}