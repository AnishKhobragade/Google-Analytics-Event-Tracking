

$(document).ready(function() {
    
    var $t = $('[data-event="event"]');
    $t.click(function () {
        alert();
        var evCat = $(this).data('category') ? $(this).data('category') : '',
            evAct = $(this).data('action') ? $(this).data('action') : '',
            evLab = $(this).data('label') ? $(this).data('label') : '',
            evVal = $(this).data('value') ? $(this).data('value') : 0;
        try {
            ga('send', 'event', evCat, evAct, evLab, evVal);
            alert();
        } catch (e) {
            console.log(e);
        }
    });

});
    
