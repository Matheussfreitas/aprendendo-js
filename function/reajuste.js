function reajusteSalario(salario, taxa) { 
    taxa = taxa / 100;
    let reajuste = salario * taxa;
    let salarioFinal = salario + reajuste;
    salarioFinal = salarioFinal.toLocaleString('pt-BR', {stily: 'currency', currency: 'BRL'});
    alert(`Com o reajuste, seu salário é de R$ ${salarioFinal}`);
};

let salario = Number(prompt('Informe seu salário:'));
let taxa = Number(prompt('Informe a taxa de reajuste:'));

let reajuste = reajusteSalario(salario, taxa);

