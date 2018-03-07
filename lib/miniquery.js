const SweetSelector ={
    select : (value)=>{
        console.log(document.querySelector(value))
    }
}

const DOM ={
    hide : (value)=>{
        return document.querySelector(value).style.visibility = 'hidden'
    },
    show : (value)=>{
        return document.querySelector(value).style.visibility = 'visible'
    }, 
    addClass : (value, addedClass)=>{
        let data = document.querySelector(value)
        return data.classList.add(addedClass)
    },
    removeClass : (value, deletedClass)=>{
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

const AjaxWrapper ={
    request:(obj)=>{
        let oReq = new XMLHttpRequest();
        //console.log(oReq)
        oReq.open(obj.type,obj.url)
        oReq.onload=()=> {
            if(oReq.status==200){
                obj.success(oReq.responseText)
            }else{
                obj.fail()
            }
        }
        oReq.send();
    }
}

DOM.hide('#eyed')
DOM.addClass('.klass', 'shadi')
DOM.removeClass('.klass', 'shadi')
SweetSelector.select('#eyed')
// SweetSelector.select('.klass')
EventDispatcher.on('.klass', 'click', function() { console.log("awesome") });
EventDispatcher.trigger('.klass', 'click');

AjaxWrapper.request({
    url: 'https://swapi.co/api/films/',
    type: 'GET',
    success: function(data) {
     console.log("Success: ", data)
    },
    fail: function() {
      console.log("eroor")
    }
  })