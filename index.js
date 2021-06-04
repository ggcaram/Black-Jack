let jugador = {
    nombre: "Pepito",
    fichas: 200
}

let cartas = []
let total = 0
let ganoPartida = false
let sigue = false
let mensaje = ""
let mensajeEl = document.getElementById("mensaje-el")
let totalEl = document.getElementById("total-el")
let cartasEl = document.getElementById("cartas-el")
let jugadorEl = document.getElementById("jugador-el")

jugadorEl.textContent = jugador.nombre + ": $" + jugador.fichas

function tomarCarta() {
    let numeroAleatorio = Math.floor( Math.random()*13 ) + 1
    if (numeroAleatorio > 10) {
        return 10
    } else if (numeroAleatorio === 1) {
        return 11
    } else {
        return numeroAleatorio
    }
}

function empezarJuego() {
    sigue = true
    let primeraCarta = tomarCarta()
    let segundaCarta = tomarCarta()
    cartas = [primeraCarta, segundaCarta]
    total = primeraCarta + segundaCarta
    correrJuego()
}

function correrJuego() {
    cartasEl.textContent = "Cartas: "
    for (let i = 0; i < cartas.length; i++) {
        cartasEl.textContent += cartas[i] + " "
    }
    
    totalEl.textContent = "Total: " + total
    if (total <= 20) {
        mensaje = "¿Otra carta?"
    } else if (total === 21) {
        mensaje = "¡¡¡Ganaste!!! :)"
        ganoPartida = true
    } else {
        mensaje = "Quedaste afuera :("
        sigue = false
    }
    mensajeEl.textContent = mensaje
}


function nuevaCarta() {
    if (sigue === true && ganoPartida === false) {
        let card = tomarCarta()
        total += card
        cartas.push(card)
        correrJuego()        
    }
}

