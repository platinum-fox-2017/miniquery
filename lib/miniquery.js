const miniquery = function(options) {
    if (this.__proto__.constructor !== miniquery) {
        return new miniquery(options);
    }

    this.element = document.querySelectorAll(options);

    this.hide = () => {
        this.element.forEach(element => element.style.visibility = "hidden");
    }

    this.show = () => {
        this.element.forEach(element => element.style.visibility = "visible");
    }

    this.addClass = (clas) => {
        this.element.forEach(element => element.classList.add(clas));
    }

    this.removeClass = (clas) => {
        this.element.forEach(element => element.classList.remove(clas));
    }

    this.on = (event, callback) => {
        this.element.forEach(element => element.addEventListener(event, callback));
    }

    this.trigger = (event) => {
        this.element.forEach(element => element.dispatchEvent(new MouseEvent(event)));
    }

    this.ajax = (opt) => {
        let xmlReq = new XMLHttpRequest();
        xmlReq.onreadystatechange = function() {
            if (xmlReq.readyState === 4) {
                if (this.status == 200) {
                    opt.success(xmlReq.responseText);
                } else {
                    opt.fail();
                }
            }
        };
        xmlReq.open(opt.type, opt.url);
        xmlReq.send();
    }
}

const $ = (options) => {
    if (this.__proto__.constructor !== miniquery) {
        return new miniquery(options);
    }
}