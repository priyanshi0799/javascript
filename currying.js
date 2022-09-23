//Currying in javascript

//Currying is when a function, instead of taking all the arguments at once, takes one,
//and returns a new function that takes the next argument and returns a new function, 
//which takes the third one, etc. until all arguments are completed.

//non curried function
function add(a,b,c){
    return a + b + c;
}

function curriedAdd(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

console.log(add(1,2,3), curriedAdd(1)(2)(3));

//advanced currying -> using closures
function advancedAdd(a){
    return function(b){
        if(b){
            return advancedAdd(a + b);
        }
        return a;
    }
}

console.log(advancedAdd(1)(2)(3)(4)(5)())

//advanced currying -> using bind
function multiply(a,b){
    return a * b;
}

//here, multiply is used to create other functions
let multiplyByTwo = multiply.bind(this, 8);
console.log(multiplyByTwo(2));