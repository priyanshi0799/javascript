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


const handleClick = (val) => {
    console.log("Hii", val);
}

const throttling = function(fn, timer){
    let flag = true;
    return function(...args){
        if(flag){
            fn.apply(this, args);
            flag = false;

            setTimeout(() => {
                flag = true
            }, timer);
        }

        
    };
};

const magicClick = throttling(handleClick, 3000);