const form = document.querySelector("form");

form.onsubmit = (event) => {
    event.preventDefault();
    console.log("Vc fez submit no forms #1");
};

// utilizando onsubmit é retornado apenas a ultima chamada

form.onsubmit = (event) => {
    event.preventDefault();
    console.log("Vc fez submit no forms #2");
};

form.addEventListener = ("submit", (event) => {
    event.preventDefault();
    console.log("Vc fez submit no forms #3");
});

form.addEventListener = ("submit", (event) => {
    event.preventDefault();
    console.log("Vc fez submit no forms #4");
});