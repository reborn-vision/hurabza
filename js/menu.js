const $icon = $('.burger-menu');
const $menu = $('.overlay');

$icon.on('click', function() {
    if (!$menu.hasClass('active')) {
        $menu.fadeIn().toggleClass('active');
        var current = $(window).scrollTop();
        $(window).scroll(function() {
            $(window).scrollTop(current);
        });
    } else {
        $menu.fadeOut().removeClass('active');
        $(window).off('scroll');
    }
});

$(".burger-menu").click(function() {
    $(this).toggleClass("menu-on");
});


function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

// var audio = $("#audio")[0];
// $(".text ul li a").mouseenter(function() {
//     audio.play();
// });