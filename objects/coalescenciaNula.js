/*
    Operador de coalescência nula (??)
    Operador lógico que retorna o seu operando do lado direito quando seu
    operando do lado esquerdo é null ou undefined. Caso contrário, ele
    rerona o seu operando do lado esquerdo.
*/

let abu = null;
console.log(abu ?? "Conteúdo padrão");

const user = {
    name: "Math",
    avatar: undefined
}

console.log(user.avatar ?? "default.png");