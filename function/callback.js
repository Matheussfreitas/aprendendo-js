let interval = setInterval(function(){
    for (let i = 0; i < 3; i++) {
        console.log('Testando setInterval ' + i); 
    }
}, 2000); // intervalo de tempo que é executada a função

setTimeout(function(){
    console.log('Não precisa mais repetir');
    clearInterval(interval); // interrompe o loop de repetição
}, 6000);

let i = 0;

let timer = setTimeout(function(){
    i = 1;
    console.log('Testando setTimeout ' + i); 
}, 3000); // tempo necessário para executar a função

if (i > 0) {
    clearTimeout(timer); // interrompe o fluxo antes de acontecer
    console.log('O i passou de 0');
};

