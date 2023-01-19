console.log("Sesión Js06");

const obtenerNombre = () => prompt("Escribe tu nombre", "Yami")

const encontrarElementoById = () => {
    const element = document.getElementById("titulo");
    //console.log("Datos del objeto: ", element)
    console.log("Entre las etiquetas " + element.innerHTML);
    //element.innerHTML += " Manipulación del Dom";
    // con InnerHtml puede agregar nuevas etiquetas
    //const nombreDesarrollador = "Yami"//ToDo agregar función 
    const nombreDesarrollador = obtenerNombre();
    element.innerHTML = `<h1> ${element.innerHTML} Manipulación del <strong>Dom</strong> por <em>${nombreDesarrollador}</em></h1>`;
}
encontrarElementoById();

const encontrarElementosByTagName = () => {
    //const elements = document.getElementsByTagName("p");
    const [,introRef] = document.getElementsByTagName("p")
    //Obtenemos el indice 0
    //const introRef = elements[0].innerHTML;
    //Modificamos el contenido de introRef
    console.log(introRef.innerHTML);
    introRef.innerHTML = `Las <strong>quesadillas</strong> van con <em>queso</em>, es un hecho`
}
encontrarElementosByTagName();
//Función que me cambie a azul el estilo de las etiquetas <em>
const cambiarColorEm = ( nuevoColor) =>{
    const elements = document.getElementsByTagName("em");
    for (let element of elements)
      element.style.color = nuevoColor;
}
cambiarColorEm("blue");