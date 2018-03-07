$('.klass');
$('#eyed');
$('a');

$('.klass').hide();
$('.klass').show();
$('.klass').addClass('shadi');
$('.klass').removeClass('shadi');
$('.klass').on('click', function() {
    console.log("awesome")
});
$('.klass').trigger('click');
$().ajax({
    url: 'http://localhost:3000/api/books',
    type: 'GET',
    success: function(data) {
        console.log(data);
    },
    fail: function() {
        console.log('Error');
    }
});