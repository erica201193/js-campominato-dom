/*
Il computer deve generare 16 numeri casuali compresi nel range della griglia: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su una cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/

// creare una funzione per generare 16 numeri casuali bombe
//n.b. metti verifica duplicati

//  


const gridContainer = document.querySelector(".grid-container");

function createGrid(righeX, colonneY) {
    const cellsNumber = righeX * colonneY;


    gridContainer.style.width = `calc(var(--cell-size) * ${righeX}`;

    for (let i = 1; i <= cellsNumber; i++) {
        
        const cellNumber = [i]
        const cell =document.createElement("div");

        cell.classList.add("cell");
        cell.innerHTML = `<span>${cellNumber}</span>`;
        gridContainer.append(cell);

        cell.addEventListener("click", function() {
            this.classList.toggle("blue-color");
        })
    }
}

createGrid (10,10);