$(document).ready(() => {
    $(".article").on("mouseenter", (e) => {
        $("#contents").css("-webkit-animation-play-state", "paused");
    });

    $(".article").on("mouseleave", (e) => {
        $("#contents").css("-webkit-animation-play-state", "running");
    });
});
