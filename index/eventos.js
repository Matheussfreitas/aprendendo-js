window.addEventListener("load", () => {
    console.log("A página foi carregada");
});

addEventListener("click", (event) => {
    event.preventDefault();

    // retorna as informações sobre o evento
    console.log(event);

    // retorna o elemento clicado
    console.log(event.target);
})