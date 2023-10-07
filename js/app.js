// - chiedere all'utente nome e cognome
// - chiedere all'utente il numero di chilometri da percorrere
//   - recupero il numero dei km inseriti dall'utente nel campo input
//     - seleziono l'elemento input tramite ID
//     - recupero il valore presente nell'input e lo salvo in una variabile
const inputDomElement = document.getElementById('num-kilometers')
// console.log(inputDomElement)
// - chiedere all'utente la fascia d'età
//   - utilizzo il tag select con 3 tag option
const selectDomElement = document.getElementById('age-range')
// console.log(selectDomElement)
// - calcolare il prezzo totale del biglietto
//   - recupero un pulsante presente nel DOm e aggancio una funzione che sarà chiamata quando accade l'evento click
const carriageDomElement = document.getElementById('carriage')

const nameDomElement = document.getElementById('input-username')

const codeDomElement = document.getElementById('CP-code')

const btnDomElement = document.getElementById('btn-calc')
btnDomElement.addEventListener('click', function () {
    
    const km = parseFloat(inputDomElement.value)
    console.log(km)

    const passenger = (nameDomElement.value)

    const kmNotValid = isNaN(km) || km < 0
	const passengerNotValid = passenger === ''

    if (kmNotValid) {
		// il numero non è valido
		alert('chilometri da percorrere non sono validi')
	} else if (passengerNotValid) {
		alert('Il nome non è valido')
    } else {
        const ageRange = (selectDomElement.value)
        console.log(ageRange)
//     - definisco il prezzo del biglietto in base ai chilometri
//       - numero chilometri * 0.21
        const basePrice = km * 0.21
        console.log(basePrice)

    
        let discount = 0
        if (ageRange == 0) {
        //     - applico uno sconto del 20% per i minorenni
            discount = basePrice * 20 / 100
        } else if (ageRange == 2) {
        //     - applico uno sconto del 40% per gli over 65
            discount = basePrice * 40 / 100
        }

        console.log('sconto ' + discount)

        const finalPrice = basePrice - discount
        console.log('prezzo finale: ' + finalPrice)
// - stampare la risposta finale nella pagina
//   - prendere l'elemento del Dom dove stamapre il prezzo
//   - modificare innerHTML con prezzo con massimo due decimali
        const priceDomElement = document.getElementById('price')
        priceDomElement.innerHTML = finalPrice.toFixed(2) + '€'

        const carriage = Math.floor(Math.random() * 10)
        carriageDomElement.innerHTML = carriage

        const cpCode = Math.floor(Math.random() * 100000)
        codeDomElement.innerHTML = cpCode

        document.getElementById('passenger').innerHTML = passenger
    }
})

document.getElementById('btn-reset').addEventListener('click', function() {
    inputDomElement.value = ''
    nameDomElement.value = ''
})



