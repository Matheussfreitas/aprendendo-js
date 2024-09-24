const pessoa: { nome: string; idade: number } = {
    nome: "Matheus",
    idade: 30
};

pessoa.idade = 31;

console.log(pessoa.nome);
console.log(pessoa.idade);

type Carro = { modelo: string, ano: number};

const carro: Carro = {
    modelo: "320i",
    ano: 2024
};