console.log($('#paragraph'));
console.log($('.title'));
console.log($('h1'));

miniquery('.button_on').on('click', function() {
    $('#paragraph').show();
});

miniquery('.button_off').on('click', function() {
    $('#paragraph').hide()
});

miniquery('.button_off').trigger('click');
