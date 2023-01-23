console.log("Js08 objetos");

// Crear un objeto
const frutasColor = {
    fresa: "roja",
    pinia: "amarilla",
    pepino: "verde",
    naranja: "verde-amarillo",
};

// Formas de leer un objeto
console.log(frutasColor.fresa);
console.log(frutasColor[`pepino`]);
const colorFrutaNaranja ="naranja";
console.log(frutasColor[colorFrutaNaranja]);//verde-amarrillo
//Modificación a un valor
frutasColor[colorFrutaNaranja]= "amarillo anaranjado";
console.log(frutasColor [colorFrutaNaranja]);//amarillo anaranjado

//Iterando los obajetos
for (let frutaColor in frutasColor)//Voy a leer las claves 
    console.log("clave", frutaColor, "valor", frutasColor[frutasColor]);

/*for(let frutasColor of frutasColor)//Leer los valores del objeto
    console.log("valor",frutasColor);*/

//Uso de symbol
const oculto = Symbol();

const datosAutomovil = {
    modelo:"Vochito",
    fabricante: "VW",
    [oculto]: 250_000
}

for (let clave in datosAutomovil)
    console.log("Dato",datosAutomovil[clave]);

console.log("Dato oculto " + datosAutomovil[oculto]);

localStorage.setItem("automovil", JSON.stringify(datosAutomovil));

// Solicitud de Jaime
const words = ['hello','world', 'javascript'];
const capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1));
console.log(capitalizedWords);// ["Hello", "World", "Javascript"]

//----------------------------------
const myArray =[5,7,8,14];
//Creando un arreglo usando el constructor
const myArrayWithConstructor = new Array(5,7,8,14);
//Leyendo una propiedad del objeto myArray
//Propidad de longitud
//Las propiedades con caracteristicas del objeto, estos no llevan paréntesis
myArray.length//4
//Usando el método para extraer el 7 y 8
console.log(myArray.slice(1,3))//[7,8]
