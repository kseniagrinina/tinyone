$(document).ready(function () {
    $(".burger-icon").click(function () {
        $(".hamburger-menu").toggleClass("active");
    });
});

$(document).ready(function () {
    $('.header-slider').slick({
        arrows: false,
        dots: true,
        // autoplay: true,

    });
});