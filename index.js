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