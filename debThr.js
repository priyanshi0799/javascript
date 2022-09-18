const handleChange = (value) => {
    console.log("Hii", value)
}

const debounce = function(fn, timer){
    let time;
    return function(...args){
        clearTimeout(time);
        time = setTimeout(() => {
            fn.apply(this, args)
        }, timer);
    }
}

const magicFunc = debounce(handleChange, 1000);


