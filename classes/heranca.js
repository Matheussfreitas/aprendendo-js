class Animal {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    makeNoise(){
        console.log("ASHUA")
    }
}

class Dog extends Animal {
    makeNoise(){
        console.log("AUAUAU")
    }
}

const dog = new Dog("Bob")
console.log(dog.name)
dog.makeNoise()

class Cat extends Animal {
    makeNoise(){
        console.log("MIAUU")
    }
}

const cat = new Cat("Zé")
console.log(cat.name)
cat.makeNoise()