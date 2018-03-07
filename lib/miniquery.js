const SweetSelector ={
    select : function(value){
        console.log(document.querySelector(value))
    }
}

const DOM ={
    hide : function(value){
        return document.querySelector(value).style.visibility = 'hidden'
    },
    show : function(value){
        return document.querySelector(value).style.visibility = 'visible'
    }, 
    addClass : function(value, addedClass){
        let data = document.querySelector(value)
        return data.classList.add(addedClass)
    },
    removeClass : function(value, deletedClass){
        let data = document.querySelector(value)
        return data.classList.remove(deletedClass)    
    }
}
const EventDispatcher = {
    on: (value, event, cb)=>{
        document.querySelector(value).addEventListener(event,cb())
    }, 
    trigger: (value, event)=>{
        EventDispatcher.on(value, event, ()=>{
            console.log('awesome')
        })
    }
}


DOM.hide('#eyed')
DOM.addClass('.klass', 'shadi')
DOM.removeClass('.klass', 'shadi')
SweetSelector.select('#eyed')
SweetSelector.select('.klass')
EventDispatcher.on('.klass', 'click', function() { console.log("awesome") });
EventDispatcher.trigger('.klass', 'click');