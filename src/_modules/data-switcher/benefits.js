'use strict';

var Faqs = function() {
    var targets = $('[data-benefit]');
    var contents = $('[data-cover]');
    var close = $('[data-benefit-close]');

    // if (targets.length > 0 && targets.length === contents.length) {
    if (targets.length > 0) {
        targets.on('click', function() {
            var $this = $(this);
            var targettedContent = $this.data('benefit');

            targets.removeClass('-active');
            contents.removeClass('-active');

            $this.addClass('-active');
            contents.filter(function() {
                return $(this).data('cover') === targettedContent;
            }).addClass('-active');
        });

        close.on('click', function() {
            targets.removeClass('-active');
            contents.removeClass('-active');
        });
    }
}

module.exports = Faqs;
