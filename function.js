function triangulo(altura, base) {
    return (altura * base) / 2
}

function parOuImpar(numero) {
    if (numero % 2 == 0) {
        return "é par"
    } else {
        return "é impar"
    }
}

function converter(medida) {
    return medida * 2,54
}

function IMC(peso, altura) {
    return peso / ((altura / 100) ** 2)
}

function lower(palavra) {
    return palavra.toLowerCase()
}

let area = triangulo(3, 5)
console.log(`A área do triângulo é de ${area}m²`)

let numero = parOuImpar(3)
console.log(`O número ${numero}`)

let centimetros = converter(32)
console.log(`O valor convertido é de ${centimetros}cm`)

let resultadoIMC = IMC(82,179)
console.log(`O seu IMC é de ${resultadoIMC.toFixed(2)}`)

let palavra = lower("ABC")
console.log(palavra)