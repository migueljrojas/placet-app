// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery = require('jquery');
global._ = require('underscore');
var Header = require('../_modules/header/header');
var Footer = require('../_modules/footer/footer');
var Slider = require('../_modules/slider/slider');
var DataSwitcher = require('../_modules/data-switcher/data-switcher');
var Faqs = require('../_modules/data-switcher/faqs');
var Benefits = require('../_modules/data-switcher/benefits');
var Multirange = require('../_modules/multirange/multirange');
var Price = require('../_modules/multirange/price');
var EgModal = require('../_modules/eg-modal/eg-modal');
var QuantitySelector = require('../_modules/quantity-selector/quantity-selector');
var Product = require('../_modules/product/product');
var VideoOverlay = require('./video-overlay');

$(function() {
    require('../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min');
    require('../../bower_components/slick-carousel/slick/slick');

    new Header();
    new Footer();
    new Slider();
    new DataSwitcher();
    new Multirange();
    new Price();
    new EgModal();
    new Faqs();
    new QuantitySelector();
    new Product();
    new VideoOverlay();
    new Benefits();
});
