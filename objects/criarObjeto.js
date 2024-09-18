/*
    Objeto
    - é uma coleção de dados e/ou funcionalidades
    - podem ter propriedades e métodos
*/

// criando um objeto vazio
const objt = {};

// criando um objeto com propriedades e métodos
const user = {
    email: "matheus@bolt360.com.br",
    age: 22,
    name: {
        first_name: "Matheus", // utilizar snake case para nomear propriedades
        last_name: "Freitas" // objetos aninhados (um dentro do outro)
    }, 
    adress: {
        street: "Rua X",
        number: 130,
        city: "Natal"
    },
    message: () => {
        console.log("Olá " + first_name)
    }
};

// acessando propriedades e métodos usando a notação de ponto
console.log(user.email);
console.log(user.name.first_name);

// executa o método do objeto
user.message();