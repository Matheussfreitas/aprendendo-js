function soma(a,b) {
    if (a === b) {
        let iguais = a + b;
        alert(`A soma dos números é ${iguais}`);
    } else {
        let diferentes = a * b;
        alert(`O produto dos números é ${diferentes}`);
    }
};

const a = Number(prompt('Informe um número:'));
const b = Number(prompt('Informe um número:'));

let resultado = soma(a,b);