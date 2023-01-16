console.log("Sesión Js04");

const nombresCh22 =["Manuel", "Leonardo", "Melani"];
//Usando el constructor de la clase Array
const nombresCh14 = new Array("Abue", "Cori", "Maga", "Sebas");
console.log(nombresCh22);
console.log(nombresCh14);

const promedioEdadesCh22 = [25];
// Esta línea va a generar un array de 24 elementos.
const promedioEdadesCh14 = new Array(24);
console.log(promedioEdadesCh22);
console.log(promedioEdadesCh14);

//Conocer la longitud de un arreglo: .length
console.log(`Núm de elementos ${promedioEdadesCh22.length}`);
console.log(`Núm de elementos ${promedioEdadesCh14.length}`);
//Se recomienda declarar los arrays (objetos) con conts
// para prevenir que se cambie el tipo de dato
const armasCh22 = ["manoplas","picahielo"]; //typeof(armasCh22) object
//armasCh22 ="filero"; ////typeof(armasCh22) string

console.log("lista de armas:" + armasCh22);

//Leer un elemento del arreglo
console.log(`Jessica tiene un ${armasCh22[1]}`);
console.log(`Leonardo tiene un ${armasCh22[0]}`);
//Cambiar un dato del arreglo
//["filero", "picahielo"];
//Los objetos son datos mutables
armasCh22[0] ="filero";
console.log(`Leonardo tiene un ${armasCh22[0]}`);

let nombreClica = "Los Wichales";
console.log(`La variable ${nombreClica} comienza con la letra ${nombreClica[0]}`)
nombreClica[0] = "T"; //No cambia, porque un string es un dato primitivo, que es inmuta
console.log(`La variable ${nombreClica} comienza con la letra ${nombreClica[0]}`)
nombreClica ="The Wichales";

//Agregamos un nuevo dato al arreglo, al final.
//Lo sig. marca error, porque se le está reasignando el tipo de dato
//armasCh22=["manoplas","picahielos","machetes"];
//armasCh22[5] ="machete"; // ["manoplas","picahielos",,,,"Machete"]
armasCh22[2] = "machete"; //["manoplas","picahielos", "machete"]
armasCh22[armasCh22.length]="macana";
armasCh22.push("cadena");
console.log("Actualización de armas:" + armasCh22);
//Agregar un elemento al inicio
armasCh22.unshift("navaja","desarmador");
console.log("Actualización de armas:" + armasCh22);

//Ciclo For
/* Sintaxis
    for(instrucción Inicio; comparación; expresión final) intrucción

    for(instrucción Inicio; comparación; expresión final){
        intrucción;}
    
    for(let i = 0; i<=10 ; i++){
        intrucción;}
     */

//Iteramos los arreglos
for( let i = 0; i<armasCh22.length; ++i) 
    console.log(`Indice ${i} tiene ${armasCh22[i]}`);

//armasCh22.forEach(callbackFuncion)
function iterarArreglo(elemento,indice, arreglo) {
    console.log(`CB - Indice ${indice} tiene ${elemento}`);
}

//armasCh22.forEach(iterarArreglo);
armasCh22.forEach((elemento, indice) => console.log( `AF ${indice} tiene ${elemento}`));
//Va a iterar los índices del arreglo
for (let arma in armasCh22) 
    console.log(`ForIn ${arma} tiene ${armasCh22[arma]}`);
//Va a iterar los elementos del arreglo
for (let arma of armasCh22) 
    console.log(`Foroff arma: ${arma}`);
    
//iterar de forma descendente las armas.
for( let i = armasCh22.length -1; i>=0 ; i--) 
    console.log("Arma: " + armasCh22[i]);

//Para el ciclo for no es necesario indicar en inicio, la comparación, la expresión final
let iteracion = 0;
for (; ; iteracion++) {
    console.log("valor de i" + iteracion);
    if (iteracion===10) break;
    iteracion++;
}
//La instrucción break rompe con la interación.
//La instrucción continue continua con la sig. iteración
for (let i = 0; i <=10; i++) {
    if(i===5)break;
    console.log("For con break: "+i); // 0, 1, 2, 3, 4
}

