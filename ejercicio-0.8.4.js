const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function crearMapa(cadena) {
    const mapa = new Map();

    for (const caracter of cadena.toLowerCase()) {
        if (mapa.has(caracter)) {
            mapa.set(caracter, mapa.get(caracter) + 1);
        } else {
            mapa.set(caracter, 1);
        }
    }

    return mapa;
}

function sonAnagramas(cadena1, cadena2) {
    const mapa1 = crearMapa(cadena1);
    const mapa2 = crearMapa(cadena2);

    if (mapa1.size !== mapa2.size) {
        return false;
    }

    for (const [caracter, cantidad] of mapa1) {
        if (mapa2.get(caracter) !== cantidad) {
            return false;
        }
    }

    return true;
}

rl.question("Introduce una palabra: ", (palabra1) => {

    rl.question("Introduce otra palabra: ", (palabra2) => {

        if (sonAnagramas(palabra1, palabra2)) {
            console.log("Las palabras son anagramas.");
        } else {
            console.log("Las palabras no son anagramas.");
        }

        rl.close();
    });
});