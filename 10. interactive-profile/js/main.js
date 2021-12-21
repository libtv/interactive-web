$(document).ready(() => {
    let others = $(".others");
    others.on("click", (e) => {
        let idx = $(e.target).index();
        let left = `${25 + 10 * idx}%`;
        $(".card").removeClass("on");
        $(".card")
            .eq(idx)
            .addClass("on")
            .stop()
            .css({ left: `calc(${left})` });
    });
});
