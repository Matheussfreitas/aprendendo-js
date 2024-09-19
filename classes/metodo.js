class User {
    constructor(name, email){
        this.name = name
        this.email = email
    }

    sendEmail(){
        console.log(`Email enviado para ${this.name} no endereço ${this.email}`)
    }
}

const user = new User("Matheus", "mgsoutodelira@gmail.com")

user.sendEmail()