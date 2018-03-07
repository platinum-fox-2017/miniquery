var SweetSelector = {
    select: function(str) {
        if(str[0]=='#')
            return document.querySelector(str);
        return document.querySelectorAll(str);
    }
}

var DOM = {
    hide: function(str) {
        document.querySelectorAll(str).forEach(val => val.style.visibility = 'hidden');
    },
    show: function(str) {
        document.querySelectorAll(str).forEach(val => val.style.visibility = 'visible');
    },
    addClass: function(str, newClass) {
        document.querySelectorAll(str).forEach(val => val.classList.add(newClass));
    },
    removeClass: function(str, newClass) {
        document.querySelectorAll(str).forEach(val => val.classList.remove(newClass));
    },
}

console.log(SweetSelector.select('#paragraph'));
console.log(SweetSelector.select('.title'));
console.log(SweetSelector.select('h1'));
