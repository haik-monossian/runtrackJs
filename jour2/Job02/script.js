const article = document.createElement("article");
article.id = "citation";
article.textContent = "L'important n'est pas la chute, mais l'aterrissage";

const button = document.createElement("button");
button.id = "button";
button.textContent = "Clique moi !"
button.onclick = function () {
    if (document.getElementById("citation")) {
        document.body.removeChild(article)

    }
    else {
        document.body.appendChild(article);

    }

}

document.body.appendChild(button);