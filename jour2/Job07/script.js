let darkmode = false;

button = document.getElementById("toggle-theme")

function changeTheme() {
    if (darkmode) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        button.style.backgroundColor = "black";
        button.style.borderColor = "white";
        button.style.color = "white";

    }
    else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        button.style.backgroundColor = "white";
        button.style.borderColor = "black";
        button.style.color = "black";
    }
}

changeTheme(); //init


button.onclick = () => {
    darkmode = !darkmode;
    changeTheme();
}