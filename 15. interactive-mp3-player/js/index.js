$(document).ready(() => {
    let contents = $(".content");

    // transform: rotateZ(100deg) translateY(100px);
    contents.each((element) => {
        let rotate = element * 45;
        let translate = 1000;
        $(contents[element]).css({ transform: `rotateZ(${rotate}deg)  translateY(-${translate}px) ` });
        $(contents[element]).removeClass("on");
        if (rotate % 360 == 0) {
            $(contents[element]).find("audio").get(0).play();
            $(contents[element]).addClass("on");
        }
    });

    contents.on("click", () => {
        contents.each((element) => {
            let rotatez = $(contents[element])
                .attr("style")
                .match(/[rotateZ(]+[\d]+/g)[0]
                .split("(")[1];
            let translate = 1000;
            rotatez = Number(rotatez) + 45;

            $(contents[element])
                .stop()
                .css({ transform: `rotateZ(${rotatez}deg)  translateY(-${translate}px) ` });

            $(contents[element]).find("audio").get(0).pause();
            $(contents[element]).removeClass("on");

            if (rotatez % 360 == 0) {
                $(contents[element]).find("audio").get(0).play();
                $(contents[element]).addClass("on");
            }
        });
    });

    $(".content-play-play").on("click", (e) => {
        e.preventDefault();
        console.log("gdgd");
    });
});
