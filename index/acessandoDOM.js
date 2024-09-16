// visualizar o conteúdo do document
console.log(document);
// visualizar o título da página
console.log(document.title);
// acessar o elemento pelo ID (SELETOR ID)
const id = document.getElementById("");
console.log(id);
// acessar as propriedades do objeto
console.dir(id);
// acessar o elemento pela class (SELETOR class)
const classe = document.getElementsByClassName("");
console.log(classe);
// exibir algum elemento da lista
console.log(classe.item(0));
console.log(classe[1]);
// acessar elemento pelo nome da tag
const tag = document.getElementsByTagName("li");
console.log(tag);
// o query seletor precisa do indicativo 
// retorna o primeiro elemento da lista
const guest = document.querySelector(".class");
// retorna todos os elementos
const guests = document.querySelectorAll("#id");
// faz uma consulta mais especifica com a tag html
const abu = document.querySelector(".class span");
// retorno em forma de texto
console.log(abu.textContent); // retorna conteúdo visível e oculto
console.log(abu.innerHTML); // retorna o HTML como texto
console.log(abu.innerText); // retorna somente o conteúdo visível