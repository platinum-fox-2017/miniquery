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

SweetSelector.select('#eyed')
SweetSelector.select('.klass')
SweetSelector.select('a')

DOM.hide('.klass')
DOM.show('.klass')

DOM.addClass('.klass', 'shadi')
DOM.removeClass('.klass', 'shadi')