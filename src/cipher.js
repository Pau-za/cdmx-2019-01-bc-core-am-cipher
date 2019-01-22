window.cipher = {
  encode: (offset, userStr) => {
    let nuevoCifrado = ""; //variable que va a recoger el resultado de la transformación
    offset = Number(offset); //Si pongo console.log sí limpia el input, y guarda el valor
    for (let i = 0; i < userStr.length; i++) {
      let originalAscii = userStr.charCodeAt(i); //Sí da el arreglo del código ascii de cara caracter
       if (originalAscii >= 65 && originalAscii <= 90) {
        let capitalLetter = (originalAscii - 65 + offset) % 26 + 65; //si no meto el offset, todo bien
        let capitalReturn = String.fromCharCode(capitalLetter); //mayuscula cifrada
        nuevoCifrado += capitalReturn; //listo!
      } else if (originalAscii >= 97 && originalAscii <= 122) {
        let lowerLetter = (originalAscii - 97 + offset) % 26 + 97;
        let lowerReturn = String.fromCharCode(lowerLetter);
        nuevoCifrado += lowerReturn;
      } else { //solo seleccionamos a los caracteres que no son letras (antes de las mayúsculas)
        let characteres = String.fromCharCode(originalAscii); //Obtiene el código ascii 
        nuevoCifrado += characteres; //le sumamos el caracter tal cual está desde el inicio
      }
    }
    return nuevoCifrado;
  },
  decode: (offset, userStr) => {
    let nuevoDescifrado = "";
    for (let i = 0; i < userStr.length; i++) {
      let originalAscii = userStr.charCodeAt(i);
      if (originalAscii >= 65 && originalAscii <= 90) {
        let capitalLetter = (originalAscii + 65 - offset) % 26 + 65;
        let capitalReturn = String.fromCharCode(capitalLetter);
        nuevoDescifrado += capitalReturn;
      } else if (originalAscii >= 97 && originalAscii <= 122) {
        let lowerLetter = (originalAscii - 122 - offset) % 26 + 122;
        let lowerReturn = String.fromCharCode(lowerLetter);
        nuevoDescifrado += lowerReturn;
      } else {
        let characteres = String.fromCharCode(originalAscii); //Obtiene el código ascii 
        nuevoDescifrado += characteres;
      }
    }
    return nuevoDescifrado;
  },
};
