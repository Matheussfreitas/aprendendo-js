let text = "JavaScript, Python, Java";

// separa a string
let separate = text.split(",");
console.log(separate);

// uni a string
let joined = separate.join(" -");
console.log(joined);

// obtém a posição da palavra
console.log(text.indexOf("Python")); // se não encontrar retorna -1

// verifica se exist4e a palavra na string
console.log(text.includes("Python"));
console.log(text.includes("C++"));



