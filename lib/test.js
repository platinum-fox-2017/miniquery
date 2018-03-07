SweetSelector.select('#eyed');
SweetSelector.select('.klass');
SweetSelector.select('a');

DOM.hide('#eyed');
DOM.show('#eyed');
DOM.addClass('.klass', 'shadi');
SweetSelector.select('.klass');
DOM.removeClass('.klass', 'shadi');
SweetSelector.select('.klass');

EventDispatcher.on('.klass', 'click', function() {console.log("awsome!")});
EventDispatcher.trigger('.klass', 'click');

AjaxWrapper.request({
    url: 'http://localhost:3000',
    type: 'GET',
    success: function() {
        console.log('connected!');
    },
    failed: function() {
        console.log('failed');
    }
})