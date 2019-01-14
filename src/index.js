//Aquí voy a crear eventos
//const boton = document.getElementById('boton');

//boton.addEventListener('click', window.cypher.encode); //llamo a la función del documento cypher.js

//evento del botón para la explicación del Cifrado César
const divIntro = document.getElementById('intro');
const divExplain = document.getElementById('cifCes');

document.getElementById('botonCesar').addEventListener('click', pulsar, false);
    function pulsar() {
        divIntro.style.display = 'none';
        divExplain.style.display = 'block';
    };

//evento del botón atrás, para volver a la Intro
document.getElementById('backIntro').addEventListener('click', pulsarIn, false);
    function pulsarIn() {
        divExplain.style.display = 'none';
        divIntro.style.display = 'block';
    };

