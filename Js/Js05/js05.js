console.log("Sesión Js05");

// Operador de asignación
let estadoDiminutoDeMexico = "Tlaxcala";
{
    let espaniol = ingles = rumano = turco = vasco = chino = true;
    let japones = true; let cholo = true;
}
//console.log("fracisco habla español = " + espaniol); Marca error, esta fuera del 
console.log("fracisco habla ingles = " + ingles);
console.log("fracisco habla rumano = " + rumano);
console.log("fracisco habla turco = " + turco);
console.log("fracisco habla vasco = " + vasco);
console.log("fracisco habla chino = " + chino);

// Operadores ariméticos
// multiplicación
let metrosCuadrados = 10 * 30; // 300;
//tenemos 2 terrenos
//metrosCuadrados = metrosCuadrados * 2;
// Operadores simplificados
metrosCuadrados *= 2;

//división
//división el terrenito entre 3 hijos
metrosCuadrados /= 3; //200
console.log("m2 de terrenos " + metrosCuadrados);

// Residuo %
//Quiero saber si los metrosCuadrados son multiplo de 2
let esMultiplo2 = metrosCuadrados % 2 ? "No" : "Si"; //0 -> si
console.log("La cantidad es múltiplo de 2? " + esMultiplo2);

//Resta -
let precioTerreno = 90000
let precioM2 = precioTerreno/300;
console.log(`Precio del metro cuadrado $${precioM2} pesitos`);
let cantidadPagada = 30000;
let cantidadRestante = precioTerreno - cantidadPagada;
console.log(`Cantidad restante $${cantidadRestante} pesos`);
//Se abonó $10,000
console.log(`Cantidad restante $${cantidadRestante -= 10000} pesos`);

// Suma
// cobro por la generación de escrituras (8% costo terreno)
const costoEscrituras = precioTerreno * 0.08;
precioTerreno += costoEscrituras;
console.log("Terreno + escrituras $" + precioTerreno); //97200

//console.log("Terreno + escrituras $" + (precioTerreno += precioTerreno * 0.08 ));

//Concatenación de strings
let nombre = "Alan";
nombre += " García"; //nombre = nombre + " García"
console.log("Nombre personas Ch22 " + nombre);

// Operadores de incremento y decremento, incrementan o decrementan en una unidad.
// preincremento ++variable, postincremento variable++
// predecremento --variable, postdecremento variable--
let numClavosParaMiCasa = 100;
numClavosParaMiCasa++; //101
console.log("Núm. de clavos: " + numClavosParaMiCasa);
++numClavosParaMiCasa; //102
console.log("Núm. de clavos: " + numClavosParaMiCasa);//102
console.log("Núm. de clavos: " + numClavosParaMiCasa++);//102 -> 103
console.log("Núm. de clavos: " + ++numClavosParaMiCasa); //104

//-------------------------------
let respuestasExamen = 95;
//Agregamos punto extra
console.log("Resultado final: " + respuestasExamen++); //95 -> var = 96

respuestasExamen = 82;
do{
    console.log("Respuesta: " + respuestasExamen); //último valor 100
    //++respuestasExamen
}while(++respuestasExamen <=100);
console.log("Resultado final: " + respuestasExamen); //valor impreso 101

let nivelSuenio = 99;
if(nivelSuenio++ === 100) console.log("Me voy a mimir en la sesión");
console.log("Nivel de sueño " + nivelSuenio); //100

//Preincremento
let x = 10;
x = x +1;
console.log(x); // ++x  x+=1    x=x+1;

//Postincremento
let y = 10
console.log(y); // y++
y = y + 1;

x = 3;
y = x++;
console.log(`x:${x} y:${y}`); //x:4 y:3

x = 3;
y = ++x;
console.log(`x:${x} y:${y}`); //x:4 y:4

//Operadores relacionales
/**
 * <= menor o igual que
 * >= mayor o igual que
 * > mayor que
 * < menor que
 */
let numPerfumes = 10;
if(numPerfumes >= 10) console.log("Que elegancia la de francia");

//Operadores de igualdad
/**
 * == operador igual
 * === estrictamente igual
 * != diferente que
 * !=== estrictamente deiferente que
 */
let numMatriculaPavel = "10025";
if(numMatriculaPavel == 10025) console.log("Pavel esta aprobado");
if(numMatriculaPavel === 10025) console.log("Pavel esta en nivel fase 5");
if(numMatriculaPavel >= 10025) console.log("Pavel esta en el CUCEI");

//Operadores lógicos
// && (AND)  || OR
let numeroRebosos = 3;
let teGustaRebosos = false;
let vivesEnElExtranjero = false;
if(numeroRebosos > 5 || teGustaRebosos) console.log("Te regalo un reboso de Oaxaca");

if(numeroRebosos > 0 || teGustaRebosos && vivesEnElExtranjero) 
console.log("Te vendo mi reboso en dolares");

//Operadores de corto circuito
// OP1 && OP2 Si OP1 = true, se realiza el resultado de OP2
let online = true;
let mensaje = "Estamos en línea";
let respuesta = online && mensaje;
console.log("Respusta: " + respuesta);

let edadPersona= 18;
mensaje = "puede volar";
console.log("la persona puede volar? " + (edadPersona>=18 && mensaje));

// OP1 || OP2 Si OP1 = true, se realiza el resultado de OP1 Si OP1 = false, se realiza el OP2

/*OP1   OP2     R
   t     t      t
   t     f      f
   f     t      f
   f     f      f*/

let isOnline = true;
let isActive = true;

if(isOnline)
console.log("Estamos Autorizado");

if(isOnline && isActive)
console.log("Estamos Autorizado");

isOnline && isActive && console.log ("Estamos Autorizado");

let edadMiSobrina = 15;
console.log(edadMiSobrina>18 && "Puede votar");
let numDeQuesadillasAComer = "3";
let guisado = "Huitlacoche";
console.log("Montse comerá quesadilla de: "+ (numDeQuesadillasAComer && guisado));

let nombreConductor ="Pax";
let tieneLicenciaConducir = true;
let edadConductor = 50;

const seRentaAuto = nombreConductor && tieneLicenciaConducir && edadConductor<60;
console.log(seRentaAuto);

const datosQuesadilla = {
    tortilla: "maiz",
    tieneQueso: true,
    pica: "poquito",
}
const picaLaQuesadilla = datosQuesadilla.pica && "pica mucho";
console.log(picaLaQuesadilla)


let u = 0;
let o = !false;
let t = "hola";
let p = "1023";

const qw = u || o || t && p;
console.log(qw);