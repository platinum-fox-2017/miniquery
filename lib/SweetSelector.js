const SweetSelector = {

    select: (element) => {
        let type = element[0]

        if (type == "#") {
            element = element.substr(1)
            return document.getElementById(element)
        } else if (type == ".") {
            element = element.substr(1)
            return document.getElementsByClassName(element)
        } else {
            return document.getElementsByTagName(element)
        }
    },
}

const DOM = {
    show: (element) => {
        let modifiedElement = SweetSelector.select(element)
        if (modifiedElement.length > 0) {
            for (let i = 0; i < modifiedElement.length; i++) {
                modifiedElement[i].style.display = "block"
            }
        } else {
            modifiedElement.style.display = "block"
        }
    },

    hide: (element) => {
        let modifiedElement = SweetSelector.select(element)
        if (modifiedElement.length > 0) {
            for (let i = 0; i < modifiedElement.length; i++) {
                modifiedElement[i].style.display = "none"
            }
        } else {
            modifiedElement.style.display = "none"
        }
    },

    addClass: (element, newClass) => {
        let modifiedElement = SweetSelector.select(element)
        if (modifiedElement.length > 0) {
            for (let i = 0; i < modifiedElement.length; i++) {
                modifiedElement[i].classList.add(newClass)
            }
        } else {
            modifiedElement.classList.add(newClass)
        }
    },

    removeClass: (element, newClass) => {
        let modifiedElement = SweetSelector.select(element)
        if (modifiedElement.length > 0) {
            for (let i = 0; i < modifiedElement.length; i++) {
                modifiedElement[i].classList.remove(newClass)
            }
        } else {
            modifiedElement.classList.remove(newClass)
        }
    }
}

const EventDispatcher = {
    on: (element, event, callback) => {
        let modifiedElement = SweetSelector.select(element)
        if (modifiedElement.length > 0) {
            for (let i = 0; i < modifiedElement.length; i++) {
                modifiedElement[i].addEventListener(event, callback);
            }
        } else {
            modifiedElement.addEventListener(event, callback);
        }
    },

    trigger: (element, requestEvent) => {
        let event = new Event(requestEvent)
        let modifiedElement = SweetSelector.select(element)
        modifiedElement.dispatchEvent(event)
    }
}

const AjaxWrapper = {
    request: (objRequest) => {
        let xmlreq = new XMLHttpRequest()
        xmlreq.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                objRequest.success(this.responseText);
            } else {
                objRequest.fail();
            }
        }
        xmlreq.open(objRequest.type, objRequest.url, true)
        xmlreq.send()
    }
}

AjaxWrapper.request({
    url: 'http://localhost:3000/testapi',
    type: 'GET',
    success: function (responseText) {
        console.log(responseText);
    },
    fail: function () {
        console.log("Request Failed !");
    }
})

// console.log(SweetSelector.select('#eyed'))
// console.log(SweetSelector.select('.klass'))
// console.log(SweetSelector.select('a'))

// DOM.hide('#eyed')
// DOM.hide('.klass')
// DOM.show('a')

// DOM.addClass('.klass', 'shadi')
// DOM.removeClass('.klass', 'shadi')

// EventDispatcher.on('#eyed','click', function() {
//     console.log('anjay'); 
// }) 

// EventDispatcher.trigger('#eyed', 'click')
// EventDispatcher.on('.klass','click', function() {
//     console.log('Awesome klass !'); 
// })