function ordenar(numeros) {
    numeros.sort((a,b) => b - a);
    alert(numeros);
};

let number;
let lista = [];

for (let i = 0; i < 3; i++) {
    number = Number(prompt('Digite um número aleatório:'));
    lista.push(number);
};

let resultado = ordenar(lista);