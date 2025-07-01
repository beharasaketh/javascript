//objects are basic data type in js which is used to store collection of key:value pairs , it is mainly used to group related data together
/* we can create objects in 4 different apporaches 
    object literal
    new reference
    function constructor 
    class*/
//OBJECT LITERAL
/*var key = {
    studentName: "Saketh",
    studentId:"419",
    studentSection: "B",
}
console.log(key.studentName.split("").join(""))*/


/*OBJECT USING NEW REFERENCE 
let key = new Object();
key.studentName = "Saketh"
key.studentId = "Sake419"
key.studentName = "behara"
console.log(key)*/

/*
function student(name,id,clas ){
    this.name = name
    this.id = id
    this.clas = clas

}
let s1 = new student("Saketh","419","10th")
let s2 = new student("sai","429","10th")
let s3 = new student("behara","439","10th")
let arr = [s1,s2,s3]
for (i of arr){
    console.log(i)
}*/

/*
function student(name,id,address, branch){
    this.name = name;
    this.id = id;
    this.address = address
    this.branch = branch
}

var s1 = new student("saketh","419","vizag","ECE");
var s2 = new student("vamsi","418","chennai","cse")
var s3 = new student("akhil","459","mumbai","cse")
var s4 = new student("raj","416","chennai","cse")
let arr = [s1,s2,s3,s4]
let newArr = []
for(let a of arr){
    if(a.address == "chennai"){
        newArr.push(a);
    }
}
console.log(newArr)
*/

/*
function student(name,id,address, branch){
    this.name = name;
    this.id = id;
    this.address = address
    this.branch = branch
}

var s1 = new student("saketh","419","vizag","ECE");
var s2 = new student("vamsi","418","chennai","cse")
var s3 = new student("akhil","459","mumbai","cse")
var s4 = new student("raj","416","chennai","cse")
let arr = [s1,s2,s3,s4]

for(let a of arr.name){
    for(let key in a){
        console.log(key+ ":"+ a[key])
    }
}*/

//object methods 

var student = {
    sfirstName: "Saketh",
    sLastName:"behara",
    sAddress: "vizag",
    sMark:"90%",
    sFullname:function(location, fatherName ){
        return this.sfirstName +" " +  this.sLastName + " from "+ location + " . Father name is" + fatherName;
    }
}
console.log(student.sFullname(" vizag"))
//function call
var student2 = {
    sfirstName:"vamsi",
    sLastName:"mamidi",
}
console.log(student.sFullname.call(student2," hyd"," john"))

//function apply

var student3 = {
    sfirstName:"akhil",
    sLastName:"potnuru",
}
console.log(student.sFullname.apply(student3,["hyd"," wick"]))

//function bind

var student4 ={
    sfirstName:"bhaskar",
    sLastName:"chitturi",
}

const newvar = student.sFullname.bind(student4,"mumbai"," balaerina");
console.log(newvar())
// function call is for immmediate execution . the arguemnets are divided by comma 
// function apply is for immedidate exectuion . the arguments are given in array 
// function bind is for later execution. it creates new function