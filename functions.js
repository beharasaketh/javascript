//simple function

/*function name(a,b){
    
   console.log("hello good morning")

}
name(4,12)*/

//function with parameters and return

/*function name(a,b){
    console.log(`a = ${a}, b = ${b}`)
    let c = a;
    a = b;
    b = c;
   console.log(`a = ${a}, b = ${b}`)

}*/
//IIF(immediately invoked functions):
/*(function(){
    console.log("hello good morning")
})()

IIF IS USED WHEN WE DONT WANT TO POLLUTE THE VARIABLE TO THE GLOBAL SPACE*/

// FUNCTION EXPRESSION
/*add(4,6)
let add = function(a,b){
    console.log(a+b)
}*/

//ARROW FUNCTION

/*var code = () => {
    console.log("hello world ")
};

code()*/

/*let arr = [1,2,3,4,5,6]
let squares = arr.map(i=> i*i).join(" ")
console.log(squares)*/

//SQUARE ALL EVEN NUMBERS IN AN ARRAY

/*let arr = [1,2,3,4,5,6]
let newarr = arr.filter(i => i%2 == 0).map(i=> i*i)
console.log(newarr)*/

// Count How Many Words Are Longer Than 4 Characters

/*let str = "javascript is faster than java"
var arr = str.split(" ").filter(i => i.length >=4)

console.log(arr)*/
/* IMMEDIATELY INVOKED FUNCTIONS
let demo = (function(){console.log("hello world")})()
*/

/* checking odd or even using IIF function
console.log(
    ((num) => {
        if(num%2==0)
            return "even number" 
        else
            return " odd number"       
    })(13)
)
*/

/* discount program
console.log(((price,discount)=>price - (price *discount))(1000,0.2))*/

/* adding numbers in arr using IIF
let arr = ((nums)=>{
    return nums.reduce((acc,i)=>acc+i)
})([1,2,3,4,5,6,7,8,])
console.log(arr)*/

/* currying function
function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(add(2)(3)(3)) */

/*function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(add("java ")("script ")("es2024"))*/

/*function add(a){
    return function(b){
        return a*b
    }
}

console.log(add(4)(5))*/
/* discount program
function discount(price){
    return function(discount){
        return price - (price*discount)
    }
}
console.log(discount(1000)(0.2)) */

function arr(a){
    return function(b){
        return a.concat(b)
    }
}
console.log(arr([1,2,3,4,5,6])([1,2,3,4,5]))