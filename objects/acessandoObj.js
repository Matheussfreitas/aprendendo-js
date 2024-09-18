const user = {
    name: "Matheus",
    email: "mgsoutodelira@gmail.com",
    message: function() {
        console.log(`Olá ${this.name}`) // funciona apenas com a notação function
    }
};

user.message();

// atualiza a propriedade do objeto
user.name = "Gabriel";