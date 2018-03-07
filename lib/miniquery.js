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
  }
}

SweetSelector.select('#eyed') //id
SweetSelector.select('.klass') //class
SweetSelector.select('a') //element

DOM.hide('.klass')
DOM.show('.klass')