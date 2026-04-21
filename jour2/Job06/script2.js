const body = document.querySelector("body");

body.style.backgroundColor = "rgba(255, 255, 255, 1)";

const code = ["c", "h", "e", "a", "t"]

let finded = false;
let counter = 0;


window.addEventListener("keydown", (e) => {
    if (!finded) {
        const key = e.key;

        if (key.match(code[4]) && counter == 4) {
            body.style.backgroundColor = "rgba(16, 116, 204, 1)";
            finded = true;
            console.log("trouvé");
        }

        else if (key.match(code[counter])) {
            counter += 1;
            console.log(`lettre ${counter}`);
        }

        else {
            counter = 0;
            console.log("reessaye");
        }

        console.log(counter)
    }
});