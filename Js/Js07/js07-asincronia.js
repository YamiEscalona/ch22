console.log("Js07");

const introduccion = () => {
    console.log("01-Bienvenidos y bienvenidas a CH22");
}

const desarrollo = () => {
    console.log("Pásale a lo barrido");
}

const desarrolloAsincrono = (delay) => {
    setTimeout(()=>console.log(`Asincrono - Pásele en ${delay}ms`), delay);
}

let idSetInterval;
const setIntervalAsincrono = (delay=2000) => {
    let contador = 0;
   idSetInterval = setInterval(()=> console.log(`Rockstar ${++contador}`), delay);
}

/*const stopIntervalAsincrono = () => {
    setTimeout(()=> idSetInterval &&clearInterval(idSetInterval),10_000);
}*/

const stopIntervalAsincrono = () =>{
    setTimeout ( ()=> {
        console.log("Se detiene el intervalo");
        clearInterval(idSetInterval);
    } , 10_000 );
}

const despedida = () => {
    console.log("03.-Ay nos vidrios, nos vicenteamos luego");
}

//Programación sincrona
introduccion();
desarrollo();
despedida();

//Programación asincrona
introduccion();
desarrolloAsincrono(2000);
desarrolloAsincrono(6000);
setIntervalAsincrono(2000);
stopIntervalAsincrono();
despedida(); //esta funcion no espera a que finalice la función asíncrona

const refStartInterval = document.getElementById("start-interval");
const refStopInterval = document.getElementById("stop-interval");

let idCounter;
refStartInterval.addEventListener('click', (event)=>{
    console.log(event);
    let counter=0;
    refStartInterval.disabled = true;
    refStopInterval.disabled = false;
    idCounter = setInterval( ()=>console.log(`Contador ${++counter}`), 1000 );
} );

function stopCounter(event) { //event
    console.log(event);
    console.log("Se detiene el contador")
    clearInterval(idCounter);
    refStartInterval.disabled = false;
    refStopInterval.disabled = true;
}
