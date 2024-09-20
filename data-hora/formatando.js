let date = new Date("2024-08-28T14:05:22")

date.setDate(7)

// formata para exibir o dia com 2 dígitos
let day = date.getDate().toString().padStart(2, "0")

// formata para exibir mês com 2 dígitos
let month = (date.getMonth() + 1).toString().padStart(2, "0")

let year = date.getFullYear()
let hour = date.getHours()
let minutes = date.getMinutes().toString().padStart(2, "0")

console.log(`${day}/${month}/${year} às ${hour}:${minutes}`)

// converte para string
console.log(date.toString())

// retorna somente a data
console.log(date.toDateString())

// retorna somente a hora
console.log(date.toTimeString())

// exibe data e hora no formato local
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

// exibe data e hora no formato escolhido
console.log(date.toLocaleDateString("en"))
console.log(date.toLocaleTimeString("en"))