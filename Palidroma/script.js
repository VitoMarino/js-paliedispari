function palindroma(parola) {
    let prova = ''
    let reversedProva = ''
    // Indice che conta al contrario fino a che non arriva ad indice 0;
    // indice parte da 0; lenth parte da 1; quindi facendo -1 mi ritrovo la corretta lunghezza.
    for (let i = prova.length -1; i >= 0; i--) {
        reversedProva += prova[i]
    }
    return reversedProva;
}

if (prova === reversedProva) {
    console.log(utente, 'LA PAROLA è PALINDROMA')
} else if (prova !== reversedProva) {
    console.log(utente, 'LA PAROLA NON È PALINDROMA' )
}

const utente = prompt('Scrivi una parola');

let verifica = palindroma(utente);
console.log(utente);

