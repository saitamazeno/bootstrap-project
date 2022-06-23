$(document).ready(function () {
    $("#responsive-menu-bar").click(function () {
        $("#responsive-menu").slideToggle();
        $("#responsive-menu .sub-menu").hide();
        $("#responsive-menu .sub-menu-toggle").removeClass("open");
    });

    function hideResponsiveMenu() {
        $("#responsive-menu").slideUp();
        $("#responsive-menu .sub-menu").slideUp();
        $("#responsive-menu .sub-menu-toggle").removeClass("open");
    }

    $(window).resize(function () {
        hideResponsiveMenu();
    });

    $(window).scroll(function () {
        hideResponsiveMenu();
    });

    $("#responsive-menu .sub-menu-toggle").click(function () {
        $(this).next(".sub-menu").slideToggle();
        $(this).toggleClass("open");
    });

    // ====== Best Seller (owl-carousel) =======//
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            567: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            },
            1400: {
                items: 4
            }
        },
        nav: true,
        navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"]
    })
    
});
