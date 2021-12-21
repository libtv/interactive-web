let timer = setInterval(() => {
    let now = new Date();

    let addPadding = (number) => {
        let str = String(number);
        if (str.length === 1) {
            str = "0" + str;
        }
        return str;
    };

    let hour = addPadding(now.getHours());
    let minute = addPadding(now.getMinutes());
    let second = addPadding(now.getSeconds());

    let clock = $("#wrap > #contents > .img > p");

    clock.children("span").eq(0).text(hour);
    clock.children("span").eq(1).text(minute);
    clock.children("span").eq(2).text(second);
}, 1000);

$(document).ready(() => {
    let state = $("#wrap");
    let clickMoment = $("#footer > ul");

    clickMoment.on("click", (e) => {
        let result = $(e.target).text();
        state.removeClass();
        state.addClass(result);
    });

    let now = new Date();
    let hour = now.getHours();

    if (Number(hour) >= 12 && Number(hour) < 6) {
        state.removeClass();
        state.addClass("morning");
    } else if (Number(hour) >= 6 && Number(hour) < 12) {
        state.removeClass();
        state.addClass("afternoon");
    } else if (Number(hour) >= 12 && Number(hour) < 18) {
        state.removeClass();
        state.addClass("evening");
    } else {
        state.removeClass();
        state.addClass("night");
    }
});
