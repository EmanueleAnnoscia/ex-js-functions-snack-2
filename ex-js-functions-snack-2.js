// //snack 1
// function somma(numero1, numero2){
//     return numero1 + numero2;
// }

// console.log(somma(3, 5))

// let somma1 = function(numero1, numero2){
//     return numero1 + numero2;
// }

// console.log(somma1(5, 7))

// let somma2 = (numero1, numero2) => numero1 + numero2;

// console.log(somma2(2, 15))

// //snack 2

// let square = (numero) => numero * numero; //nuova scrittura con n** 2 2 indicante al quadrato

// console.log(square(4))

// //snack 3

// const somma3 = (numero1, numero2) => numero1 + numero2;
// const divisione = (numero1, numero2) => numero1 / numero2;  
// const moltiplicazione = (numero1, numero2) => numero1 * numero2;  
// const sottrazione = (numero1, numero2) => numero1 - numero2;  

// function eseguiOperazione(operazione){
//     return function(numero1, numero2){
//         return operazione(numero1, numero2); 
//     };
// };

// console.log(eseguiOperazione(moltiplicazione)(5,6))

// //snack 4

// function creaTimer (timeset){   
//     console.log("Timer avviato per", timeset, "ms");
//     return setTimeout(() => console.log('Tempo Scaduto!'), timeset)

// }

// creaTimer(5000);

// //snack 5
// function stampaOgniSecondo (message){
//     return setInterval(()=> console.log(message),20000);
// }

// stampaOgniSecondo('Ciao Mondo')

// //snack 6
// function creaContatoreAutomatico(intervalloTemp){
//     let counter = 0;
//     return setInterval(()=> console.log(counter ++), intervalloTemp );

// }

// creaContatoreAutomatico(5000)

// //snack 7
// function eseguiEFerma(message, start, stop){
//     const id =  setInterval(()=> console.log(message), start)

//     setTimeout(()=> {
//         clearInterval(id) 
//         console.log('Intervallo fermato!') 
//     }, stop);

// }

// eseguiEFerma('ciao', 1000, 5000);

// //snack 8 
// function contoAllaRovescia(counter, timeSetInterval){
//     let stop = (counter+1) * 1000;
//     const id =  setInterval(()=> console.log(counter --), timeSetInterval)

//     setTimeout(()=> {
//         clearInterval(id) 
//         console.log('Intervallo fermato!') 
//     }, stop);

// }

// contoAllaRovescia(10, 1000);

// //snack 9
// function sequenzaOperazioni(array, numeroIntervallo){
//     let index= 0;

//     const id = setInterval(()=> {
//         console.log(array[index]);
//         index ++;

//         if (index > array.length){
//             clearInterval(id);
//             console.log('Sequenza temrinata!')
//         }
//     }, numeroIntervallo)

// }

// sequenzaOperazioni(["operazione", "operazione1", "operazione2", "operazione3"], 2000)

//snack10

function somma(numero1, numero2){
     return numero1 + numero2;
 }

 let square = (numero) => numero * numero;

function creaThrottler( callback ,limite){
    let ultimoTempo = 0;

    return function(...args){
        const adesso = Date.now();
        if(adesso - ultimoTempo>= limite){
            ultimoTempo = adesso;
            return callback(...args)
        }
    };

}

const sommaThrottled = creaThrottler(somma, 5000)
// const squareThrottled = creaThrottler (square, 5000)

// console.log(sommaThrottled(5,8));
// console.log(squareThrottled(13));
// setTimeout(() => console.log(sommaThrottled(2, 3)), 6000); 
setInterval(()=> console.log(sommaThrottled(80,20)), 1000)
// setTimeout(()=> console.log(squareThrottled(13)), 5000)