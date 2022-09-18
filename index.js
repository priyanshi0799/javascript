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



//! Promises
// Promise is a special javascript object that links the producing and consuming code together
// the producing code takes whatever time it needs to produce the output, and then returns the 
// produced code to the consumer.

let flag = false;
let promise = new Promise((resolve, reject) => {
    //...executor
    if(flag){
        resolve(10);
    }else{
        setTimeout(() => {
            reject('Oops! Some error has occured.');
        },2000)  ;
    }
})

console.log(promise);   //this promise object has following internal properties
                        //initially -> pending with undefined value
                        //if success -> fulfilled with resolve value
                        //if failed -> rejected with error value

//Now these properties are internal which cant be accessed directly, so then, catch and finally are used.

promise
    .then((value) => console.log(value))
    .catch((error) => console.log(error));

//!then
//Also, then takes two callbacks, one for success and one for failure, so above one can also be written as:
promise.then((value) =>  console.log(value), (error) => console.log(error));
//if we are interested only in successful completion then we can provide only one callback to then,
//if only failed one, then first argument will be null or we can use catch.

//!finally
//Now just like we have finally in try catch block, we have finally in promises as well.
//finally will always run, when the promise is settled(resolved or rejected).
//finally takes void callback as an argument
//it doesn't know whether the promise is resolved or rejected
//it doesn't return anything, and even if it does, the returned value is ignored while execution.
//if finally throws an error, it goes to nearest error handler.

promise
    .then((value) => console.log(value))
    .catch((error) => console.log(error))
    .finally(() => console.log("Hey! Finally ;)", promise));

