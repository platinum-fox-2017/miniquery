const SweetSelector = {
  select:function(input){
    if(input[0]==='#'){
      console.log(document.querySelectorAll(input))
    }
    else if(input[0]==='.'){
      console.log(document.querySelectorAll(input))
    }
    else{
      console.log(document.querySelectorAll(input))
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

// const miniquery = {
//   SweetSelector : {
//     select:function(input){
//       if(input[0]==='#'){
//         console.log(document.querySelectorAll(input))
//       }
//       else if(input[0]==='.'){
//         console.log(document.querySelectorAll(input))
//       }
//       else{
//         console.log(document.querySelectorAll(input))
//       }
//     }
    
//   },
//   DOM :{
//     hide:function(input){
//       document.querySelector(input).style.visibility = "hidden"
//     },
//     show:function(input){
//       document.querySelector(input).style.visibility = "visible"
//     },
//     addClass:function(input1,input2){
//       let c = document.querySelector(input1)
//       c.className += ' '+input2
//       console.log(c)
//       console.log(c.classList)
//     },
//     removeClass :function(input1,input2){
//       let c = document.querySelector(input1)
//       c.classList.remove(input2)
//       console.log(c)
//     }
//   },
  
//   EventDispatcher :{
//     on:function(type,method,callback){
//       let input = document.querySelector(type)
//       input.addEventListener(method,callback())
//     },
//     trigger:function(type,method){
//       EventDispatcher.on(type,method,function(){
//         console.log("awesome")
//       })
//     }
//   },
//   AjaxWrapper : {
//     request:function(obj){
//       let oReq = new XMLHttpRequest()
//       oReq.open(obj.type,obj.url)
//       oReq.addEventListener('load',(obj.success))
//       oReq.addEventListener('error',(obj.fail))
//       oReq.send()
  
//     }
//   }
// }

// const $ = miniquery
// $.DOM.hide('.klass');

const miniquery = function(input){
 
  this.element = SweetSelector.select(input)
  this.hide = function(){
    DOM.hide(input)
  }
  this.show = function(){
    DOM.show(input)
  }
  this.addClass = function(newclass){
    DOM.addClass(input,newclass)
  }
  this.removeClass = function(newclass){
    DOM.removeClass(input,newclass)
  }
  this.on = function(method,callback){
    EventDispatcher.on(input,method,callback)
  }
  this.trigger = function(method){
    EventDispatcher.trigger(input,method)
  }
  this.ajax = function(obj){
    AjaxWrapper.request(obj)
  }
  return this
}


const $ = miniquery
$('.klass')
$('#eyed')
$('a')


$('.klass').hide();
$('.klass').show();
$('.klass').addClass('shadi');
$('.klass').removeClass('shadi');
$('.klass').on('click', function() { console.log("awesome") });
$('.klass').trigger('click');

// AJAX
$().ajax({
 url: 'https://demo.api-platform.com/books',
 type: 'GET',
 success: function(result) {
   //do something
   console.log(result)
 },
 fail: function(err) {
  //do something
  console.log(err)
 }
})

