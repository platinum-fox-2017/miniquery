const SweetSelector = {
    select: function (option){
        switch(option[0]){
            case '#': 
                console.log(document.getElementById(option.slice(1)))
                break
            case '.': 
                console.log(document.getElementsByClassName(option.slice(1)))
                break
            default:
                console.log(document.getElementsByTagName(option))
                break   
        }
    }
}

const DOM = {
    hide: function (option){
        document.querySelectorAll(option).forEach(element => element.style.display = "none")
    },
    show: function (option){
        document.querySelectorAll(option).forEach(element => element.style.display = "block")
    },
    addClass: function(option, add){
        document.querySelectorAll(option).forEach(element => element.classList.add(add))
    },
    removeClass: function(option, remove){
        document.querySelectorAll(option).forEach(element => element.classList.remove(remove))
    }

}

const EventDispatcher = {
    on: function (option, action, cb) {
        document.querySelectorAll(option).forEach(elem => elem.addEventListener(action, cb, false))
    },
    trigger: function (option, action){
        document.querySelectorAll(option).forEach(elem => elem.dispatchEvent(new Event(action)))
    }
}

SweetSelector.select('#eyed')
SweetSelector.select('.klass')
SweetSelector.select('a')

DOM.hide('.klass')
DOM.show('.klass')

DOM.addClass('.klass', 'shadi')
DOM.removeClass('.klass', 'shadi')

EventDispatcher.on('.klass', 'click', function (){console.log('awesome')})
EventDispatcher.trigger('.klass', 'click')