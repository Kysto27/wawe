$(function () {

    $('.blog__gallery-inner').slick({
        arrows: false,
        dots: true,
    });

    $('.menu__btn').on('click', function () {
        $('.header__top-inner').toggleClass('header__top-inner--active');
    });
    var mixer = mixitup('.presentation__gallery');
});