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