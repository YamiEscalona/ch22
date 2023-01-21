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
    element.innerHTML = `<h1> ${element.innerHTML} <em>Manipulación</em> del <strong>Dom</strong> por <em>${nombreDesarrollador}</em></h1>`;
}
encontrarElementoById();

const encontrarElementosByTagName = () => {
    //const elements = document.getElementsByTagName("p");
    const [introRef] = document.getElementsByTagName("p")
    //Obtenemos el indice 0
    //const introRef = elements[0].innerHTML;
    //Modificamos el contenido de introRef
    console.log(introRef?.innerHTML);
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

const diferenciaInnerHTML = () => {
    const element =document.getElementById("titulo");
    console.log (element.innerHTML);
    console.log (element.innerText);
}
diferenciaInnerHTML();

const encontraElementosByClassName = () => {
    const elements =document.getElementsByClassName("subtitulo"); //contiene ena colección
    for(let element of elements)
    console.log(element.innerText);
}
encontraElementosByClassName();

//El selector universal

const encontrarElementoByQuerySelector =() => {
    const element = document.querySelector(".subtitulo");
                    //document.querySelectorAll(".subtitulo")//Nos trae todos los nodos
    console.log(element?.innerText);
}
encontrarElementoByQuerySelector();

const crearElemento = () =>{
    const newElement = document.createElement("p");
    newElement.innerHTML = `La Ch22 es bien <strong>chida</strong> por
    <ul>
        <li>Diversa</li>
        <li>Listos y listas</li>
        <li>Hay clases de bienes raices</li>
        <li>Cholos</li>
        <li>Amigables</li>
        <li>La Ch22 te respalda</li>
        <li>Sin problemas en quesadillas</li>
        <li>Aplican:<strong> has compitas, no compitas</strong></li>
        <li>Tenemos a Wicho y Pavel</li>
    </ul>`;
    document.getElementById("datos-generation").appendChild(newElement);
}
crearElemento();