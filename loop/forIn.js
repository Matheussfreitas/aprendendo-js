// for... in executa iterações a partir de um objeto e percorre as propriedades

let person = {
    name: "matheus",
    surname: "gabriel",
    numero: 1
}

for (let property in person){
    // exibe o nome da propriedade
    console.log(property)

    // exibe o conteúdo das propriedades
    console.log(person[property])
}

// percorrendo arrays
let numbers = [1,2,75,20,90]

for (let index in numbers) {
    console.log(numbers)
    console.log(numbers[index])
}