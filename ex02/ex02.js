const numero = parseInt(2584);

let a = 0;
let b = 1;
let proximo;

while (b < numero) {
    proximo = a + b;
    a = b;
    b = proximo;
}

if (b === numero) {
    console.log(numero + " pertence à sequência de Fibonacci.");
} else {
    console.log(numero + " não pertence à sequência de Fibonacci.");
}
