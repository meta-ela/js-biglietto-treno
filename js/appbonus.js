const etaUtente = prompt("Quanti anni hai?");
const kmViaggio = prompt("Quanti chilometri devi fare?");
let datiValidi = true;


const prezzoBase = 0.21;
let prezzoBigliettoBase = parseInt(kmViaggio) * prezzoBase;
let prezzoBiglietto = prezzoBigliettoBase;

prezzoBiglietto = prezzoBiglietto.toFixed(2);

console.log("prezzo originale:", prezzoBiglietto);

//validazione prompt
// if (!isNaN(etaUtente) && !isNaN(kmViaggio) && (kmViaggio >= 10 && kmViaggio <= 500)) {
//     if (etaUtente < 18) {
//         prezzoBiglietto = prezzoBigliettoBase - (prezzoBigliettoBase * 20) / 100;
//     } else if (etaUtente > 65) {
//         prezzoBiglietto = prezzoBigliettoBase - (prezzoBigliettoBase * 40) / 100;
//     }

//     // id elemento
//     const liEtaUtente = document.getElementById("eta-utente");
//     const liKmUtente = document.getElementById("km-utente");
//     const liPrezzoUtente = document.getElementById("prezzo-utente");

//     // proprietà inner.html
//     liEtaUtente.innerHTML = `Hai ${etaUtente} anni`;
//     liKmUtente.innerHTML = `Fai ${kmViaggio} km`;
//     liPrezzoUtente.innerHTML = `Totale ${prezzoBiglietto} euro`;

// } else {
//     alert("Dati non validi")
// }


if (etaUtente < 18) {
    prezzoBiglietto = prezzoBigliettoBase - (prezzoBigliettoBase * 20) / 100;
} else if (etaUtente > 65) {
    prezzoBiglietto = prezzoBigliettoBase - (prezzoBigliettoBase * 40) / 100;
}

// correzione validazione
if (isNaN(etaUtente) || isNaN(kmViaggio)) {
    datiValidi = false;
    alert("devi inserire un numero valido per KM ed età");
}
if (etaUtente < 14) {
    datiValidi = false;
    alert("Sei troppo piccolo");
}

if (kmViaggio > 500 || kmViaggio < 10) {
    datiValidi = false;
    alert("I chilometri percorribili devono essere tra i 10 e 500");
}

// id elemento
const liEtaUtente = document.getElementById("eta-utente");
const liKmUtente = document.getElementById("km-utente");
const liPrezzoUtente = document.getElementById("prezzo-utente");

// proprietà inner.html
liEtaUtente.innerHTML = `Hai ${etaUtente} anni`;
liKmUtente.innerHTML = `Fai ${kmViaggio} km`;
liPrezzoUtente.innerHTML = `Totale ${prezzoBiglietto} euro`;



console.log("prezzo scontato:", prezzoBiglietto);




