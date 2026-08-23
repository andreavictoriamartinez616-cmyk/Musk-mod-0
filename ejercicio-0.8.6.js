function bubbleSort(array) {

    const copia = [...array];

    for (let i = 0; i < copia.length - 1; i++) {

        for (let j = 0; j < copia.length - 1 - i; j++) {

            if (copia[j] > copia[j + 1]) {

                const temporal = copia[j];

                copia[j] = copia[j + 1];

                copia[j + 1] = temporal;
            }
        }
    }

    return copia;
}

const numeros = Array.from(
    { length: 100000 },
    () => Math.floor(Math.random() * 1000000)
);

const inicio = performance.now();

bubbleSort(numeros);

const final = performance.now();

const tiempo = (final - inicio) / 1000;

console.log(
    `El algoritmo bubble sort ha tardado ${tiempo.toFixed(2)} segundos en ordenar 100000 elementos.`
);