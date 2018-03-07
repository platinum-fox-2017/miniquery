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

const AjaxWrapper = {
    request: function (obj){
        const xhr = new XMLHttpRequest()
        xhr.open(obj.type, obj.url, true)
        xhr.onload = function(){
            if (xhr.status >= 200 && xhr.status < 400){
                const data = xhr.responseText
                obj.success(data)
            } else {
                obj.fail(err)
            }
        }
        xhr.send()
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

AjaxWrapper.request({
    url:'http://localhost:7000/twatt',
    type:'GET',
    success: data => {
        // console.log(data)
        console.log(JSON.stringify(data))
    },
    fail: err => {
        console.log(err)
    }
})


const miniquery = {
    SweetSelector : {
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
    },
    DOM : {
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
    
    },
    EventDispatcher : {
        on: function (option, action, cb) {
            document.querySelectorAll(option).forEach(elem => elem.addEventListener(action, cb, false))
        },
        trigger: function (option, action){
            document.querySelectorAll(option).forEach(elem => elem.dispatchEvent(new Event(action)))
        }
    },
    AjaxWrapper : {
        request: function (obj){
            const xhr = new XMLHttpRequest()
            xhr.open(obj.type, obj.url, true)
            xhr.onload = function(){
                if (xhr.status >= 200 && xhr.status < 400){
                    const data = xhr.responseText
                    obj.success(data)
                } else {
                    obj.fail(err)
                }
            }
            xhr.send()
        }
    }
}

miniquery.DOM.hide('.klass')