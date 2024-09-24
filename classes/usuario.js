class Usuario {
    constructor(id, nome, email, ativo, senha) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.ativo = ativo;
        this.senha = senha;
    }
};

const usuarioLogado = new Usuario(1, "Matheus", "matheus@bolt", true);
console.log(usuarioLogado);