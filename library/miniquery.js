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
