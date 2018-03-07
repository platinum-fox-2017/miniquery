const SweetSelector = {
    select: (option) => {
        switch(option[0]) {
            case '#': 
                let resId = document.getElementById(option.slice(1));
                console.log(resId);
                break;
            case '.': 
                let resClass = document.getElementsByClassName(option.slice(1));
                console.log(resClass);
                break;
            default:
            console.log(option)
                let resTag = document.getElementsByTagName(option)
                console.log(resTag);
                break;
        }
    }
}


