
// function SweetSelector() {
//   return document.querySelector('#eyed')
// }

class SweetSelector {

  static select(selector){
    if (selector[0] === '#') {
      return document.querySelector(selector)
    } else {
      return document.querySelectorAll(selector)
    }
  }

}


class DOM {
  // hide / show elements
  static hide (selector) {
    if (selector[0] === '#') {
      const result = document.querySelector(selector)
      let style = document.createAttribute("style")
      style.value = 'display:none'
      result.setAttributeNode(style)
      // console.log(result);
    } else {
      const result = document.querySelectorAll(selector)
      result.forEach(function(value){
        let style = document.createAttribute("style")
        style.value = 'display:none'
        value.setAttributeNode(style)
        // console.log(value.attributes);
      })
    }


  }

  static show (selector) {
    if (selector[0] === '#') {
      const result = document.querySelector(selector)
      let style = document.createAttribute("style")
      style.value = 'display:block'
      result.setAttributeNode(style)
      // console.log(result);
    } else {
      const result = document.querySelectorAll(selector)
      result.forEach(function(value){
        let style = document.createAttribute("style")
        style.value = 'display:block'
        value.setAttributeNode(style)
        // console.log(value.attributes);
      })
    }
  }

  static addClass (selector, newClass) {
    const result = document.querySelectorAll(selector)
    result.forEach(function(value){
      value.classList.add(newClass)
    })
  }

  static removeClass (selector, newClass) {
    const result = document.querySelectorAll(selector)
    result.forEach(function(value){
      value.classList.remove(newClass)
    })
  }
}


class EventDispatcher {

  static on (selector, action, callback) {
    const target = document.querySelector(selector)
    target.addEventListener(action, callback, false)
  }

  static trigger (selector, action) {
    const target = document.querySelector(selector)
    target.dispatchEvent(new Event(action))
  }

}

class AjaxWrapper {

  static request (ajaxParams) {
    const xhRequest = new XMLHttpRequest();
    xhRequest.open(ajaxParams.type, ajaxParams.url, true)
    xhRequest.onload = function() {
      if (xhRequest.status >= 200 && xhRequest.status < 400) {
        // Success!
        var response = xhRequest.responseText;
        ajaxParams.success(response)
      } else {
        // We reached our target server, but it returned an error
        ajaxParams.fail()
      }
    };
    xhRequest.send()
  }

}

const miniquery = {
  SweetSelector: {
    select: function(selector){
      if (selector[0] === '#') {
        return document.querySelector(selector)
      } else {
        return document.querySelectorAll(selector)
      }
    }
  },
  DOM: {
    hide: function (selector) {
      if (selector[0] === '#') {
        const result = document.querySelector(selector)
        let style = document.createAttribute("style")
        style.value = 'display:none'
        result.setAttributeNode(style)
        // console.log(result);
      } else {
        const result = document.querySelectorAll(selector)
        result.forEach(function(value){
          let style = document.createAttribute("style")
          style.value = 'display:none'
          value.setAttributeNode(style)
          // console.log(value.attributes);
        })
      }
    },

    show: function (selector) {
      if (selector[0] === '#') {
        const result = document.querySelector(selector)
        let style = document.createAttribute("style")
        style.value = 'display:block'
        result.setAttributeNode(style)
        // console.log(result);
      } else {
        const result = document.querySelectorAll(selector)
        result.forEach(function(value){
          let style = document.createAttribute("style")
          style.value = 'display:block'
          value.setAttributeNode(style)
          // console.log(value.attributes);
        })
      }
    },

    addClass: function (selector, newClass) {
      const result = document.querySelectorAll(selector)
      result.forEach(function(value){
        value.classList.add(newClass)
      })
    },

    removeClass: function (selector, newClass) {
      const result = document.querySelectorAll(selector)
      result.forEach(function(value){
        value.classList.remove(newClass)
      })
    }
  },
  EventDispatcher: {
    on: function (selector, action, callback) {
      const target = document.querySelector(selector)
      target.addEventListener(action, callback, false)
    },

    trigger: function (selector, action) {
      const target = document.querySelector(selector)
      target.dispatchEvent(new Event(action))
    }
  },
  AjaxWrapper: {
    request: function (ajaxParams) {
      const xhRequest = new XMLHttpRequest();
      xhRequest.open(ajaxParams.type, ajaxParams.url, true)
      xhRequest.onload = function() {
        if (xhRequest.status >= 200 && xhRequest.status < 400) {
          // Success!
          var response = xhRequest.responseText;
          ajaxParams.success(response)
        } else {
          // We reached our target server, but it returned an error
          ajaxParams.fail()
        }
      };
      xhRequest.send()
    }
  }
}

const $ = {
  SweetSelector: {
    select: function(selector){
      if (selector[0] === '#') {
        return document.querySelector(selector)
      } else {
        return document.querySelectorAll(selector)
      }
    }
  },
  DOM: {
    hide: function (selector) {
      if (selector[0] === '#') {
        const result = document.querySelector(selector)
        let style = document.createAttribute("style")
        style.value = 'display:none'
        result.setAttributeNode(style)
        // console.log(result);
      } else {
        const result = document.querySelectorAll(selector)
        result.forEach(function(value){
          let style = document.createAttribute("style")
          style.value = 'display:none'
          value.setAttributeNode(style)
          // console.log(value.attributes);
        })
      }
    },

    show: function (selector) {
      if (selector[0] === '#') {
        const result = document.querySelector(selector)
        let style = document.createAttribute("style")
        style.value = 'display:block'
        result.setAttributeNode(style)
        // console.log(result);
      } else {
        const result = document.querySelectorAll(selector)
        result.forEach(function(value){
          let style = document.createAttribute("style")
          style.value = 'display:block'
          value.setAttributeNode(style)
          // console.log(value.attributes);
        })
      }
    },

    addClass: function (selector, newClass) {
      const result = document.querySelectorAll(selector)
      result.forEach(function(value){
        value.classList.add(newClass)
      })
    },

    removeClass: function (selector, newClass) {
      const result = document.querySelectorAll(selector)
      result.forEach(function(value){
        value.classList.remove(newClass)
      })
    }
  },
  EventDispatcher: {
    on: function (selector, action, callback) {
      const target = document.querySelector(selector)
      target.addEventListener(action, callback, false)
    },

    trigger: function (selector, action) {
      const target = document.querySelector(selector)
      target.dispatchEvent(new Event(action))
    }
  },
  AjaxWrapper: {
    request: function (ajaxParams) {
      const xhRequest = new XMLHttpRequest();
      xhRequest.open(ajaxParams.type, ajaxParams.url, true)
      xhRequest.onload = function() {
        if (xhRequest.status >= 200 && xhRequest.status < 400) {
          // Success!
          var response = xhRequest.responseText;
          ajaxParams.success(response)
        } else {
          // We reached our target server, but it returned an error
          ajaxParams.fail()
        }
      };
      xhRequest.send()
    }
  }
}
