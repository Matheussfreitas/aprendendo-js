const input = document.querySelector("input");

// keydown - quando uma tecla é pressionada (captura tudo - CTRL, Shift) 

input.addEventListener("keydown", (event) => {
    console.log(event.key);
})

// keypress - quando uma tecla do tipo caractere é pressionada

input.addEventListener("keypress", (event) => {
    console.log(event.key);
})

// change - é acionado quando o conteúdo do input é alterado

input.onchange = () => {
    inputChange;
};

function inputChange() {
    console.log("O input mudou");
};