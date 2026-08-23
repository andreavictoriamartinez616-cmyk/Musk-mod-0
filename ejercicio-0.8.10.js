const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function secuenciaValida(secuencia) {

    const pila = [];

    const parejas = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"]
    ]);

    for (const caracter of secuencia) {

        if (
            caracter === "(" ||
            caracter === "[" ||
            caracter === "{"
        ) {
            pila.push(caracter);
        }

        else if (
            caracter === ")" ||
            caracter === "]" ||
            caracter === "}"
        ) {

            if (pila.length === 0) {
                return false;
            }

            const ultimo = pila.pop();

            if (ultimo !== parejas.get(caracter)) {
                return false;
            }
        }
    }

    return pila.length === 0;
}

rl.question("Introduce una secuencia: ", (secuencia) => {

    if (secuenciaValida(secuencia)) {
        console.log("Secuencia correcta.");
    } else {
        console.log("Secuencia incorrecta.");
    }

    rl.close();
});