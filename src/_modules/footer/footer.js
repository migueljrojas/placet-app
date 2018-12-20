'use strict';

// Constructor
var Footer = function() {
    if ( $('#monthPicker').length > 0 ) {
        $('#monthPicker').monthly({
            mode: 'picker',
            target: '#date',
            startHidden: false,
            stylePast: true,
            disablePast: true,
            monthNames: [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Diciembre'
            ]
        });
    }
};

module.exports = Footer;
