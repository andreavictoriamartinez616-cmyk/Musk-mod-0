function diferenciaArrays(array1, array2) {
    const resultado = [];

    for (const numero of array1) {
        if (!array2.includes(numero)) {
            resultado.push(numero);
        }
    }

    return resultado;
}

// Creamos dos arrays aleatorios
const array1 = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 20)
);

const array2 = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 20)
);

console.log("Array 1:", array1);
console.log("Array 2:", array2);

const diferencia = diferenciaArrays(array1, array2);

console.log("La diferencia de ambos conjuntos es:", diferencia);