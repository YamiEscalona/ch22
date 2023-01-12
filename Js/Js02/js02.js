console.log("Sesión JS02");

/*Funciones declaradas / funciones definidas
(function declaration /function statement)
Una característica de las funciones declaradas es que tiene hoisting (elevación).*/

console.log("el resultado de 5 * 10 = " + multiplica(5, 10));
function multiplica(a, b){
    return a * b;
}
/*Funciones Expresadas
Las funciones expresadas (function expresions) son funciones que son 
declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas (sin nombre).
Las funciones expresadas no tienen hoisting.*/

/**
 * Suma dos valores
 * @param {number} a primer operador para sumar
 * @param {number} b segundo operador para sumar
 * @returns resultado de a + b;
 */
const suma = function( a, b ){ 
    const result = a + b;
    return result;

};
console.log("La sumatoria de 4 + 6 = " + suma(4, 6));

/* Funciones autoinvocadas
Las funciones autoinvocadas (selft-invoking functions)
Son funciones que se ejecutan en su definición.
Pueden ser funciones anónimas.*/

(function saludo(){
    console.log("Hola, me estoy autoincovando");
})();

/* Funciones Flecha
Una función flecha(arrow functions) son similares
a las funciones expresadas, pero no requiere la palabra
function. Además, si solo tiene una instrucción y es el retorno,
no requiere la instrucción return y las llaves {}.*/

const restaExpresada = function ( a, b ){
    return a - b;
}

const resta = ( a, b ) => a - b;
console.log("La resta de 20 - 2 = "+ resta(20,2));
const exponente = ( a, b )=>{
    const result = a ** b;
    return result;
}

console.log("El número 4^3= " + exponentes(4,3));
const exponenteAlCuadrado = a => a ** 2;
console.log("El número 4^2= "+ exponenteAlCuadrado(4));

const imprimeSaludo = () => console.log("Holi crayoli");
imprimeSaludo();

/* Funciones con parámetros inicializados */

function divide( a=1 , b=1 ) {
    return a/b;
}
console.log("La división de 3/1 = " + divide(5));

/* Rest Parameters
El parámetro rest nos permiten representar una serie de valores indefinidos en los argumentos como un array.
El parámetro rest siempre debe ir al final de todos los parámetros. */

function sumatoriaIndefinida(a, b, ...restoDatos){ 
    const sumatoria = a + b;
    for (let i = 0; i < restoDatos.length; i++){
        sumatoria += restoDatos[i]; // Sumatoria = sumatoria + restoDatos[i];
    }
    return sumatoria;
}
console.log("Sumar varios números:" + sumatoriaIndefinida(2, 3, 4, 5));

/* Funciones recursivas
función recursiva es una función que se llama a si misma. */
// Factorial de 0 = 1
// Factorial de 3 = 3 * 2 * 1; //6
// Factorial de 5 = 5 * 4 * 3 * 2 * 1; // 120
function factoriaConCicloFor(a) {
    let total = 1;
    for ( i = 1; i <= a; i++) {
         total *= i;
    }
}

function factorialConRecursion(a) {
    return a * factorialConRecursion(a - 1)
}
console.console.log("Factorial 3 = " + factoriaConCicloFor(3)); //6
console.console.log("Factorial 5 = " + factoriaConCicloFor(5)); //120
console.console.log("Factorial 3 = " + factorialConRecursion(5)); //6
console.console.log("Factorial 5 = " + factorialConRecursion(5)); //120