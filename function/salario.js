let salarioMinimo = 1290.00;
let salarioUser = Number(prompt('Informe seu salário:'));
let resultado;

function calcSalario(a,b) {
    resultado = a / b;
    alert(`O seu salário é equivalente a ${resultado.toFixed(1)} salário(s) mínimo(s)`)
};

resultado = calcSalario(salarioUser, salarioMinimo);