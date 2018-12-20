'use strict';

var Faqs = function() {
    var targets = $('[data-question]');
    var contents = $('[data-answer]');

    function init() {
        targets.first().addClass('-active');
        contents.first().addClass('-active');
    }

    // if (targets.length > 0 && targets.length === contents.length) {
    if (targets.length > 0) {
        targets.on('click', function() {
            var $this = $(this);
            var targettedContent = $this.data('question');

            targets.removeClass('-active');
            contents.removeClass('-active');

            $this.addClass('-active');
            contents.filter(function() {
                return $(this).data('answer') === targettedContent;
            }).addClass('-active');
        });

        init();
    }
}

module.exports = Faqs;
