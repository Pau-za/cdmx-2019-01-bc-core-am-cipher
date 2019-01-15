//Aquí voy a crear eventos
//const boton = document.getElementById('boton');

//boton.addEventListener('click', window.cypher.encode); //llamo a la función del documento cypher.js

//evento del botón para la explicación del Cifrado César
const divIntro = document.getElementById('intro');
const divExplain = document.getElementById('cifCes');
const divDesp = document.getElementById('offset');
const divCode = document.getElementById('codeStr');
const divDecode = document.getElementById('decodeStr');



document.getElementById('botonCesar').addEventListener('click', pulsar);
    function pulsar() {
        divIntro.style.display = 'none';
        divExplain.style.display = 'block';
    };



//evento de botón "estoy lista para iniciar"
document.getElementById('start').addEventListener('click', pulsarStart);
    function pulsarStart() {
        divIntro.style.display = 'none';
        divDesp.style.display = 'block';
    };

//Evento del botón "volver a introducción"
//No me sale este evento :(


document.getElementById('backIntro').addEventListener('click', clickBack);
    function clickBack() {
        divDesp.style.display = 'none';
        divIntro.style.display = 'block';
    };

    
//Input que recibe el número de desplazamiento

const getOffset = () => {
    let offset = document.getElementById('offsetNumb').value;
    console.log(Number(offset)); //Si pongo console.log sí limpia el input, y guarda el valor
    let clearInput = document.getElementById('offsetNumb').value=''; //limpia input
    //limpiar input
};
document.getElementById('offsetButton').addEventListener('click', getOffset);




//Evento para insertar codificar


document.getElementById('code').addEventListener('click', showCode);
    function showCode () {
        divCode.style.display = 'block';
        if(divDecode.style.display = 'block'){
            divDecode.style.display = 'none';
        }
    };




//Función para codificar mensaje
const mensaje = document.getElementById('toEncode'); //evento en textarea

document.getElementById('toCode').addEventListener('click', getMsj); //cuando de click en el botón del textarea, se ejecuta la función getMsj
    function getMsj () {
        let stringObtenido = mensaje.value; //trae el valor del string que introujo el usuario
        let mayuscula = stringObtenido.toUpperCase(); //convierte string a mayúsculas
        let mayus = mayuscula.charCodeAt(); //variable que va a guardar el valor del código ascii
        for(let i=0; i<mayuscula.length; i++) {
            let letraAscii = mayuscula.charCodeAt(i); //obtiene el valor del código ascii de cada elemento del string
            let formulaEncode = (letraAscii + 65 - Number(getOffset)) % 26 + 65; 
            console.log(formulaEncode); //dice NaN ;(
        }
    }



//Evento para insertar decodificar


document.getElementById('decode').addEventListener('click', showDecode);
    function showDecode () {
        divDecode.style.display = 'block';
        if(divCode.style.display = 'block'){
            divCode.style.display = 'none';
        }
    };


    //evento del botón atrás, para volver a la Intro

    document.getElementById('backToStart').addEventListener('click', pulsarBackButton);
function pulsarBackButton() {
    divDesp.style.display = 'none';
    divCode.style.display = 'none';
    divDecode.style.display = 'none';
    divIntro.style.display = 'block';
};

//Comencemos con el código de la función
