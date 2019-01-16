//Aquí voy a crear eventos
//Variables globales
const divIntro = document.getElementById('intro');
const divExplain = document.getElementById('cifCes');
const divDesp = document.getElementById('offset');
const divCode = document.getElementById('codeStr');
const divDecode = document.getElementById('decodeStr');



//evento del botón para la explicación del Cifrado César
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
document.getElementById('backIntro').addEventListener('click', clickBack);
    function clickBack() {
        divExplain.style.display = 'none';
        divIntro.style.display = 'block';
    };

    
//Input que recibe el número de desplazamiento al dar click en botón ingresar número
const getOffset = () => {
    const offset = document.getElementById('offsetNumb').value;
    console.log(Number(offset)); //Si pongo console.log sí limpia el input, y guarda el valor
    let clearInput = document.getElementById('offsetNumb').value=''; //limpia input
    return offset;
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

//Agarrar string que introduce usuario
let nuevoCifrado = ''; //variable que va a recoger el resultado de la transformación
const getString = () => {
    const userStr = document.getElementById('toEncode').value; //Hasta aquí sí agarra el string
    let mayuscula = userStr.toUpperCase(); //Sí da el string en mayúsculas
    let asciiOriginal = mayuscula.charCodeAt(); //variable que guarda el código ascii de cada caracter
    for (let i = 0; i < mayuscula.length; i++){
        let mayusAsciiOriginal = mayuscula.charCodeAt(i); //Sí da el arreglo del código ascii de cara caracter
        let mayusAsciiTransform = (mayusAsciiOriginal + 65 - 9) %26 + 65; //si no meto el offset, todo bien
        let transformedString = String.fromCharCode(mayusAsciiTransform);
        nuevoCifrado += transformedString; //listo!
    }
    console.log(nuevoCifrado);
}
//NO RESPETA ESPACIOS, ¿CÓMO LE HAGO PARA INVOCAR LA FUNCIÓN'??? :'(



//Invocando función
document.getElementById('toCode').addEventListener('click', getString);


/*
console.log(codify.addEventListener('click', getMsj(getOffset, mensaje)));
codify.addEventListener('click', () =>{
    // Capturas el input
    // Invocas getMsj(input1, input2)
    // let cifrado = getMsj(input1,input2)
//});
*/





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
