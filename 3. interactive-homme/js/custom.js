$(document).ready(function () {
    $(".btnMenu").on("click", () => {
        $(".btnMenu").fadeOut();
        $(".nav").addClass("on");
        $(".section").addClass("on");
        $(".section>div").eq(0).removeClass("on");
    });

    $(".nav div p").on("click", (e) => {
        $(".btnMenu").fadeIn();
        $(".nav").removeClass("on");
        $(".section").removeClass("on");

        $(".section>div").eq(0).addClass("on");
    });
});
