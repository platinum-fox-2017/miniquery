const SweetSelector =  {
    select : (element) => {
        if (element[0] == "#") {
            element = element.substr(1)
            return document.getElementById(element) 
        } else if (element[0] == ".") {
            element = element.substr(1)
            return document.getElementsByClassName(element)
        } else {
            return document.getElementsByTagName(element) 
        }
    },
}

const DOM = {
    show :(element) => {
        let manipulated = SweetSelector.select(element)
        if (manipulated.length > 0) {
            for(let i = 0; i < manipulated.length; i++) {
                manipulated[i].style.display = "block"
            }
        } else {
            manipulated.style.display = "block"
        }
    },

    hide :(element) => {
        let manipulated = SweetSelector.select(element)
        if (manipulated.length > 0) {
            for(let i = 0; i < manipulated.length; i++) {
                manipulated[i].style.display = "none"
            }
        } else {
            manipulated.style.display = "none"
        }
    },

    addClass : (element, newClass) => {
        let manipulated = SweetSelector.select(element)
        if (manipulated.length > 0) {
            for(let i = 0; i < manipulated.length; i++) {
                manipulated[i].classList.add(newClass)
            }
        } else {
            manipulated.classList.add(newClass)
        }        
    },

    removeClass : (element, newClass) => {
        let manipulated = SweetSelector.select(element)
        if (manipulated.length > 0) {
            for(let i = 0; i < manipulated.length; i++) {
                manipulated[i].classList.remove(newClass)
            }
        } else {
            manipulated.classList.remove(newClass)
        }        
    }
}
