class User {
    static showMessage(){
        console.log("Está é uma mensagem")
    }
}

// metodo estaticos podem ser usados sem a instancia da classe
// mas não podem utilizar propriedades do construtor
User.showMessage()