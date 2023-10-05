// - chiedere all'utente nome e cognome
// - chiedere all'utente il numero di chilometri da percorrere
//   - recupero il numero dei km inseriti dall'utente nel campo input
//     - seleziono l'elemento input tramite ID
//     - recupero il valore presente nell'input e lo salvo in una variabile
const inputDomElement = document.getElementById('num-kilometers')
console.log(inputDomElement)
// - chiedere all'utente la fascia d'età
//   - utilizzo il tag select con 3 tag option
const selectDomElement = document.getElementById('age-range')
console.log(selectDomElement)
// - calcolare il prezzo totale del biglietto
//   - recupero un pulsante presente nel DOm e aggancio una funzione che sarà chiamata quando accade l'evento click
const btnDomElement = document.getElementById('btn-calc')
btnDomElement.addEventListener('click', function () {
    
    const km = parseFloat(inputDomElement.value)
    console.log(km)

    const ageRange = selectDomElement.value
    console.log(ageRange)
//     - definisco il prezzo del biglietto in base ai chilometri
//       - numero chilometri * 0.21
    const basePrice = km * 0.21
    console.log(basePrice)

    
    if (ageRange == 0) {
    //     - applico uno sconto del 20% per i minorenni
        let discount = basePrice * 20 / 100
        console.log(discount)
        const finalPrice = basePrice - discount
        console.log('prezzo finale: ' + finalPrice)
    } else if (ageRange == 2) {
    //     - applico uno sconto del 40% per gli over 65
        let discount = basePrice * 40 / 100
        console.log(discount)
        const finalPrice = basePrice - discount
        console.log('prezzo finale: ' + finalPrice)
    } else {
        let discount = 0
        const finalPrice = basePrice - discount
        console.log('prezzo finale: ' + finalPrice)
    }

    

})



// - stampare la risposta finale nella pagina
//   - prendere l'elemento del Dom dove stamapre il prezzo
//   - modificare innerHTML con prezzo con massimo due decimali