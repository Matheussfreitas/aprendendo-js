let myArray = ["Texto",
    10,
    true,
    function() {
        console.log("Hello World")
    },
    {
        name: "Matheus",
        numero: 130
    }
]

// texto
console.log(myArray[0]);

// numero
console.log(myArray[1]);

// booleano
console.log(myArray[2]);

// função
myArray[3]();

// objeto
console.log(myArray[4].name, myArray[4].numero);