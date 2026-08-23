const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function parentesisBalanceados(texto) {

    const pila = [];

    for (const caracter of texto) {

        if (caracter === "(") {
            pila.push(caracter);
        }

        if (caracter === ")") {

            if (pila.length === 0) {
                return false;
            }

            pila.pop();
        }
    }

    return pila.length === 0;
}

rl.question("Introduce un texto: ", (texto) => {

    if (parentesisBalanceados(texto)) {
        console.log("Están balanceados.");
    } else {
        console.log("No están balanceados.");
    }

    rl.close();
});