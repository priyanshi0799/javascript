(function() {
    var objA = {
            foo: 'foo'
    };
    var objB = objA;
    objB.foo = 'bar';

    delete objA.foo;
    console.log(objA.foo); 
    console.log(objB.foo);
    console.log(objA, objB)
}());


var employeeId = 'abc123';

function foo() {
    employeeId = '123bcd';
    return;
}
foo();
console.log(employeeId);



let count = 0;

let a = true;

setTimeout(() => {
    a = false;  //will make a false
}, 2000);



