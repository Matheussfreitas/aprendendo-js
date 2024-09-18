const input = document.querySelector("input");
const form = document.querySelector("form");

input.addEventListener("input"), () => {
    const value = input.value;

    const regex = /\D+/g;

    // retorna o padrão encontrado na string 
    console.log(value.match(regex));

    // testa se atende o padrão
    const isValid = regex.test(value);
    console.log(isValid);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const regex = /\D+/g;

    // retorna um valor booleano
    if (!regex.test(value)) {
        console.log(value);
    } else {
        alert("Valor inválido, digite corretamente.");
    }

    const value = input.value.replace(regex, "");

    console.log(value);
})