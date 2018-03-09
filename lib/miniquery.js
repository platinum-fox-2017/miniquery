const SweetSelector = {
    select: function (option){
        switch(option[0]){
            case '#': 
                return document.getElementById(option.slice(1))
            case '.': 
                return document.getElementsByClassName(option.slice(1))
            default:
                return document.getElementsByTagName(option)
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

const miniquery = function (selector){
    if(this.__proto__.constructor !== miniquery){
        return new miniquery(selector)
    }
    this.element = SweetSelector.select(selector)
    this.hide = function () {
        this.element.style.display = 'none'
    }
    this.show = function () {
        this.element.style.display = 'block'
    }
    this.addClass = function (className) {
        this.element.classList.add(className)
    }
    this.removeClass = function (className) {
        this.element.classList.remove(className)
    }
    this.on = function (action, cb){
        this.element.addEventListener(action, cb)
    }
    this.trigger = function (action){
        this.element.dispatchEvent(new Event(action))
    }
    this.ajax = function (obj){
        const xhr = new XMLHttpRequest()
        xhr.open(obj.type, obj.url, true)
        xhr.onload = function (){
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

const $ = function (selector){
    if(this.__proto__.constructor !== miniquery){
        return new miniquery(selector)
    }
    this.element = SweetSelector.select(selector)
    this.hide = function () {
        this.element.style.display = 'none'
    }
    this.show = function () {
        this.element.style.display = 'block'
    }
    this.addClass = function (className) {
        this.element.classList.add(className)
    }
    this.removeClass = function (className) {
        this.element.classList.remove(className)
    }
    this.on = function (action, cb){
        this.element.addEventListener(action, cb)
    }
    this.trigger = function (action){
        this.element.dispatchEvent(new Event(action))
    }
    this.ajax = function (obj){
        const xhr = new XMLHttpRequest()
        xhr.open(obj.type, obj.url, true)
        xhr.onload = function (){
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

console.log(miniquery('.klass'))
console.log($('.klass'))
