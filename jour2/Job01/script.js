const article = document.createElement("article");
article.id = "citation";
article.textContent = "La vie a beaucoup plus d'imagination que nous";

document.body.appendChild(article);

const button = document.createElement("button");
button.id = "button";
button.onclick = function () {
    console.log(document.getElementById("citation").textContent)
}

document.body.appendChild(button);