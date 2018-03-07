const sweetSelector = {

    select: (data) => {
        if (data[0] === '#') {
            const x = document.getElementById(data.slice(1))
            console.log(x)
        } else if (data[0] === '.') {
            const x = document.getElementsByClassName(data.slice(1))
            console.log(x[0])
        } else {
            const x = document.getElementsByTagName(data)
            console.log(x[0])
        }
    }
}

sweetSelector.select("#eyed")
sweetSelector.select(".klass")
sweetSelector.select('a')