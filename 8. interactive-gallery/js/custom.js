$(document).ready(() => {
    var numAc = $("article").size();
    var widSec = 200 * numAc;
    var widTotal = widSec + 600;

    $("section").width(widTotal);
    $("body").height(widSec);
    $("html,body").scrollTop(widSec);

    $(window).on("scroll", () => {
        let scrollTop = $(window).scrollTop();
        $("section")
            .stop()
            .animate({ left: -scrollTop * 1.3 }, 3000);
    });

    $("article").on("click", (e) => {
        var index = $(e.target).parent().index();
        $("article").map((idx) => {
            $("article").eq(idx).removeClass("on");
        });
        $("article").eq(index).addClass("on");
    });
});
