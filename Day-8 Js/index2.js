// function - function can be used whenever same code wee need

// 1. function declaration
// add function
function add(){
    console.log(5+5)
}

add()
// multiplication function
function multiply(){
    a=5
    b=10
    console.log(a*b)
}

multiply()

// sub function
function sub(a,b){
    console.log(a-b)
}

sub(10,5) // arguments

function area(l,b){
    return l*b
}

const x = area(5,7)
console.log(x)

// arrays - it holds an sequence of items
// ---- it can hold any datatype in js arrays

// 1. array declaration
const arr = [1,"ram",true] // index value - starts from [0] 
           // [0, 1, 2] - index value
 console.log(arr)

// 2. array accessing
console.log(arr[1])

// 3. array modification
arr[1] = "sita"
console.log(arr[1])

// 4. finding array length
console.log(arr.length) // position value starts from 1
            // 1,2,3

// 5. push
console.log(arr.push(5)) //push add the value in last
console.log(arr)

// 6. pop
console.log(arr.pop()) // remove the value from last
console.log(arr)



//objects - is a collecton of properties
// - properties in the name of key value pairs

// 1. object declaration
const obj = {
    name:"sam", // key value always must be unique
    age:20
}
console.log(obj)

// 2. identifiers - like set of rules
// properties - like keys
// values - like values
// valid , invalid
// valid it can be like firstname, $firstname, _firstname, firstname12
// invalid it cannot be like 1firstname, firstname 1

//  how to access objects - 2ways
// 1. dot notation
// 2. bracket notation

// 1. dot notation
let person = {
    name:"sam",
    age:20,
    number:12345
}

console.log(person.age)
console.log(person.name)
console.log(person.number)

// 2. Bracket notation
console.log(person["number"])
console.log(person["name"])


// how to modify element in object
person["age"] = 18
console.log(person)

person.name = "ravi"
console.log(person.name)

//  how add element in object
person.address = "chennai"
console.log(person)


// how to delete element in object
delete person.address
console.log(person)

// how access array with in object

let college = {
    name:"srm",
    location:"chennai",

    courses:["cse","it","mathematics"] //array
}

console.log(college.courses[1])

// accessing objects with in a object

let student = {
    name:"ravi",
    age:18,

    address:{
        city:"chennai",
        state:"tamilnadu"
    }
}
console.log(student.address.city)

//object with function

let person1 = {
    name:"ravi",
    age:18,

    run:function(){
        console.log("running");
    }
    
}
console.log(person1.run())
