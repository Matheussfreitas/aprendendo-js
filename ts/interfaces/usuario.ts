interface Usuario {
    id: number,
    nome: string,
    email: string,
    senha?: string, // se torna uma propriedade opcional
    ativo: boolean
};

let usuario: Usuario = {
    id: 2808,
    nome: "Matheus",
    email: "mgsoutodelira@gmail.com",
    ativo: true
};

console.log(usuario);