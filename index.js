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