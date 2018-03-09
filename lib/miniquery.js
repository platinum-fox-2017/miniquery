const miniquery = function(option) {
    if (this.__proto__.constructor !== miniquery) {
      return new miniquery(option);
    }

    this.SweetSelector = {
        select: (option) => {
            // Case if it is a class, we must not return array
            if(option[0]=='#')
                return document.querySelector(option);
            return document.querySelectorAll(option);
        }
    }

    this.hide = () => {
        let elementValue = this.SweetSelector.select(option);
        if(elementValue.length > 0) {
            elementValue.forEach(val => val.style.visibility = 'hidden');
        } else {
            elementValue.style.visibility = 'hidden';
        }
    }

    this.show = () => {
        let elementValue = this.SweetSelector.select(option);
        if(elementValue.length > 0) {
            elementValue.forEach(val => val.style.visibility = 'visible');
        } else {
            elementValue.style.visibility = 'visible';
        }
    }

    this.addClass = (newClass)  => {
        let elementValue = this.SweetSelector.select(option);
        if(elementValue.length > 0) {
            elementValue.forEach(val => val.classList.add(newClass));
        } else {
            elementValue.val.classList.add(newClass);
        }
    }

    this.removeClass = (newClass) => {
        let elementValue = this.SweetSelector.select(option);
        if(elementValue.length > 0) {
            elementValue.forEach(val => val.classList.remove(newClass));
        } else {
            elementValue.val.classList.remove(newClass);
        }
    }

    this.on = (event, callback) => {
        let elementValue = this.SweetSelector.select(option);
        if(elementValue.length > 0) {
            elementValue.forEach(val => val.addEventListener(event, callback));
        } else {
            elementValue.val.addEventListener(event, callback);
        }
    }

    this.trigger = (event) => {
        let elementValue = this.SweetSelector.select(option);
        let newEvent = new Event(event);
        if(elementValue.length > 0){
            elementValue.forEach(val => val.dispatchEvent(newEvent));
        } else {
            console.log("masuk");
            elementValue.dispatchEvent(newEvent);
        }
    }

    this.request = (objReq) => {
        let httpreq = new XMLHttpRequest();
        httpreq.onreadystatechange = function() {
         if (httpreq.readyState === 4) {
             if (this.status == 200) {
                 opt.success(httpreq.responseText);
             } else {
                 opt.fail();
             }
         }

        httpreq.open(objReq.type, objReq.url);
        httpreq.send();
        }
    }
}


const $ = (options) => {
    if (this.__proto__.constructor !== miniquery) {
        return new miniquery(options);
    }
}
