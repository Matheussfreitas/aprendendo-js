/*
    Optional Chaining - encadeamento opcional 
    Se a propriedade ou função chamada é nullish (null ou undefined),
    a expressão retorna undefined em vez de gerar um erro.

    Útil ao explorar o conteúdo de um objeto quando
    não existe garantia da existência de determidas 
    propriedades obrigatórias.
*/

const user = {
    name: "Matheus",
    email: "mgsoutodelira@gmail.com",
    message: function() {
        console.log(`Olá ${this.name}`)
    }
};

console.log(user?.adress); // retorna undefined
