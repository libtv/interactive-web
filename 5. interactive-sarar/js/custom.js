$(document).ready(function () {
    let imgs = "";

    for (let i = 0; i < 200; i++) {
        imgs += `<img src="./img/pic${i}.jpg" /> `;
    }

    let section = $(".section-img");

    section.each((element) => {
        section[element].innerHTML = imgs;
    });

    section.on("mousemove", (e) => {
        let posX = e.pageX;
        let wid = $(window).width();

        let showNumber = Math.floor((posX / wid) * 200);

        $(".section-img > img").fadeOut();
        $(".section-img > img").eq(showNumber).fadeIn();
        console.log(showNumber);
    });
});
