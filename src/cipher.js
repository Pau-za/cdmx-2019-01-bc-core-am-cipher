
window.cipher = {
  encode: (offset, userStr) => { 
    let nuevoCifrado = ""; //variable que va a recoger el resultado de la transformación
    //offset = document.getElementById('offsetNumb').value;
    offset = Number(offset); //Si pongo console.log sí limpia el input, y guarda el valor
    //userStr = document.getElementById('toEncode').value; //Hasta aquí sí agarra el string
    let mayuscula = userStr.toUpperCase(); //Sí da el string en mayúsculas
    for (let i = 0; i < mayuscula.length; i++){
        let mayusAsciiOriginal = mayuscula.charCodeAt(i); //Sí da el arreglo del código ascii de cara caracter
        let mayusAsciiTransform = (mayusAsciiOriginal - 65 + offset) %26 + 65; //si no meto el offset, todo bien
        let transformedString = String.fromCharCode(mayusAsciiTransform);
        nuevoCifrado += transformedString; //listo!
    }
    return nuevoCifrado;
  },
  decode: () => {
  },
};

/*let asciiOriginal = mayuscula.charCodeAt(); //variable que guarda el código ascii de cada caracter
    let clearInputNumber = document.getElementsByClassName('inputCode').value=''; //limpia input
    */