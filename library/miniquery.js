class SweetSelector{
    static select(input){
        return document.querySelector(input);
    }
}

class DOM{
    static hide(input){
        document.querySelector(input).style.visibility ="hidden";
    }
    static show(input){
        document.querySelector(input).style.visibility ="visible";
    }
    static addClass(input,className){
        return document.querySelector(input).classList.add(className);
    }
    static removeClass(input,className){
        return document.querySelector(input).classList.remove(className);
    }
}
class EventDispatcher{
    static on(input,event,cb){
        document.querySelector(input).addEventListener(event, cb())
    }
}
// class AjaxWrapper{
//     static request (obj) {
//         let req = new XMLHttpRequest();
//         req.open(obj.type, obj.url, true);
//         req.onload = obj.success
//         req.onerror = obj.fail
//     }
// }

class AjaxWrapper{
    static request(obj){
        let xhr = new XMLHttpRequest();
        xhr.open(obj.type,obj.url,true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                obj.success(this.responseText);
            } else {
                obj.fail();
            }
        }
        xhr.send(null);
    }
}

