let animals = []
animals.push("Lion")
animals.push("Shark")
animals.push("Falcon")
let sizeList = animals.length

console.log("The list contain: " + animals)
console.log("The list contain: " + sizeList + " animals")

animals.shift()
console.log(animals)

animals.unshift("Ounce")
console.log(animals)

animals[2] = "Cat"
console.log(animals)

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i])    
}