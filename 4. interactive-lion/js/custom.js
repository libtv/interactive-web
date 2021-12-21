$(document).ready(function () {
    let article = $(".article");

    article.each((element) => {
        $(article[element]).on("mouseenter", () => {
            $(article[element]).stop().animate({ width: "35%" });
            $(article[element]).find("video").stop().animate({ opacity: "1.0" });
            $(article[element]).find("h2").addClass("on");
            $(article[element]).find(".article-contents").stop().animate({ opacity: "0.8", right: "10px" }, 1200);
        });
        $(article[element]).on("mouseleave", () => {
            $(article[element]).stop().animate({ width: "12%" });
            $(article[element]).find("video").stop().animate({ opacity: "0" });
            $(article[element]).find("h2").removeClass("on");
            $(article[element]).find(".article-contents").stop().animate({ opacity: "0", right: "-330px" }, 1200);
        });
    });
});
