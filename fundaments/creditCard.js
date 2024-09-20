const creditCard = "1234123412340857";

const lastDigits = creditCard.slice(-4);
console.log(lastDigits);

// o padStart preenche a string do início
const maskNumber = lastDigits.padStart(creditCard.length, "*");
console.log(maskNumber);

// o padEnd preenche a string no final
const number = "123";
console.log(number.padEnd(10, "*"));