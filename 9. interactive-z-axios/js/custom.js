$(document).ready(() => {
    $(window).on("scroll", () => {
        var scroll = $("section").offset().top;

        $("section > article")
            .eq(0)
            .css({ transform: `translateZ(${0 + scroll}px)` });

        $("section > article")
            .eq(1)
            .css({ transform: `translateZ(${-5000 + scroll}px)` });

        $("section > article")
            .eq(2)
            .css({ transform: `translateZ(${-10000 + scroll}px)` });

        $("section > article")
            .eq(3)
            .css({ transform: `translateZ(${-15000 + scroll}px)` });

        $("section > article")
            .eq(4)
            .css({ transform: `translateZ(${-20000 + scroll}px)` });

        $("article").removeClass("on");
        $("ul > li").removeClass("on");
        if (scroll >= 0 && scroll < 5000) {
            $("article").eq(0).addClass("on");
            $("ul > li").eq(0).addClass("on");
        } else if (scroll >= 5000 && scroll < 10000) {
            $("article").eq(1).addClass("on");
            $("ul > li").eq(1).addClass("on");
        } else if (scroll >= 10000 && scroll < 15000) {
            $("article").eq(2).addClass("on");
            $("ul > li").eq(2).addClass("on");
        } else if (scroll >= 15000 && scroll < 20000) {
            $("article").eq(3).addClass("on");
            $("ul > li").eq(3).addClass("on");
        } else {
            $("article").eq(4).addClass("on");
            $("ul > li").eq(4).addClass("on");
        }
    });

    $("#nav li").on("click", (e) => {
        $(e.target).parent().children("li").removeClass("on");
        $(e.target).addClass("on");

        let scrollTop = $(e.target).index() * 5000;
        $("html, body").stop().animate({ scrollTop: scrollTop }, 2000);
    });
});
