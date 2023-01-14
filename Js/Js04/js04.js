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