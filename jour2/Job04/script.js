const text = document.createElement("textarea");
text.id = "keylogger";
document.body.appendChild(text);

window.addEventListener("keydown", (e) => {
    const key = e.key;

    if (key.match(/^[a-z]$/i)) {
        e.preventDefault();

        if (document.activeElement === text) {
            text.value += key + key;
        } else {
            text.value += key;
        }
    }
});
