// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero 
// random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri 
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// Dichiariamo chi ha vinto.

// Chiedo all'utente se sceglie pari o dispari
var sceltaUtente = prompt('Pari o dispari?');
sceltaUtente = validazionePariDispari(sceltaUtente); // Richiamo la funzione per validare la scelta
console.log('Scelta utente', sceltaUtente)

// Chiedo al'utente di scegliere un numero da 1 a 5
var numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5.'));

while (numeroUtente < 1 || numeroUtente > 5) {
    alert('Non hai scelto un numero fra 1 e 5.');
    numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5.'));
}
console.log('numeroutente', numeroUtente);

// Genero un numero random da 1 a 5 per il computer con una funzione
var numeroComputer = randomNumber(1, 5);
console.log('numerocomputer', numeroComputer);

// Sommo i due numeri
var sommaNumeri = numeroUtente + numeroComputer;
console.log(sommaNumeri);
// isSommaPariDispari(sommaNumeri);

// Controllo se la somma è pari o dispari
var esito = isSommaPariDispari(sommaNumeri);
console.log('esito', esito)

// Stampo l'esito
var numeriInGioco = 'Numero scelto: ' + numeroUtente + ' | ' + 'Numero computer: ' + numeroComputer;
alert(numeriInGioco);

if (sceltaUtente == esito) {
    alert('Il risultato è ' + esito + ', bravo hai vinto.');
} else {
    alert('Il risultato è ' + esito + ', mi dispiace hai perso.');
}



// Questa funzione riceve due numeri
//
// Genera un numero casuale compreso fra questi due numeri
//
// Ritorna il numero casuale generato
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// Questa funzione riceve una stringa
//
// Controlla se questa stringa è uguale a 'pari' o 'dispari'
//
// Stampa un alert in caso contrario e chiede di inserire nuovamente la scelta. Ritorna una stringa
function validazionePariDispari(stringaPariDispari) {

    while (stringaPariDispari.toLowerCase() != 'pari' && stringaPariDispari.toLowerCase() != 'dispari') {
        stringaPariDispari = prompt('Puoi scegliere solo fra pari e dispari.');
    }

    return stringaPariDispari.toLowerCase();
}


// Questa funzione riceve un numero
//
// Controlla se è pari o dispari
//
// Ritorna una stringa con 'pari' o 'dispari'
function isSommaPariDispari(numeroFinale) {
    var pariODispari
    if (numeroFinale % 2 == 0) {
        pariODispari = 'pari';
    } else {
        pariODispari = 'dispari';
    }

    return pariODispari;
}