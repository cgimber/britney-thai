/* globals
---------------------------------------------------------------------*/

/* document ready
---------------------------------------------------------------------*/
$(document).ready(function() {
    typer('.dialog__message')
        .pause()
        .cursor({ blink: 'hard' }).line({
            container: '.dialog__message--hidden',
            min: 30,
            max: 60
        });
});

/* functions
---------------------------------------------------------------------*/
