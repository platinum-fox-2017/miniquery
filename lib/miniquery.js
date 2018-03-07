SweetSelector = {
    select: (option) => {
        switch(option[0]) {
            case '#': 
                let resId = document.getElementById(option.slice(1));
                console.log(resId);
                break;
            case '.': 
                let resClass = document.getElementsByClassName(option.slice(1));
                console.log(resClass);
                break;
            default:
            console.log(option)
                let resTag = document.getElementsByTagName(option)
                console.log(resTag);
                break;
        }
    }
}

DOM = {
    hide: (option) => {
        document.querySelectorAll(option).forEach((value) => {value.style.visibility = "hidden"});
    },
    show: (option) => {
        document.querySelectorAll(option).forEach((value) => {value.style.visibility = "visible"});
    },
    addClass: (option, newClass) => {
        document.querySelectorAll(option).forEach((value) => {value.classList.add(newClass);});
    },
    removeClass: (option, newClass) => {
        document.querySelectorAll(option).forEach((value) => {value.classList.remove(newClass);})
    }
}

EventDispatcher = {
    on: (option, mthd, func) => {
        document.querySelectorAll(option).forEach((value) => {value.addEventListener(mthd, func);});
    },
    trigger: (option, mthd) => {
        document.querySelectorAll(option).forEach((value) => {value.dispatchEvent(new MouseEvent(mthd));})
    }
}

AjaxWrapper = {
    request: (obj) => {
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (req.readyState == 4 && req.status == 200) {
                obj.success()
            } else {
                obj.failed()
            }
        }
        req.open(obj.type, obj.url);
        req.send();      
        // req.onload = obj.success;
    },
}
