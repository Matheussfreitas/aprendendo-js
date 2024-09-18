const input = document.querySelector("#name");
// adiciona uma classe
input.classList.add("input-error");
// remove a classe
input.classList.remove("input-error");
// se não tiver a classe, adiciona. Se tiver, remove
input.classList.toggle("input-error");
// modifica as propriedades css do elemento
const buttom = document.querySelector("button");
buttom.style.backgroundColor = "red";
