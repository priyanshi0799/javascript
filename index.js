//POLYFILLS

//code which is used to fill in the functionality which might not be provided by some browsers


const arr = [1,2,3,4,5];

//! polyfill for forEach
Array.prototype.myForEach = function(callback){
    for(let i = 0; i<this.length; i++){
        callback(this[i], i , this);
    }
}

arr.myForEach((val, index) => {
    console.log(`Element at ${index} doubled: ${val*2}`);
})

//! polyfill for map
Array.prototype.myMap = function(callback){
    let newArr = [];
    for(let i = 0; i<this.length; i++){
        newArr.push(callback(this[i], i ,this));
    }
    return newArr;
}

let outputMapArr = arr.myMap((val) => {
    return val * 2;
});
console.log(outputMapArr);

//The major difference b/w forEach and map is, map returns a new array whereas forEach returns undefined.


//! polyfill for filter
Array.prototype.myFilter = function(callback){
    let newArr = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this))
            newArr.push(this[i])
    }
    return newArr;
}

let outputFilterArr = arr.myFilter((val) => val % 2 === 0);
console.log(outputFilterArr)

//! polyfill for reduce
Array.prototype.myReduce = function(callback, initialValue){
    let accumulator;
    let firstIndex;

    if(arguments.length === 1){
        accumulator = this[0];
        firstIndex = 1;
    }else{
        accumulator = initialValue;
        firstIndex = 0;
    }

    for(let i = firstIndex; i < this.length; i++){
        accumulator = callback(accumulator, this[i], i);
    }
    return accumulator;
}

let outputReduceArr = arr.myReduce((a,b) => a+=b , 0);
console.log(outputReduceArr);



const myName = {
    fName: 'Priyanshi',
    lName: 'Gupta'
}

function printMyName(callee, city, country){
    console.log(`Called with ${callee}, ${this.fName} ${this.lName}, ${city} - ${country}`);
}

//! polyfill for call, apply and bind methods
//using the call and apply methods, we can borrow functions from other objects and use them with the data of some other objects.
//the only difference between call and apply is, call takes comma separated arguments, whereas,
//apply takes an arraylist as the argument

//Actual Call
printMyName.call(myName, 'Actual Call', 'Noida', 'India');

//Polyfill for Call
Function.prototype.myCall = function(context, ...args){
    context.fn = this;
    context.fn(...args);
}
printMyName.myCall(myName, 'Polyfill call', 'Noida', 'India');

//Actual apply
printMyName.apply(myName, ['Actual Apply', 'Noida', 'India']);

//Polyfill for Apply
Function.prototype.myApply = function(context, arg){
    context.fn = this;
    context.fn(...arg);
}
printMyName.myApply(myName, ['Polyfill Apply', 'Noida', 'India']);

//bind is slightly different from call and apply.
//bind actually binds the method with the object and returns us the copy of that method, so that we can invoke it later.
//its beauty is, we can add even more arguments to the returned function.

//Actual bind
const res = printMyName.bind(myName,'Actual Bind', 'Noida');
res('India');

//Polyfill for bind
Function.prototype.myBind = function(...args){
    let fn = this;
    return function(...args2){
        fn.apply(args[0], [...args.slice(1), ...args2]);
    }
}

const res2 = printMyName.myBind(myName, 'Polyfill Bind');
res2('Noida', 'India');