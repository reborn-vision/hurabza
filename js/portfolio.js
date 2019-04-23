jQuery(window).on('load', function() {

    $('.container').masonry({
        columnWidth: '.grid-sizer',
        gutter: 15,
        itemSelector: '.item',
        percentPosition: 'true',
        fitWidth: true,
    });

});