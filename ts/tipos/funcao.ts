// deixar explicito se retorna algo ou não
function saudacao(): void { 
    console.log("Bom dia");
}

saudacao();

// em caso de retorno é opcional declarar o tipo do retorno
function somar(a:number, b: number): number { 
    return a + b;
}
const resultado = somar(3,7);
console.log(resultado);