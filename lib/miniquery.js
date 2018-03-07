const SweetSelector = {
  select:function(input){
    let name = input.slice(1,input.length)
    if(input[0]==='#'){
      console.log(document.getElementById(name))
    }
    else if(input[0]==='.'){
      console.log(document.getElementsByClassName(name))
    }
    else{
      console.log(document.getElementsByTagName(input))
    }
  }
  
}
const DOM ={
  hide:function(input){
    document.querySelector(input).style.visibility = "hidden"
  },
  show:function(input){
    document.querySelector(input).style.visibility = "visible"
  },
  addClass:function(input1,input2){
    let c = document.querySelector(input1)
    c.className += ' '+input2
    console.log(c)
    console.log(c.classList)
  },
  removeClass :function(input1,input2){
    let c = document.querySelector(input1)
    c.classList.remove(input2)
    console.log(c)
  }
}

const EventDispatcher ={
  on:function(type,method,callback){
    let input = document.querySelector(type)
    input.addEventListener(method,callback())
  },
  trigger:function(type,method){
    EventDispatcher.on(type,method,function(){
      console.log("awesome")
    })
  }
}
const AjaxWrapper = {
  request:function(obj){
    let oReq = new XMLHttpRequest()
    oReq.open(obj.type,obj.url)
    oReq.addEventListener('load',(obj.success))
    oReq.addEventListener('error',(obj.fail))
    oReq.send()

  }
}

// SweetSelector.select('#eyed') //id
// SweetSelector.select('.klass') //class
// SweetSelector.select('a') //element

// DOM.hide('.klass')
// DOM.show('.klass')
// DOM.addClass('.klass','shadi')
// DOM.removeClass('.klass','shadi')

// EventDispatcher.on('.klass','click',function(){console.log('awesome')})
// EventDispatcher.trigger('.klass','click')

// AjaxWrapper.request({
//   url:'https://demo.api-platform.com/books',
//   type:'GET',
//   success:function(some){
//     console.log(some)
//   },
//   fail:function(err){
//     console.log(err)
//   }
// })

const miniquery ={
  select:function(input){
    let name = input.slice(1,input.length)
    if(input[0]==='#'){
      console.log(document.getElementById(name))
    }
    else if(input[0]==='.'){
      console.log(document.getElementsByClassName(name))
    }
    else{
      console.log(document.getElementsByTagName(input))
    }
  },
  hide:function(input){
    document.querySelector(input).style.visibility = "hidden"
  },
  show:function(input){
    document.querySelector(input).style.visibility = "visible"
  },
  addClass:function(input1,input2){
    let c = document.querySelector(input1)
    c.className += ' '+input2
    console.log(c)
    console.log(c.classList)
  },
  removeClass :function(input1,input2){
    let c = document.querySelector(input1)
    c.classList.remove(input2)
    console.log(c)
  },
  on:function(type,method,callback){
    let input = document.querySelector(type)
    input.addEventListener(method,callback())
  },
  trigger:function(type,method){
    EventDispatcher.on(type,method,function(){
      console.log("awesome")
    })
  },
  request:function(obj){
    let oReq = new XMLHttpRequest()
    oReq.open(obj.type,obj.url)
    oReq.addEventListener('load',(obj.success))
    oReq.addEventListener('error',(obj.fail))
    oReq.send()

  }

}

miniquery.select('.klass')
miniquery.select('#eyed')
miniquery.select('a')
miniquery.hide('.klass')
miniquery.show('.klass')
miniquery.addClass('.klass','shadi')
miniquery.removeClass('.klass','shadi')

miniquery.on('.klass','click',function(){console.log('awesome')})
miniquery.trigger('.klass','click')

miniquery.request({
  url:'https://demo.api-platform.com/books',
  type:'GET',
  success:function(some){
    console.log(some)
  },
  fail:function(err){
    console.log(err)
  }
})
