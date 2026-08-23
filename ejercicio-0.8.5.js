const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function invertirPalabra(palabra) {
    const pila = [];

    for (const caracter of palabra) {
        pila.push(caracter);
    }

    let resultado = "";

    while (pila.length > 0) {
        resultado += pila.pop();
    }

    return resultado;
}

rl.question("Introduce una palabra: ", (palabra) => {

    const invertida = invertirPalabra(palabra);

    console.log(`La palabra invertida es "${invertida}".`);

    rl.close();
});