const promessaSimples = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promessa resolvida");
    }, 5000); // tempo necessário até o inicio da execução 
})

const promessaComplexa = new Promise((resolve, reject) => {
    setInterval(() => {
        reject("Deu erro");
    }, 2000); // intervalo de tempo até a próxima execução
})