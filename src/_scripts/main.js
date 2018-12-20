// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery = require('jquery');
global._ = require('underscore');
var Header = require('../_modules/header/header');
var Slider = require('../_modules/slider/slider');
var DataSwitcher = require('../_modules/data-switcher/data-switcher');
var Faqs = require('../_modules/data-switcher/faqs');
var Multirange = require('../_modules/multirange/multirange');
var Price = require('../_modules/multirange/price');
var EgModal = require('../_modules/eg-modal/eg-modal');

$(function() {
    require('../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min');
    require('../../bower_components/slick-carousel/slick/slick');

    new Header();
    new Slider();
    new DataSwitcher();
    new Multirange();
    new Price();
    new EgModal();
    new Faqs();
});
