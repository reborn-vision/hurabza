const $icon = $('.burger-menu');
const $menu = $('.overlay');

$icon.on('click', function () {
  if (!$menu.hasClass('active')) {
    $menu.fadeIn().toggleClass('active');
  } else {
    $menu.fadeOut().removeClass('active');
  }
});

$(".burger-menu").click(function () {
    $(this).toggleClass("menu-on");
});