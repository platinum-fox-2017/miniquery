class SweetSelector {
	static select (data) {
		return document.querySelectorAll(data)
	}
}


function idSweetSelector () {
	console.log("SweetSelector.select('#eyed')");
	console.log(SweetSelector.select('#eyed'));
}

function classSweetSelector () {
	console.log("SweetSelector.select('.klass')");
	console.log(SweetSelector.select('.klass'));
}

function tagSweetSelector () {
	console.log("SweetSelector.select('a')");
	console.log(SweetSelector.select('a'));
}


class DOM {
	static hide (data) {
		return document.querySelectorAll(data).forEach( item => {
			item.style.display="none"
		})
	}
	static show (data) {
		return document.querySelectorAll(data).forEach( item => {
			item.style.display=""
		})
	}
	
	static addClass (dataAwal, dataTambahan) {
		return document.querySelectorAll(dataAwal).forEach( item => {
			item.className += ` ${dataTambahan}`
		})
	}
	
	static removeClass (dataAwal, dataTambahan) {
		return document.querySelectorAll(dataAwal).forEach( item => {
			item.className = item.className.split(dataTambahan).join('')
		})
	}
	
}

function hideDOM () {
	console.log("DOM.hide('.klasss')");
	console.log(DOM.hide('.klasss'));
}

function showDOM () {
	console.log("DOM.show('.klasss')");
	console.log(DOM.show('.klasss'));
}

function tambahKelas () {
	console.log(`DOM.addClass('.kelas', 'shadi')`);
	console.log(DOM.addClass('.kelas', 'shadi'));
	console.log(document.querySelectorAll('.kelas'));
}

function kurangKelas () {
	console.log(`DOM.removeClass('.kelas', 'shadi')`);
	console.log(DOM.removeClass('.kelas', 'shadi'));
	console.log(document.querySelectorAll('.kelas'));
}

class EventDispatcher {
	static on (dataAwal, dataTambahan) {
		return  
	}
	
	
	static trigger (dataAwal, dataTambahan) {
		console.log('Awesome');  
	}
}

function clickEvent () {
	
}


let AjaxWrapper = {
	request: (object) => {
		let url = new XMLHttpRequest() 
		url.open(object.type, object.url)
		url.onload = function () {
			if (url.status == 200) {
				object.success(url.responseText)
			}	else {
				object.fail()
			}
		}
		url.send()
		console.log("url : ",url);
	}
}

function demoAjax() {
	console.log("masuk");
	AjaxWrapper.request({
		url: 'http://localhost:3000/',
		type: 'GET',
		success: function(data) {
			console.log("Success: ", data)
		},
		fail: function() {
			console.log("ERROR")
		}
	})
}


