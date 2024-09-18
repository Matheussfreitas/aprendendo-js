const guests = document.querySelector("ul");

const newGuest = document.createElement("li");

// adiciona uma classe ao elemento
newGuest.classList.add("guest");

const guestName = document.createElement("span");
const guestLastName = document.createElement("span");
guestName.textContent = "Matheus";

// adiciona após o último filho
newGuest.append(guestName, guestLastName);
console.log(newGuest);

// adiciona antes do primeiro filho
newGuest.prepend(guestName);
