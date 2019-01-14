//Aquí voy a crear eventos
//const boton = document.getElementById('boton');

//boton.addEventListener('click', window.cypher.encode); //llamo a la función del documento cypher.js

//evento del botón para la explicación del Cifrado César
const divIntro = document.getElementById('intro');
const divExplain = document.getElementById('cifCes');


document.getElementById('botonCesar').addEventListener('click', pulsar);
    function pulsar() {
        divIntro.style.display = 'none';
        divExplain.style.display = 'block';
    };

//evento del botón atrás, para volver a la Intro
document.getElementById('backIntro').addEventListener('click', pulsarIn);
    function pulsarIn() {
        divExplain.style.display = 'none';
        divIntro.style.display = 'block';
    };

//evento de botón "estoy lista para iniciar"
document.getElementById('start').addEventListener('click', pulsarStart);
    function pulsarStart() {
        divIntro.style.display = 'none';
        divDesp.style.display = 'block';
    };

//Evento del botón "volver a introducción"
//No me sale este evento :(
const divDesp = document.getElementById('offset');

document.getElementById('backIntro').addEventListener('click', clickBack);
    function clickBack() {
        divDesp.style.display = 'none';
        divIntro.style.display = 'block';
    };
    
//Input que recibe el número de desplazamiento
let offset = document.getElementById('offsetNumb').value;
console.log(offset);

//Evento para cambiar de página a que usuaria elija entre codificar y decodificar mensaje


