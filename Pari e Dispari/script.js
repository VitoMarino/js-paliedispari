const utente = Number.parseInt(prompt('Scrivi un numero da 1 a 5'))
const macchina = (macchinaRandom)

somma (utente, macchina)

function macchinaRandom (min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
}

function somma (var1, var2) {
    return var1 + var2;
}

if (utente === 2 % 0) {
    console.log('macchina:' + macchina, 'utente:' + utente, 'HA VINTO UTENTE!!');
} else if (macchina === 2 % 1) {
    console.log('macchina:' + macchina, 'utente:' + utente, 'HA VINTO MACCHINA!!');
}