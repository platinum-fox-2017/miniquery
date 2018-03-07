var SweetSelector = (function () {
    return {
        select: function (data) {
            let newData = document.querySelector(data)
            // console.log(newData)
            return newData
        }
    };
}());

var DOM = {
    hide: function (data) {
        document.querySelector(data).style.visibility = "hidden";
    },
    show: function (data) {
        document.querySelector(data).style.visibility = "visible";
    },
    addClass: function (name, data) {
        document.querySelector(name).classList.add(data)
    },
    removeClass: function (name, data) {
        document.querySelector(name).classList.remove(data)
    }
}

EventDispatcher = {
    on: function(selector, event, cb){
        const element = SweetSelector.select(selector);
        element.addEventListener(event, cb);
    },
    trigger: function (selector, event){
        const element = SweetSelector.select(selector);
        element.dispatchEvent(new Event(event));
    }
}

AjaxWrapper = {
    request: function (obj) {
       var xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function () {
           if (this.readyState == 4 && this.status == 200) {
                obj.success(this.responseText);
           } else {
                obj.fail()
           }
       };
       xhttp.open(`${obj.type}`, `${obj.url}`, true);
       xhttp.send()
    }
}

// SweetSelector.select('#eyed')
// SweetSelector.select('.klass')
// SweetSelector.select('a')

// DOM.hide('.klass')
// DOM.show('.klass')

// DOM.addClass('.klass', 'shadi')
// DOM.removeClass('.klass', 'shadi')

// EventDispatcher.on('.klass', 'click', function () {
//     console.log('awesome')
// })
// EventDispatcher.trigger('.klass', 'click')

AjaxWrapper.request({
    url: 'http://localhost:3000/api/twatt/search/jakarta',
    type: 'GET',
    success: function () {
        console.log('Connected')
    },
    fail: function () {
        console.log('Can not connect')
    }
})