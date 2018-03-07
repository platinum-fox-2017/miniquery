miniquery('#eyed');
miniquery('.klass');
miniquery('a');

miniquery('#eyed').hide();
miniquery('#eyed').show();
miniquery('.klass').addClass('shadi');
miniquery('.klass');
miniquery('.klass').removeClass('shadi');
miniquery('.klass');

miniquery('.klass').on('click', function() {console.log("awsome!")});
miniquery('.klass').trigger('click');

miniquery().ajax({
    url: 'http://localhost:3000',
    type: 'GET',
    success: function() {
        console.log('connected!');
    },
    failed: function() {
        console.log('failed');
    }
})

$('#eyed').hide()