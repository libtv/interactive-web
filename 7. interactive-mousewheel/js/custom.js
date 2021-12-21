$(document).ready(() => {
    var height = $(window).height();
    $("#wrap .contents").height(height);

    $(window).on("resize", () => {
        var height = $(window).height();
        $("#wrap .contents").height(height);
    });

    var contents = $("#wrap .contents");

    $(contents).on("mousemove", (e) => {
        let x = e.pageX / 30 - 25;
        let y = e.pageY / 30 - 25;

        $(contents)
            .children("img")
            .each((idx, element) => {
                $(element).css({ right: x });
            });
    });

    var li = $("#nav li");

    li.on("click", (e) => {
        var heightsize = height * $(e.target).index();
        $("html,body").stop().animate({ scrollTop: heightsize }, 1400, "easeOutBounce");
    });

    $(contents).on("mousewheel", (e, delta) => {
        if (delta > 0) {
            var target = $(e.target).parent().index() - 1;
            var heightsize = $(contents).eq(target).offset().top;

            $("html,body").stop().animate({ scrollTop: heightsize }, 1400, "easeOutBounce");
        } else {
            var target = $(e.target).parent().index() + 1;
            var heightsize = $(contents).eq(target).offset().top;

            $("html,body").stop().animate({ scrollTop: heightsize }, 1400, "easeOutBounce");
        }
    });
});
