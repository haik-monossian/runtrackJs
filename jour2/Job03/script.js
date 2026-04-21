const compteur = document.createElement("p");
var nombre = 0;
compteur.id = "compteur";
compteur.textContent = nombre;


function addOne() {
    nombre += 1;
    compteur.textContent = nombre;
};

const button = document.createElement("button");
button.id = "button";
button.textContent = "Clique moi !";

button.onclick = function () {
    addOne();
};


document.body.appendChild(compteur);
document.body.appendChild(button);