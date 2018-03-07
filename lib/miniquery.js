const sweetSelector = {
    select: (data) => {
        const x = document.querySelectorAll(data)
        console.log(x)
    }
}

const DOM = {
    hide: (data) => {
        document.querySelector(data).style.visibility = "hidden";
    },

    show: (data) => {
        document.querySelector(data).style.visibility = "visible";
    },

    addClass: (currentClass, newClass) => {
        const x = document.querySelector(currentClass)
        x.className += ` ${newClass}`
    },
    removeClass: (currentClass, deleteClass) => {
        const x = document.querySelector(currentClass)
        x.classList.remove(deleteClass);
    }
}

const EventDispatcher = {

    on: (currentClass, event, callback) => {
        document.querySelector(currentClass).addEventListener(event, callback())
    },

    trigger: (currentClass, event) => {
        EventDispatcher.on(currentClass, event, () => {
            console.log('awesome')
        })
    }
}

const AjaxWrapper = {
    request: (object) => {
        var xhttp = new XMLHttpRequest();
        xhttp.open(object.type, object.url, true);
        xhttp.addEventListener("load", (object.success))
        xhttp.addEventListener("error", (object.fail))
        xhttp.send()
    }
}

sweetSelector.select("#eyed")
sweetSelector.select(".klass")
sweetSelector.select('a')

DOM.hide('.klass')
DOM.show('.klass')
DOM.addClass('.klass', 'shadi')
DOM.removeClass('.klass', 'shadi')

EventDispatcher.trigger('.klass', 'click')
AjaxWrapper.request({
    url: 'https://swapi.co/api/people',
    type: 'GET',
    success: function (data) {
        console.log(data)
    },
    fail: function (err) {
        console.log(err)
    }
})