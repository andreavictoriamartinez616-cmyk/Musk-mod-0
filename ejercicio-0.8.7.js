function quickSort(array) {

    if (array.length <= 1) {
        return array;
    }

    const pivote = array[array.length - 1];

    const menores = [];
    const mayores = [];

    for (let i = 0; i < array.length - 1; i++) {

        if (array[i] < pivote) {
            menores.push(array[i]);
        } else {
            mayores.push(array[i]);
        }
    }

    return [
        ...quickSort(menores),
        pivote,
        ...quickSort(mayores)
    ];
}

const numeros = Array.from(
    { length: 100000 },
    () => Math.floor(Math.random() * 1000000)
);

const inicio = performance.now();

quickSort(numeros);

const final = performance.now();

const tiempo = (final - inicio) / 1000;

console.log(
    `El algoritmo quicksort ha tardado ${tiempo.toFixed(2)} segundos en ordenar 100000 elementos.`
);