const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function frecuenciaCaracteres(cadena) {
    const frecuencias = new Map();

    for (const caracter of cadena.toLowerCase()) {
        if (frecuencias.has(caracter)) {
            frecuencias.set(
                caracter,
                frecuencias.get(caracter) + 1
            );
        } else {
            frecuencias.set(caracter, 1);
        }
    }

    return frecuencias;
}

rl.question("Introduce un texto: ", (texto) => {

    const resultado = frecuenciaCaracteres(texto);

    console.log("Mapa de frecuencias:");
    console.log(resultado);

    rl.close();
});