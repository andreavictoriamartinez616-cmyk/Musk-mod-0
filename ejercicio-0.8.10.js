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
        } else if (
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

function preguntarSecuencia() {
    rl.question(
        "Introduce una secuencia (o escribe 'salir' para terminar): ",
        (entrada) => {

            if (entrada.toLowerCase() === "salir") {
                console.log("Programa terminado. ¡Hasta luego!");
                rl.close();
                return;
            }

            const secuencia = entrada.replace(/\s/g, "");

            if (secuenciaValida(secuencia)) {
                console.log("Secuencia correcta.");
            } else {
                console.log("Secuencia incorrecta.");
            }

            console.log("");
            preguntarSecuencia();
        }
    );
}

console.log("=== COMPROBADOR DE SECUENCIAS ===");
console.log(
    "Comprueba si los paréntesis, corchetes y llaves están correctamente cerrados."
);
console.log("");

preguntarSecuencia();