'use strict';

// Constructor
var Product = function() {
    var filtersDropTrigger = $('.primera-cita--tienda__filter__drop li');
    
    filtersDropTrigger.on('click', function() {
        $(this).toggleClass('-active');
    });

    //mix match
    var mixMatchLinks = $('.primera-cita--mix-match__list a');
    var mixMatchPanel = $('.primera-cita--mix-match__container--images');

    mixMatchLinks.on('click', function() {
        mixMatchLinks.removeClass('-active');
        $(this).addClass('-active');

        mixMatchPanel.addClass('-open');
    });

};

module.exports = Product;
