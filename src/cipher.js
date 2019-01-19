window.cipher = {
  encode: (offset, userStr) => {
    let nuevoCifrado = ""; //variable que va a recoger el resultado de la transformación
    offset = Number(offset); //Si pongo console.log sí limpia el input, y guarda el valor
    let mayuscula = userStr.toUpperCase(); //Sí da el string en mayúsculas
    for (let i = 0; i < mayuscula.length; i++) {
      let mayusAsciiOriginal = mayuscula.charCodeAt(i); //Sí da el arreglo del código ascii de cara caracter
      let mayusAsciiTransform = (mayusAsciiOriginal - 65 + offset) % 26 + 65; //si no meto el offset, todo bien
      let transformedString = String.fromCharCode(mayusAsciiTransform);
      nuevoCifrado += transformedString; //listo!
    }
    return nuevoCifrado;
  },
  decode: (offset, userStr) => {
    let nuevoDescifrado = "";
    let mayusculaDec = userStr.toUpperCase();
    for (let i = 0; i < mayusculaDec.length; i++) {
      let mayusAsciiDec = mayusculaDec.charCodeAt(i);
      let mayusAsciiDecTransform = (mayusAsciiDec + 65 - offset) % 26 + 65;
      let transformedDecString = String.fromCharCode(mayusAsciiDecTransform);
      nuevoDescifrado += transformedDecString;
    }
    return nuevoDescifrado;
  },
};
