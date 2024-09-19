let animals = [] 

// adiciona um item no final do array
animals.push("Lion")
animals.push("Shark")
animals.push("Falcon")
let sizeList = animals.length

console.log("The list contain: " + animals)
console.log("The list contain: " + sizeList + " animals")

// remove do inicio do array
animals.shift()
console.log(animals)

// remove do final do array
animals.pop()
console.log(animals)


// adiciona um item no começo do array
animals.unshift("Ounce")
console.log(animals)

animals[2] = "Cat"
console.log(animals)

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i])    
}