for (let i = 0; i <=10; i++) {
    if(i===5)continue;
    console.log("For con continue: "+i); // 0, 1, 2, 3, 4, 6, 7, 8, 9, 10
}
    //[[],[],[]]
const participantes = [["José","María","Pedro"], //Ch1
["Tan","Javi","Andrea","Santi"], //Ch2
["Melanie","Pavel",] //Ch3
];
                                //Feliz Cumpleaños
                                //F   C
console.log("Persona Ch3(f2) 2a persona(c1) "+participantes[2][1]);
console.log("Persona Ch2(f1) 2a persona(c0) "+participantes[1][0]);
console.log("Persona Ch1(f0) 2a persona(c2) "+participantes[0][2]);

for(let fila=0 ; fila<participantes.length; fila++){
    console.log(participantes[fila]); //Iterando las filas
    for(let columna=0 ; columna< participantes[fila].length ; columna++){
        console.log(participantes[fila][columna]);
    }
}
//Usando break en ciclo anidados
//Dejar de mostrar los nombre, cuando se encuentre a Tan
//Usando una variable como bandera
let continuarIteraciones = true;
for(let fila=0 ; fila<participantes.length; fila++){
        for(let columna=0 ; columna< participantes[fila].length ; columna++){
            console.log(`[${fila}][${columna}]`);
            if(continuarIteraciones)
                console.log("Uso de break " + participantes[fila][columna]);
            if(participantes[fila][columna] === "Tan") continuarIteraciones= false;
        }
}

//Usando break
cicloFila:
for(let fila=0 ; fila<participantes.length; fila++){
    cicloColumna:
    for(let columna=0 ; columna< participantes[fila].length ; columna++){
        console.log(`[${fila}][${columna}]`);
         console.log("Uso de break " + participantes[fila][columna]);
        if(participantes[fila][columna] === "Tan") break cicloFila;
    }
}

//Usando continue
cicloFila:
for(let fila=0 ; fila<participantes.length; fila++){
    cicloColumna:
    for(let columna=0 ; columna< participantes[fila].length ; columna++){
        if(participantes[fila][columna] === "Javi") continue cicloFila;
        console.log(`[${fila}][${columna}]`);
        console.log("Uso de continue " + participantes[fila][columna]);
    }
}

//Ciclo while
/*Sintaxis:
while(condicion_verdadera) instrucción;
while(condicion_verdadera) {
    instrucción;}
 */
let numIteracion = 0;
while (confirm("Quieres seguir iterando?")) {
    console.log("Iterando n. "+ numIteracion++);
}
 // Preguntar del 1 al 10 y saber si es el número que pensó el usuario
 let numero =1;
while(!confirm(`${numero} es tu numero?`)) {
    numero++;
    if (numero === 10) break;
}
console.log("tu número es el " + numero);

while(!confirm(`${numero++} es tu numero?`));
console.log("tu número es el " + --numero);

//ciclo do-while
/*Sintasis:
do{
    instrucciones;
} while(condicion_verdadera);
*/
let valor = 0;
while(valor<5){console.log("While "+valor);
valor++;
}

valor = 10;
do{
    console.log("do while "+ valor);
    valor++;
}while (valor < 5);

/**
 * FIFO: first input first output alimentos
 * LIFO: last input first output herramienta */ 
const alimentosPerecederos = []
//Agregar una caja.
// Usando FIFO
alimentosPerecederos.push("manzanas lunes");
alimentosPerecederos.push("peras miércoles");
//Sacando manzanas del lunes
console.log("sacando a la venta " + alimentosPerecederos.shift());//lunes
console.log("sacando a la venta " + alimentosPerecederos.shift());//miércoles

//Tenemos uan ferretería
const productos = ["desarmadores","cemento"];
//agrego luces navideñas de diciembre
productos.push("luces navideñas");
console.log("sacando a la venta " + productos.pop());
console.log("sacando a la venta " + productos.pop());
