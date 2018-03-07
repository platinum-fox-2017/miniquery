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
}

function hideDOM () {
	console.log("DOM.hide('.klasss')");
	console.log(DOM.hide('.klasss'));
}

function showDOM () {
	console.log("DOM.show('.klasss')");
	console.log(DOM.show('.klasss'));
}