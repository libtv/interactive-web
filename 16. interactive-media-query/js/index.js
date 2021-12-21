const grid = new Isotope("#contents-wrap", {
    itemSeletor: ".content",
    columnWidth: ".content",
    transitionDuration: "0.5s",
});

$(document).ready(() => {
    navClick();

    let content = $(".content");

    visibleFilter(2);
});

function navClick() {
    let nav = $("#contents-nav li");

    nav.each((index, element) => {
        $(nav[index]).on("click", () => {
            $(nav).removeClass("on");
            $(nav[index]).addClass("on");

            visibleFilter(index);
        });
    });
}

function visibleFilter(idxCase) {
    let content = $(".content");

    content.each((index, element) => {
        if (idxCase === 0) {
            if (index % 2 == 0) {
                $(content[index]).addClass("on");
            } else {
                $(content[index]).removeClass("on");
            }
        } else if (idxCase === 1) {
            if (index % 2 == 1) {
                $(content[index]).addClass("on");
            } else {
                $(content[index]).removeClass("on");
            }
        } else {
            $(content[index]).addClass("on");
        }

        grid.arrange({
            filter: ".on",
        });
    });
}
