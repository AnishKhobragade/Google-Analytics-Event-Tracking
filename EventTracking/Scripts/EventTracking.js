

$(document).ready(function() {
    
    var $t = $('[data-event="event"]');
    $t.click(function () {
       
        var evCat = $(this).data('category') ? $(this).data('category') : '',
            evAct = $(this).data('action') ? $(this).data('action') : '',
            evLab = $(this).data('label') ? $(this).data('label') : '',
            evVal = $(this).data('value') ? $(this).data('value') : 0;
        try {
            ga('send', 'event', evCat, evAct, evLab, evVal);
            alert(Event tracking data sent to your google analytics account...remove this alert during implementation from eventracking js file);
        } catch (e) {
            console.log(e);
        }
    });

});
    
