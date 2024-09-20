// While - Enquanto
let execute = true;

while (execute) {
    let response = window.prompt("Deseja continuar?");

    if (response === "nao") {
        execute = false;
    };
}

console.log("Segue o baile");

// Do While - repete até que a condição seja verdadeira
// Porém, a instrução será executada ao menos uma vez antes
// da condição ser verificada
let value = 11;

do {
    value++;
    console.log(value);
} while (value < 10);

console.log("Segue o fluxo");