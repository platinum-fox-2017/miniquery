miniquery.SweetSelector.select('#eyed');
miniquery.SweetSelector.select('.klass');
miniquery.SweetSelector.select('a');

miniquery.DOM.hide('#eyed');
miniquery.DOM.show('#eyed');
miniquery.DOM.addClass('.klass', 'shadi');
miniquery.SweetSelector.select('.klass');
miniquery.DOM.removeClass('.klass', 'shadi');
miniquery.SweetSelector.select('.klass');

miniquery.EventDispatcher.on('.klass', 'click', function() {console.log("awsome!")});
miniquery.EventDispatcher.trigger('.klass', 'click');

miniquery.AjaxWrapper.request({
    url: 'http://localhost:3000',
    type: 'GET',
    success: function() {
        console.log('connected!');
    },
    failed: function() {
        console.log('failed');
    }
})