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
