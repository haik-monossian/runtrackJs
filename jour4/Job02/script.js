function jsonValueKey(jsonString, key) {
    const obj = JSON.parse(jsonString);
    return obj[key];
}

const jsonString = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

const result = jsonValueKey(jsonString, "city");

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    if (display) {
        display.textContent = `Valeur : ${result}`;
    }
});
