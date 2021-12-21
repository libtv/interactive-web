$(document).ready(() => {
    let section = $(".section");

    section.each((element) => {
        $(section[element]).on("mouseenter", (e) => {
            let lefts = element == 0 ? 10 : element == 1 ? 33 : element == 2 ? 54 : 75;
            $(section[element]).stop().animate({ width: "30%", opacity: "1.0" });
            $(".section-wrap")
                .stop()
                .animate({ left: `${lefts}%`, opacity: "1.0" });

            $(section[element]).find("video").get(0).play();
        });

        $(section[element]).on("mouseleave", (e) => {
            $(section[element]).stop().animate({ width: "23%", opacity: "0.3" });
            $(".section-wrap").stop().animate({ left: `-100%`, opacity: "0" });
            $(section[element]).find("video").get(0).pause();
        });

        $(section[element]).on("click", (e) => {
            $(".full-wrap").stop().addClass("on");
            let videoSource = $(section[element]).find("video").attr("src");
            $(".full-wrap").find("video").get(0).src = videoSource;
            $(".full-wrap").find("video").get(0).play();
        });

        $(".full-wrap")
            .find("h2")
            .on("click", (e) => {
                $(".full-wrap").removeClass("on");
            });
    });
});
