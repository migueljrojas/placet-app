'use strict';

// Constructor
var Footer = function() {
    var appoinmentCols = $('.primera-cita--agendar__form__col');
    
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

    appoinmentCols.on('click', function() {
        appoinmentCols.removeClass('-active');
        $(this).addClass('-active');
    });
};

module.exports = Footer;
