/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 class SweetSelector {
 		static select(data){
 			if (data[0]=='#') {
 				let result = data.split('')
 				result.splice(0, 1)
 				result = result.join('')
 				return document.querySelectorAll(data)
 			} else if (data[0]=='.') {
 				let result = data.split('')
 				result.splice(0, 1)
 				result = result.join('')
 				return document.getElementsByClassName(data);
 			} else {
 				return document.getElementsByTagName(data)
 			}

 		}
 	}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
 class DOM{
  	static hide(data){
  		let result = data.split('')
  		if (data[0]=='#') {
 			result.splice(0, 1)
 			result = result.join('')
 			let elementId = document.querySelectorAll(data)
 			for (var i = elementId.length - 1; i >= 0; i--) {
 				elementId[i].style.display = 'none'
 			}
 		} else if (data[0]=='.') {
 			result.splice(0, 1)
 			result = result.join('')
 			let elementsClass = document.querySelectorAll(data)
 			for (var i = elementsClass.length - 1; i >= 0; i--) {
 				elementsClass[i].style.display = 'none'
 			}
 		} else {
 			let elementTag = document.querySelectorAll(data)
 			for (var i = elementTag.length - 1; i >= 0; i--) {
 				elementTag[i].style.display = 'none'
 			}
 		}
  	}
  	static show(data){
  		let result = data.split('')
  		if (data[0]=='#') {
 			result.splice(0, 1)
 			result = result.join('')
 			let elementId =  document.querySelectorAll(data)
 			for (var i = elementId.length - 1; i >= 0; i--) {
 				elementId[i].style.display = ''
 			}
 		} else if (data[0]=='.') {
 			result.splice(0, 1)
 			result = result.join('')
 			let elementsClass = document.querySelectorAll(data)
 			for (var i = elementsClass.length - 1; i >= 0; i--) {
 				elementsClass[i].style.display = ''
 			}
 		} else {
 			let elementTag = document.querySelectorAll(data)
 			for (var i = elementTag.length - 1; i >= 0; i--) {
 				elementTag[i].style.display = ''
 			}
 		}
  	}
  	static removeClass(data, nameClass){
  		let result = data.split('')
  		if (data[0]=='#') {
 			result.splice(0, 1)
 			result = result.join('')
 			let elementId = document.querySelectorAll(data)
 			for (var i = elementId.length - 1; i >= 0; i--) {
 				elementId[i].className = data;
 			}
 		} else if (data[0]=='.') {
 			result.splice(0, 1)
 			result = result.join('')
 			let elementsClass = document.querySelectorAll(data)
 			for (var i = elementsClass.length - 1; i >= 0; i--) {
 				elementsClass[i].className = data;
 			}
 		} else {
 			let elementTag = document.querySelectorAll(data)
 			for (var i = elementTag.length - 1; i >= 0; i--) {
 				elementTag[i].className = data;
 			}
 		}
  	}
  	static addClass(data, nameClass){
  		let result = data.split('')
  		if (data[0]=='#') {
 			result.splice(0, 1)
 			result = result.join('')
 			let elementId = document.querySelectorAll(data)
 			for (var i = elementId.length - 1; i >= 0; i--) {
 				elementId[i].className += ` ${nameClass}`;
 			}
 		} else if (data[0]=='.') {
 			result.splice(0, 1)
 			result = result.join('')
 			let elementsClass = document.querySelectorAll(data)
 			for (var i = elementsClass.length - 1; i >= 0; i--) {
 				elementsClass[i].className += ` ${nameClass}`;
 			}
 		} else {
 			let elementTag = document.querySelectorAll(data)
 			for (var i = elementTag.length - 1; i >= 0; i--) {
 				elementTag[i].className += ` ${nameClass}`;
 			}
 		}
  	}
  }

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
 class EventDispatcher{
 	static on(data, event, functions){
 		let result = data.split('')
  		if (data[0]=='#') {
 			result.splice(0, 1)
 			result = result.join('')
 			let elementId = document.querySelectorAll(data)
 			for (var i = elementId.length - 1; i >= 0; i--) {
 				elementId[i].addEventListener(event, functions)
 			}
 		} else if (data[0]=='.') {
 			result.splice(0, 1)
 			result = result.join('')
 			let elementsClass = document.querySelectorAll(data)
 			for (var i = elementsClass.length - 1; i >= 0; i--) {
 				elementsClass[i].addEventListener(event, functions)
 			}
 		} else {
 			let elementTag = document.querySelectorAll(data)
 			for (var i = elementTag.length - 1; i >= 0; i--) {
 				elementTag[i].addEventListener(event, functions)
 			}
 		}
 	}
 }

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
 class AjaxWrapper{
 	static request(){
 		var request = new XMLHttpRequest();
 		request.open(`GET`, `http://http://127.0.0.1:8080`, true);

 		request.onload = function() {
 		  if (request.status >= 200 && request.status < 400) {
 		    // Success!
 		    var resp = request.responseText;
 		    console.log("Success: ", resp)
 		  } else {
 		    console.log("ERROR")
 		  }
 		};

 		request.onerror = function() {
 		  console.log("ERROR")
 		};

 		request.send();
 	}
 }

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
 class Miniquery {
 	constructor(data){
 		this.data = data
 	}
 	hide(){
 		DOM.hide(this.data)
 	}
 	show(){
 		DOM.show(this.data)
 	}
 }

 const miniquery = (data) => {
 	let newminiquery = new Miniquery(data);
 	return newminiquery;
 }

 const $ = miniquery;
