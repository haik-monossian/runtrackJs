$("#button").click(() => {
    if (checkWin) {
        $(".Win").remove();
    }

    randomize()
});


function randomize() {
    let imgList = [1, 2, 3, 4, 5, 6]
    let openCases = [0, 1, 2, 3, 4, 5]
    $(".case img").remove();

    for (i = 0; i < 6; i++) {
        const randomImgIndex = Math.floor(Math.random() * imgList.length);
        const randomCaseIndex = Math.floor(Math.random() * openCases.length);

        $(".case").eq(openCases[randomCaseIndex]).append(`<img src="public/arc${imgList[randomImgIndex]}.png" alt="image">`);

        console.log(imgList[randomImgIndex], openCases[randomCaseIndex]);
        console.log(randomCaseIndex, randomImgIndex);

        imgList.splice(randomImgIndex, 1);
        openCases.splice(randomCaseIndex, 1);

    }
}


let firstCase = true;

$(".case").click(function () {
    if (!checkWin()) {
        if (firstCase) {
            $(this).addClass("first");
            firstCase = false;
            console.log("1")
        }
        else {
            $(this).addClass("second");
            firstCase = true;
            console.log("2")

            const img1 = $(".first img");
            const img2 = $(".second img");

            const clone1 = img1.clone();
            const clone2 = img2.clone();

            $(".first img").replaceWith(clone2);
            $(".second img").replaceWith(clone1);

            $(".case").removeClass("first second");
            if (checkWin()) {
                console.log("win")
                $("body").prepend("<p class='Win' > Tu as gagné !</p>");
            }
        }
    }
});

function checkWin() {
    for (i = 0; i < 6; i++) {
        let src = $(".case").eq(i).find("img").attr("src");

        if (!(src.includes(`public/arc${i + 1}.png`))) {
            return false;
        }
    }
    return true;
};