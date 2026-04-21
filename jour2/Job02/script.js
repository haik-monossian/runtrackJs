const article = document.createElement("article");
article.id = "citation";
article.textContent = "L'important n'est pas la chute, mais l'aterrissage";


function showHide(element, id) {
    if (document.getElementById(id)) {
        document.body.removeChild(element)
    }
    else {
        document.body.appendChild(element);
    }
};


const button = document.createElement("button");
button.id = "button";
button.textContent = "Clique moi !";
button.onclick = function () {
    showHide(article, "citation")
};



document.body.appendChild(button);