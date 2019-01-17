//Aquí voy a crear eventos
//Variables globales
const divIntro = document.getElementById('intro'); //div de introducción
const divExplain = document.getElementById('cifCes'); //div explicación del cifrado César
const divChoose = document.getElementById('choose'); //div para elegir codificar y decodificar
const divCode = document.getElementById('codeStr'); //div Codificar
const divDecode = document.getElementById('decodeStr'); //div Decodificar

//evento del botón para la explicación del Cifrado César
document.getElementById('botonCesar').addEventListener('click', () => {
        divIntro.style.display = 'none';
        divExplain.style.display = 'block';
    })

//evento de botón "estoy lista para iniciar"
document.getElementById('start').addEventListener('click', () => {
        divIntro.style.display = 'none';
        divChoose.style.display = 'block';
    })

//Evento del botón "volver a introducción"
document.getElementById('backIntro').addEventListener('click', () => {
        divExplain.style.display = 'none';
        divIntro.style.display = 'block';
    })

//Evento para codificar
document.getElementById('code').addEventListener('click', () => {
        divCode.style.display = 'block';
        if(divDecode.style.display == 'block'){
            divDecode.style.display = 'none';
        }
    })

//Evento para decodificar
document.getElementById('decode').addEventListener('click', () => {
        divDecode.style.display = 'block';
        if(divCode.style.display == 'block'){ //tengo que checar si funciona en el evento
            divCode.style.display = 'none';
        }
    })

//evento del botón para volver a la Intro
document.getElementById('backToStart').addEventListener('click', pulsarBackButton);
function pulsarBackButton() {
    divChoose.style.display = 'none';
    divCode.style.display = 'none';
    divDecode.style.display = 'none';
    divIntro.style.display = 'block';
}

//Agarrar el offset que introduce usuario
const offsetEncode = () => document.getElementById('toCode').addEventListener('click', () => {
    let offset = document.getElementById('offsetEncode').value;
    offset = Number(offset);
    return offset;
})

//Agarrar el string que introduce usuario
const str = () => document.getElementById('toCode').addEventListener('click', () => {
    let userString =  document.getElementById('toEncode').value; //Hasta aquí sí agarra el string
    return userString;
})

//Llamar a la función
const encodeResult = () => document.getElementById('toCode').addEventListener('click', () => {
    alert(window.cipher.encode(offsetEncode, str));
    alert('tu mensaje codificado es ' + encodeResult());
})

//Meto el resultado en el p con id result
//document.getElementById('result').innerHTML='Tu mensaje cifrado es '+ nuevoCifrado;


//NO RESPETA ESPACIOS, ¿CÓMO LE HAGO PARA INVOCAR LA FUNCIÓN'??? :'(







/*
console.log(codify.addEventListener('click', getMsj(getOffset, mensaje)));
codify.addEventListener('click', () =>{
    // Capturas el input
    // Invocas getMsj(input1, input2)
    // let cifrado = getMsj(input1,input2)
//});
*/




//Comencemos con el código de la función
