// Intl é a API de internacionalização do ECMAScript

// obtém as informações da localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions();
console.log(currentLocale);

// exibe no formato de acordo com a localidade
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()));
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()));

const date = new Date();
// obtém a diferença em minutos do timezone
console.log(date.getTimezoneOffset())
// obtém a diferença em horas do timezone
console.log(date.getTimezoneOffset() / 60)