var SweetSelector = {
  select: function(input) {
    switch(input[0]) {
      case '#':
        return document.querySelector(input)
        break;
      case '.':
        return document.querySelectorAll(input)
        break;
      default:
        return document.querySelectorAll(input)
    }
  }
};

var DOM = {
  hide: function(input) {
    switch(input[0]) {
      case '#':
        let id = input.substring(1)
        let div = document.getElementById(id)
        div.style.display = 'none'
        break;
      case '.':
        let klass = document.querySelectorAll(input)
        for(let i = 0; i < klass.length; i++) {
          klass[i].style.display = 'none'
        }
        break;
      default:
        let tag = document.querySelectorAll(input)
        for(let i = 0; i < tag.length; i++) {
          tag[i].style.display = 'none'
        }
    }
  },
  show: function(input) {
    switch(input[0]) {
      case '#':
        let id = input.substring(1)
        let div = document.getElementById(id)
        div.style.display = 'block'
        break;
      case '.':
        let klass = document.querySelectorAll(input)
        for(let i = 0; i < klass.length; i++) {
          klass[i].style.display = 'block'
        }
        break;
      default:
        let tag = document.querySelectorAll(input)
        for(let i = 0; i < tag.length; i++) {
          tag[i].style.display = 'block'
        }
    }
  },

  addClass: function(input, option)  {
    let klass = document.querySelectorAll(input)
    for(let i = 0; i < klass.length; i++) {
      klass[i].className += ` ${option}`
      // console.log(klass[i])
    }
  },

  removeClass: function(input, option) {
    let klass = document.querySelectorAll(input)
    for(let i = 0; i < klass.length; i++) {
      klass[i].className = input
      // console.log(klass[i])
    }
  }
};

var EventDispatcher = {
  on: function(input, event, callback) {
    let klass = document.querySelectorAll(input)
    for(let i = 0; i < klass.length; i++) {
      klass[i].addEventListener(event, callback)
    }
  },

  trigger: function(input, event) {
    let klass = document.querySelectorAll(input)
    for(let i = 0; i < klass.length; i++) {
      klass[i].dispatchEvent(new Event(event))
    }
  }
}

var AjaxWrapper = {
  request: function(obj) {
    var xhr = new XMLHttpRequest();
    xhr.open(obj.type, obj.url, true)
    xhr.onreadystatechange = function() {
      if(xhr.status >= 200 && xhr.status < 400) {
        obj.success(xhr.responseText)
      } else {
        obj.fail()
      }
    }
    xhr.send()
  }
}