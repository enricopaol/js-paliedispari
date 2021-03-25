// Chiedere all’utente di inserire una parola Creare una 
// funzione per capire se la parola inserita è palindroma

// Chiedo all'utente di inserire una parola
var parolaUtente = prompt('Dimmi una parola e ti dirò se è palindroma');
//console.log(parolaUtente);

// Attivo la funzione isPalindroma
var message;
if(isPalindroma(parolaUtente) === true) {
    message = 'La parola ' + parolaUtente + ' è palindroma.';
} else {
    message = 'La parola ' + parolaUtente + ' non è palindroma.'
}

//stampo il messaggio finale
alert(message);



// Riceve una parola (stringa)
//
// Legge la parola in entrambi i versi
//
// Se è uguale ritorna True, altrimenti False
function isPalindroma(parolaInserita) {
    var isParolaPalindroma = false;
    //console.log('Dentro alla funzione:', parolaInserita);

    // Scorro la parola al contrario e metto le lettere in parolaReverse
    var parolaReverse = '';
    for (var i = parolaInserita.length - 1; i >= 0; i--) {
        var thisLettera = parolaInserita[i];
        
       parolaReverse = parolaReverse + thisLettera;
    }

    if (parolaReverse === parolaInserita) {
        isParolaPalindroma = true;
    }

    return isParolaPalindroma;
}