console.log("Seción Js03");

const datosUsuario = {nombre:"Jessica", ciudad:"CDMX"};
//Declaración de bloque
{
    //Estos es una declaración de bloque en dondelas variables declaradas (let, conts) solo tendra alcance dentro del bloque o bloque anidados dentro del bloque.
    const datosUsuario = {nombre:"wicho",ciudad:"Aguascalientes"};
    const numPersonas = 49;
    console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.ciudad}`);
    {
        console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.ciudad}`);

    }
}
console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.ciudad}`);
//La variable numPersonas no está definida.
//console.log(`En este momento hay ${numPersonas} personas escuchando rolitas de Shakira`)

// Condicional If
/* Sintaxis
    if (codiciónVerdadera) instrucción;
     if (codiciónVerdadera) instrucción;
     else instruccion_en_caso_
    if (codiciónVerdadera){
        intrucciones;
    }
*/
const respuesta = false //confirm("¿Te gusta Shakira?");
console.log(respuesta);
let mensaje;

if(respuesta){
    // mensaje ="Entonces te pongo WakaWaka";
    mensaje = "Te fe-li-ci-to que bien actuas"}
else 
    mensaje = "Entonces te pongo Su Chambelán";
console.log(mensaje);
//Operador ternario.
//Sintaxis: condición ? condicícion_verdadera :condición_falsa;

let teamFrio = confirm("¿Te gusta el frío?")
//let mensajeTernario = teamFrio ? "hielito" : "ponche";
//console.log(`Te voy a servir ${mensajeTernario}`);
console.log(`Te voy a servir: ${teamFrio ? "hielito":"ponche"}`);

let cantante = "Yami";
console.log(`Tu reloj es ${cantante===`Shakira` ? "Rolex": cantante==="Pique" ?"Casio" :"el sol"}`)
/*
    let marcaReloj;
    if( cantante === 'Shakira' ) marcaReloj = "Rolex";
    else{
        if( cantante === 'Pique') marcaReloj = "Casio"
        else marcaReloj = "el sol";
    }
    console.log(`Tu reloj es ${ marcaReloj})
    */
//Condicional If, Else, Else If
/*Sintaxis
if (codiciónVerdadera) instrucción;
     else if (segundaCondición)instrucción
     else if (terceraCondición)instrucción
     else if (Condición n)instrucción
     else instrucción;*/
     let nombrePersona = "Yami";
     let marcaReloj;
     if( nombrePersona === "Shakira" ) marcaReloj = "Rolex";
     else if( nombrePersona === "Pique"|| nombrePersona ===  "Karla") marcaReloj = "Casio";
     else if( nombrePersona === "Sergio") marcaReloj = "el sol";
     else marcaReloj = "uno de cars";
     
     console.log(`Tu reloj es ${ marcaReloj}`);
     
//Operadores lógicos and(&&) y or(||)
/* AND
  A          B->     C
 True       True    True
 True       false   false
 false      true    false
 false      false   false   

     OR
  A          B->     C
 True       True    True
 True       false   True
 false      true    True
 false      false   false */

 /* Condicional Switch
        Sintaxis:
            switch(expresion){
                case valor1:
                    instruccines;
                    break;
                case valor2:
                    instruccines;
                    break;
                case valorn:
                    instruccines;
                    break;
                defaul:
                    instruccines;
            }*/
nombrePersona = "Mon";
marcaReloj= "";

switch(nombrePersona){
    case "Shakira": //nombrePersona === "Shakira";
        marcaReloj = "Rolex";
        break;
    case "Pique":
    case "Karla":
        marcaReloj = "Casio";
        break;
    case "Sergio":
        marcaReloj = "El sol";
        break;
    case "Mon":
            marcaReloj = "Ferrari";
            break;
    default:
        marcaReloj = "Uno de Cars"
}
console.log(`Switch - ${nombrePersona} tu reloj es ${ marcaReloj}`);

/*Preguntar(prompt) el numero de mes, del 1 al 12.
De acuerdo al mes indica desplegar en la consola la estación del año:
mes 12, 1, 2 = Invierno;
mes 3, 4, 5 = Primavera;
mes 6, 7, 8 = Verano;
mes 9, 10, 11 = Otoño;
Usar switch.
    La estación del año es invierno
    Mes: 1
    En enero la estación del año es invierno
    mes: 6
    En junio la estación del año es verano
 */
mesDelAño = prompt("¿Que numero de mes es?");
estacionAño= "";
mes="";
    switch(mesDelAño){
        case "12": 
            mes = "En Diciembre";
            estacionAño = "Invierno";
            break;
        case "1":
            mes = "En Enero";
            estacionAño = "Invierno";
            break;
        case "2":
            mes = "En Febrero";
            estacionAño = "Invierno";
            break;
        case "3":
            mes = "En Marzo";
            estacionAño = "Primavera";
            break;
        case "4":
            mes = "En Abril";
            estacionAño = "Primavera";
            break;
        case "5":
            mes = "En Mayo";
            estacionAño = "Primavera";
            break;
        case "6":
            mes = "En Junio";
            estacionAño = "Verano";
            break;
        case "7":
            mes = "En Julio";
            estacionAño = "Verano";
            break;
        case "8":
            mes = "En Agosto";
            estacionAño = "Verano";
            break;
        case "9":
            mes = "En Septiembre";
            estacionAño = "Otoño";
            break;
        case "10":
            mes = "En Octubre";
            estacionAño = "Otoño";
            break;
        case "11":
            mes = "En Noviembre";
            estacionAño = "Otoño";
            break;
        default :
            mes = `El mes ${mesDelAño} no existe por lo cual`
            estacionAño = "un error"
    }
console.log(`Switch - ${mes} la estación del año es ${ estacionAño}`);