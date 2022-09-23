//A closure is the combination of a function bundled together (enclosed) with references 
//to its surrounding state (the lexical environment). In other words, a closure gives you 
//access to an outer function’s scope from an inner function.

//Closure is a function that allows you to access to the parent function scope, even 
//though it’s been removed from the execution context stack.


var x = 1;
function foo(y) {
  return function(z) {
    return x + y + z;	
  }
}

var f = foo(2);
console.dir(f);     //inside scope, we can see the closure= {y : 2}
//so basically, when foo is executed, it returned a new function, with a new scope object called closure
//Even though the execution context of foo was removed from the stack, 
//the referencing chains are still alive by the variable f

function outer(){
	let a = 10;
    let c = a;
    function inner(){
        a++; c++;
        console.log("first",a,c);
    }
  
    function temp(){
        c++;
        console.log("sec",c,a);
    }
    function abc(){
        console.log(c);
    }
    return [inner, temp, abc];
}

const [inner, temp, abc] = outer();
inner(); 
temp(); 
inner(); 

temp();
abc();
