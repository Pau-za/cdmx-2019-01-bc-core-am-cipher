//crear variables que vamos a utilizar

let message = document.getElementById('mensajeInput').value;

//evento de botón "codificar"

const pulsarCode = () => {
    console.log(message);
};
document.getElementById('mensaje').addEventListener('click', pulsarCode);

