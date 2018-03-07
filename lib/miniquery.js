
class SweetSelector {
  static select(input){
    if (input == undefined) {
      return null
    }
    if (input[0] == '#') {
      return document.querySelector(input);
    } else if (input[0] == '.') {
      let doc = document.querySelectorAll(input);
      if (doc.length == 1) {
        return  document.querySelector(input);
      }
      return doc;
    } else if (input[0] != '.' && input[0] != '#') {
      return document.querySelector(input);
    }
  }
}

class DOM {
  static hide(selector){
    let element = SweetSelector.select(selector);
    element.style.display = "none"
  }
  static show(selector){
    let element = SweetSelector.select(selector);
    element.style.display = "block"
  }
  static addClass(selector,className){
    let element = SweetSelector.select(selector);
    element.classList.add(className);
  }
  static removeClass(selector,className){
    let element = SweetSelector.select(selector);
    element.classList.remove(className);
  }
}

class EventDispatcher {
  static on(selector,event,callback){
    const element = SweetSelector.select(selector);
    element.addEventListener(event, callback);
  }
  static trigger(selector,event){
    const element = SweetSelector.select(selector);
    element.dispatchEvent(new Event(event));
  }
}
class AjaxWrapper {
  static request(obj){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       obj.success(this.responseText);
     } else {
       obj.fail();
     }
    };
    xhttp.open(obj.type,obj.url, true);
    xhttp.send();
  }

}
var miniquery = function(context) {
    if (this.__proto__.constructor !== miniquery) {
        return new miniquery(context);
    }
    this.element = SweetSelector.select(context) ;
    this.hide = function(){
      this.element.style.display = "none"
    }
    this.show = function(){
      this.element.style.display = "block"
    }
    this.addClass = function(className){
      this.element.classList.add(className);
    }
    this.removeClass = function(className){
      this.element.classList.remove(className);
    }
    this.on = function(event,callback){
      this.element.addEventListener(event, callback);
    }
    this.trigger = function(event){
      this.element.dispatchEvent(new Event(event));
    }
    this.ajax = function (obj){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         obj.success(this.responseText);
       } else {
         obj.fail();
       }
      };
      xhttp.open(obj.type,obj.url, true);
      xhttp.send();
    }
};
var $ = function(context) {
    if (this.__proto__.constructor !== miniquery) {
        return new miniquery(context);
    }
    this.element = SweetSelector.select(context) ;
    this.hide = function(){
      this.element.style.display = "none"
    }
    this.show = function(){
      this.element.style.display = "block"
    }
    this.addClass = function(className){
      this.element.classList.add(className);
    }
    this.removeClass = function(className){
      this.element.classList.remove(className);
    }
    this.on = function(event,callback){
      this.element.addEventListener(event, callback);
    }
    this.trigger = function(event){
      this.element.dispatchEvent(new Event(event));
    }
    this.ajax = function (obj){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         obj.success(this.responseText);
       } else {
         obj.fail();
       }
      };
      xhttp.open(obj.type,obj.url, true);
      xhttp.send();
    }
};
