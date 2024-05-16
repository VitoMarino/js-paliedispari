const utente = Number.parseInt(prompt('Scrivi un numero da 1 a 5'))

const macchina = macchinaRandom(1, 5)
function macchinaRandom (min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
}

somma (utente, macchina)
function somma(valore1, valore2) {
    return valore1 + valore2;
}

if (utente === 2 % 0) {
    console.log('macchina:' + macchina, 'utente:' + utente, 'HA VINTO UTENTE!!');
} else if (macchina === 2 % 1) {
    console.log('macchina:' + macchina, 'utente:' + utente, 'HA VINTO MACCHINA!!');
}