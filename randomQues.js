//Array to object
const arr = [
    {id: 1, val: ['a', 'b', 'c']},
    {id: 2, val: ['d', 'e', 'f']},
    {id: 3, val: ['g', 'h', 'i']},
];

const obj = arr.reduce((acc, value) => {
    return {
        ...acc, [value.id] : value.val
    }
},{})

console.log(obj);

//-------------------------------------------------------------------------------------

/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

let ob = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

const findPath = (object, path) => {
    let pathArr = path.split('.');
    let ob = {...object};
    let length = pathArr.length;

    for(let i = 0; i<length; i++){
        if(ob.hasOwnProperty(pathArr[i])){
            ob = ob[pathArr[i]];
        }else{
            ob = undefined;
            break;
        }
    }
    return ob;
}

console.log(findPath(ob, 'a.b.c'));
console.log(findPath(ob, 'a.b')); 
console.log(findPath(ob, 'a.b.d')); 
console.log(findPath(ob, 'a.c')); 

//----------------------------------------------------------------------------------------
//Flat the array
let arrFlat = [[1,2,3],[4,5,[6,7,8,[1,2,3],9]],[10,11,12],13,14];
let res = [];
function flatArr(arr){
    arr.forEach(element => {
        if(Array.isArray(element)){
            flatArr(element)
        }else{
            res.push(element)
        }
    });
}
flatArr(arrFlat)
console.log(res);

res = [];

//flat the array based on depth
function flatArrDepth(arr,depth){
    arr.forEach(element => {
        if(Array.isArray(element) && depth > 0){
            flatArrDepth(element, depth - 1)
        }else{
            res.push(element)
        }
    });
}

flatArrDepth(arrFlat,2);
console.log(res);

//----------------------------------------------------------------------------------------
//Question -> predict the output
//here, let x = y = 0; is not equal to, let x = 0; let y = 0;
//rather, it is equal to, y = 0; let x = y;
//so, by default y is assigned var, hence global scoped, whereas, x is let so, function scoped

function foo() {
    let x = y = 0;
    x++;
    y++;
    return x;
}

console.log(foo(), typeof x, typeof y);



//-----------------------------------------------------------------------------------------
//cal(2).add(3).add(1).sub(3).mul(2).val()
let cal = (inp) => {
	return {
        inp: inp,
        add: function(a){
                this.inp = this.inp + a;
                return this;
        },
        sub: function(b){
                this.inp = this.inp-b;
                return this;
        },
        mul: function(c){
                this.inp =  this.inp*c;
                return this;
        },
        val: function(){
                return this.inp;
        }
    }
}

console.log(cal(2).add(3).add(1).sub(3).mul(2).val());

//----------------------------------------------------------------------------------
const test = 'Lydia Hallie';

console.log(!typeof test === 'object'); 
console.log(!typeof test === 'string');
console.log(!typeof test === false);
console.log(typeof test, !typeof test);