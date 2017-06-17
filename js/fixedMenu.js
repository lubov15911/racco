(function () {
    // Pin menu to top of page
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

    // Manage arrow of chosen sections
    $('input').on('click', function (e) {
        var input = e.target;
        var label = $('label.toggle-label').filter(function () {
            return $(this)[0].htmlFor === input.id;
        });
        if (input.checked) {
            label.addClass('selected-section');
        } else {
            label.removeClass('selected-section');
        }
    });
})();