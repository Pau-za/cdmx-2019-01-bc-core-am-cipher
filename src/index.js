//Aquí voy a crear eventos
//Variables globales
const divIntro = document.getElementById('intro'); //div de inicio
const divBasicInfoOlsw = document.getElementById('basicExpl'); //div de explicación Olsw, dentro está el CifCes
const divExplain = document.getElementById('cifCes'); //div del cifrado César
const divCode = document.getElementById('codeStr'); //div Codificar
const divDecode = document.getElementById('decodeStr'); //div Decodificar
const divResultMessage = document.getElementById('resultMessage'); //div result que contiene al resultado cifrado 
const divResult = document.getElementById('result'); //div resultado cifrado o descifrado
const divClear = document.getElementById('clear'); //div para limpiar formularios

//evento que abre explicación de app
document.getElementById('introButton').addEventListener('click', () => {
  divIntro.style.display = 'none';
  divBasicInfoOlsw.style.display = 'block';
})

//evento del botón de explicación del Cifrado César
document.getElementById('botonCesar').addEventListener('click', () => {
  divBasicInfoOlsw.style.display = 'none';
  divExplain.style.display = 'block';
})

//evento de botón ir a inicio desde cifrado cesar
document.getElementById('goStart').addEventListener('click', () => {
  divExplain.style.display = 'none';
  divIntro.style.display = 'block';
})

//Evento del botón "volver a información"
document.getElementById('backInformation').addEventListener('click', () => {
  divExplain.style.display = 'none';
  divBasicInfoOlsw.style.display = 'block';
})

//Evento para volver a inicio desde explicación de olsw
document.getElementById('goBack').addEventListener('click', () => {
  divBasicInfoOlsw.style.display = 'none';
  divIntro.style.display = 'block';
})

//Evento para codificar
document.getElementById('code').addEventListener('click', () => {
  divResult.style.display = 'none';
  divResultMessage.style.display = 'none';
  if (divDecode.style.display == 'block') {
    divDecode.style.display = 'none';
  }
  divCode.style.display = 'block';
  divClear.style.display = 'block';
})

//Evento para decodificar
document.getElementById('decode').addEventListener('click', () => {
  divResult.style.display = 'none';
  if (divCode.style.display == 'block') { //tengo que checar si funciona en el evento
    divCode.style.display = 'none';
  } else if (divResultMessage.style.display == 'block') {
    divResultMessage.style.display = 'none';
  }
  divDecode.style.display = 'block';
  divClear.style.display = 'block';
})

//Agarrar el offset que introduce usuario
document.getElementById('toCode').addEventListener('click', () => {
  divResult.style.display = 'block';
  divResultMessage.style.display = 'block';
  let offset = document.getElementById('offsetEncode').value;
  offset = Number(offset);
  let userString = document.getElementById('inputOffset').value;
  let result = window.cipher.encode(offset, userString); //usamos dotnotation para llamar a la función porque es un key del objeto cipher 
  return document.getElementById('result').innerHTML = 'Tu mensaje cifrado es "' + result + '", con un desplazamiento de ' + offset + ' lugares.';
})

// invocando a la función decode con evento en botón to decode
document.getElementById('toDecode').addEventListener('click', () => {
  divResult.style.display = 'block';
  divResultMessage.style.display = 'none';
  let offset = document.getElementById('offsetDecode').value;
  offset = Number(offset);
  let userString = document.getElementById('decodeText').value;
  let result = window.cipher.decode(offset, userString);
  return document.getElementById('result').innerHTML = 'Tu mensaje descifrado es: "' + result + '", con un desplazamiento de ' + offset + ' lugares.';
})

//Botón para limpiar formulario de Codificar
document.getElementById('clearCode').addEventListener('click', () => {
  location.reload();
})
