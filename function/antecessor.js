function antesDepois(numero) {
    let antecessor = --numero;
    let sucessor = numero += 2;
    alert(`O antecessor do número é ${antecessor} e seu sucessor é ${sucessor}`);
};

let numero = Number(prompt('Informe um número:'));

let resultado = antesDepois(numero);