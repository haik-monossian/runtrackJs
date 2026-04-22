$("#btn-1").click(() => { console.log("toggle", toggle); toggleText() });

var toggle = true;

function toggleText() {

    if (toggle) {
        $("body").append("<p> Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie </p>");
    }
    else {
        $("p").remove();
    }
    toggle = !toggle;
}

$("#btn-2").click(() => { console.log("toggle2", toggle2); toggleHtml() });

var toggle2 = true;
function toggleHtml() {

    if (toggle2) {
        $("body").css("opacity", "0")
    }
    else {
        $("body").css("opacity", "1")
    }
    toggle2 = !toggle2;
}