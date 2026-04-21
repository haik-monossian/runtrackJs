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

        else if (key.match(code[3]) && counter == 3) {
            counter += 1;
            console.log("lettre 4");
        }

        else if (key.match(code[2]) && counter == 2) {
            counter += 1;
            console.log("lettre 3");
        }

        else if (key.match(code[1]) && counter == 1) {
            counter += 1;
            console.log("lettre 2");
        }

        else if (key.match(code[0]) && counter == 0) {
            counter += 1;
            console.log("lettre 1");
        }

        else {
            counter = 0;
            console.log("reessaye");
        }

        console.log(counter)
    }
});