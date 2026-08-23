const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function palabrasRepetidas(texto) {
    const palabras = texto.toLowerCase().split(/\s+/);
    const contador = new Map();

    for (const palabra of palabras) {
        const limpia = palabra.replace(/[.,!?¿¡]/g, "");

        if (contador.has(limpia)) {
            contador.set(limpia, contador.get(limpia) + 1);
        } else {
            contador.set(limpia, 1);
        }
    }

    const repetidas = [];

    for (const [palabra, cantidad] of contador) {
        if (cantidad > 1) {
            repetidas.push(palabra);
        }
    }

    return repetidas;
}

rl.question("Introduce un texto: ", (texto) => {
    const resultado = palabrasRepetidas(texto);

    console.log(
        "Se repiten las siguientes palabras:",
        resultado.join(", ")
    );

    rl.close();
});