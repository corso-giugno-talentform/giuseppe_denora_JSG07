//Esercizio 1: Selezione base
const h1 = document.getElementById("titolo-principale");
const paragrafo = document.getElementById("descrizione")
const button = document.querySelector("button")

//Esercizio 2: Modifica contenuti
/* Partendo dall'HTML dell'esercizio 1:

// 1. Cambia il titolo in "Benvenuto nel mio sito!"
// 2. Cambia la descrizione in "Sito rinnovato con JavaScript"
// 3. Cambia il testo del bottone in "Inizia ora" */
h1.innerText = "Benvenuto nel mio sito!";
paragrafo.innerText = "Sito rinnovato con JavaScript";
button.innerText = "Inizia ora";



//Esercizio 3: Lista della spesa
/* Crea una lista della spesa dinamica:

<h2>Lista della spesa</h2>
<ul id="spesa"></ul>
const spesa = ['Pane', 'Latte', 'Uova', 'Pasta', 'Pomodori'];

// Stampa tutti gli elementi nella lista
// Risultato atteso:
// • Pane
// • Latte
// • Uova
// • Pasta
// • Pomodori */


///lista spesa in ordine alfabetico
const div = document.querySelector("div");

const spesa = ['Pane', 'Latte', 'Uova', 'Pasta', 'Pomodori'];

div.innerHTML = `<h2>Lista della spesa ordinata</h2> <ul id="spesa_riordinata"></ul>`;
let spesaSord = spesa.sort();

const listaSpesa = document.querySelector("#spesa_riordinata")
spesa.forEach(function (prodotto) {

    listaSpesa.innerHTML += `<li> ${prodotto} </li>`



})



const div2 = document.querySelector("#div2");
//lista spesa ordine inverso 
div2.innerHTML = `<h2>Lista della spesa ordine inverso</h2> <ul id="spesa_reverse"></ul>`;
let spesaRevers = spesa.reverse();
const listaSpesaRev = document.querySelector("#spesa_reverse");
spesa.forEach(function (prodotto) {

    listaSpesaRev.innerHTML += `<li> ${prodotto} </li>`



})


///  mostrare un elemento randomico della lista?
const div3 = document.querySelector("#div3");

function mostraProdottoRandom() {
    let randomIndex = Math.floor(Math.random() * spesa.length);

    let prodottoRandom = spesa[randomIndex];

    div3.innerHTML = `<h2> Ricordati che tra i prodotti da comprare c'è : </h2> <h3 id="pRandom" ></h3>`
    const pRandom = document.querySelector("#pRandom");
    pRandom.innerText = prodottoRandom;
    pRandom.style.color = "red";
    pRandom.style.fontSize = "40px"

}

setInterval(mostraProdottoRandom, 2000);

///simulare acquisto e mostrare randomicamente solo elementi che mancano da comprare
const div4 = document.querySelector("#div4");

function simulaSpesa() {
    let randomIndex = Math.floor(Math.random() * spesa.length);

    let prodottoRandom = spesa[randomIndex];

    //nota se usassi inclides non avrei un indice ma un booleano !
    let spesaRimanente = [...spesa];
    spesaRimanente.splice(randomIndex, 1);

    div4.innerHTML = `<h3> hai gia acquistato ${prodottoRandom}  : </h3> <h3 >  devi acquistare ancora </h3> <ul id="spesaRimanente"></ul> `
    const ul = document.querySelector("#spesaRimanente");

    spesaRimanente.forEach(function (prodotto) {
        ul.innerHTML += `<li> ${prodotto}</li>`

    })


}

setInterval(simulaSpesa, 3000);


//////>>>>>>>>>>>>>>>>>rifattorizzazione 
///creo una funzione mostra lista con innerHTML

function mostraLista(lista, div) {
    div.innerHTML = `<h3>Nuova lista spesa:</h3><ul></ul>`;
    const ul = div.querySelector("ul"); // cerca ul SOLO dentro quel div

    lista.forEach(function (prodotto) {
        ul.innerHTML += `<li> ${prodotto}</li>`
    })


}


//aggiungi prodotto da prompt
function aggiungiDaPrompt(miodiv) {
    const nuovoProdotto = prompt("Cosa vuoi aggiungere alla spesa?");
    if (nuovoProdotto) {
        let listaSpesa = [...spesa];
        listaSpesa.unshift(nuovoProdotto);
        mostraLista(listaSpesa, miodiv);


    }
}
//potrei far apparire il prompt ad intevvalli di tempo /* setInteval(()=>{},) */
// l'ho fatto partire con timeout cosi non aggiorna tutte le liste della spesa ma solo quella dell'ultimo div.


const div5 = document.querySelector("#div5")

setTimeout(() => {
    aggiungiDaPrompt(div5);
}, 15000);







