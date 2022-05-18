let etaUtente = prompt("Quanti anni hai?");
let kmViaggio = prompt("Quanti chilometri devi fare?");

//validazione prompt
if (!isNaN(etaUtente) && !isNaN(kmViaggio) && (kmViaggio >= 10 && kmViaggio <= 500)) {
    const prezzoBase = 0.21;

    let prezzoBigliettoBase = kmViaggio * prezzoBase;

    let prezzoBiglietto = prezzoBigliettoBase
    if (etaUtente < 18) {
        prezzoBiglietto = prezzoBigliettoBase - (prezzoBigliettoBase * 20) / 100;
    } else if (etaUtente > 65) {
        prezzoBiglietto = prezzoBigliettoBase - (prezzoBigliettoBase * 40) / 100;
    }

    prezzoBiglietto = prezzoBiglietto.toFixed(2)



    // id elemento
    const liEtaUtente = document.getElementById("eta-utente");
    const liKmUtente = document.getElementById("km-utente");
    const liPrezzoUtente = document.getElementById("prezzo-utente");



    // proprietà inner.html
    liEtaUtente.innerHTML = `Hai ${etaUtente} anni`;
    liKmUtente.innerHTML = `Fai ${kmViaggio} km`;
    liPrezzoUtente.innerHTML = `Totale ${prezzoBiglietto} euro`;

} else {
    alert("Dati non validi")
}







