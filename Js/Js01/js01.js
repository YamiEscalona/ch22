console.log("Sesión js01");


/*son 7 datos primitivos JavaSccript
- String ("Hola Mundo")
- Number (1800.22)
    Los números se utilizan 64 bits para almacenarlo pero, solo se usan 53 bits para representar el número.
- BigInt (1800n)
    Convertir un dato númerico a BigINT
    let binInVar = BigInt(maxNumber);
-Boolean (true/False)
-Undefined (undefined)
    Un dato no se define el tipo de dato, solo se declara.
-Null
    Intencionalmente se borra el tipo de dato.
-Symbol

Tipos de datos Object:
-Object
    const myObject = {};
-Array
    const myArray = [];

Funciones
*/
let myObject = {clave: "valor", edad: 18, 5:5};
console.log( myObject.edad );
const propiedad = "edad";
console.log(myObject[propiedad]);
console.log(myObject['5']);

/*Conversiones de datos de string a number
-parseInt
-parseFloat
*/

//Conversione de datos de number a string
//(1025).toString(radix);