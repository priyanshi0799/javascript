function stack(){
    let arr = []
    return {
        push: function(val){
            arr.push(val);
        },
        pop: function(){
            return arr.pop()
        }
    }
}

const myStack = stack();
myStack.push(1);
myStack.push(2);
myStack.pop();
myStack.push(3);