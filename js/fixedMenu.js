(function () {
    var doc = $(document),
        fixed = false,
        anchor = doc.find('.sticky-anchor'),
        content = doc.find('.sticky-content');

    var onScroll = function (){
        var docTop = doc.scrollTop(),
            anchorTop = anchor.offset().top;

        if (docTop > anchorTop) {
            if (!fixed) {
                anchor.height(content.outerHeight());
                content.addClass('fixed');
                fixed = true;
            }
        } else {
            if (fixed) {
                anchor.height(0);
                content.removeClass('fixed');
                fixed = false;
            }
        }
    };
    $(window).on('scroll', onScroll);
})();