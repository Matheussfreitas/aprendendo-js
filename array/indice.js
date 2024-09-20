let cars = ["BMW", "Fiat", "Ford", "Jeep"];

// encontra e retorna o indice do elemento
let position = cars.indexOf("Fiat");
console.log(position);

// remove um item pela posição do indice (1 é o número de elementos para remover)
cars.splice(position, 1);
//cars.splice(0, 2);
console.log(cars);
