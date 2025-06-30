//ARRAY
//ARRAY METHODS

/*push- adds element at end of the array 
let arr = [1,2,3,4,5,6]
let newarr = arr.push(7,8,9,9,10)
console.log(arr)*/

/*pop - removes element at end of the array 
let arr = [1,2,3,4,5,6]
let newarr = arr.pop()
console.log(arr)*/

/* shift - removes element at start of the array 
let arr = [1,2,3,4,5,6]
let newarr = arr.shift()
console.log(arr) */

/* unshift - adds element at start of the array 
let arr = [1,2,3,4,5,6]
let newarr = arr.unshift(8,9,10)
console.log(arr) */

/*pop - removes element at end of the array 
let arr = [1,2,3,4,5,6];
while(arr.length >1){
    arr.pop()
    console.log(arr);
}*/

/* slice - we can add or remove element at any position of an array 
let arr = [1,2,3,4,5,6];
arr.splice(1,2,14,16)
console.log(arr)*/

/*
let arr = [4,1,5,12,3,2,6];
arr.sort((a,b)=>a-b)
console.log(arr)*/

/* index of 
let arr = [1,2,3,5,6,7,8];
console.log(arr.indexOf(3)) */

/* lastindex of 
let arr = [1,24,4,5,1,2,3,1,2]
console.log(arr.lastIndexOf(2))*/


/*FOREACH
let arr = [1,2,3,5,6,7,8]
arr.forEach((i)=>console.log(i*2))

let arr = [1,2,3,4,5,6];
arr.forEach((val,index,arr)=> {arr[index]= val*2});
console.log(arr)*/

/*MAP
let arr = [1,2,3,4,5,6];
let out = arr.map(i=>i*2)
console.log(out) */

/* filter
let arr = [1,2,3,4,5,6]
let out = arr.
filter(i=>
{if (i%2==0) console.log(true);});
console.log(out)
*/

/*reduce 
let arr = ["java ","is ","a ", "programming ", "language "]
let newarr = arr.reduce((acc,i)=>acc+i);
console.log(newarr)
*/

/*find
let arr = [1,2,3,6,4,5,6,7,8]
console.log(arr.find((i)=>i==6))*/

/*
let arr = [1,2,3,6,4,5,6,7,8]
console.log(arr.findIndex((i)=>i==6))*/


/* JOIN
let arr = [1,2,3,4,5,6,7,8]
console.log(arr.join("")) */