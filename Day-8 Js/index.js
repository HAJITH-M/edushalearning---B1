// variable declaration
// 1. let - can be re-assigned
let name = "ravi"
console.log(name)
name = "s"
console.log(name)

// 2. var - can be re-assigned
var age = 20
age  = 18
console.log(age)

// 3. const - cannot be re-assigned
const pi = 3.14
// pi = 12
console.log(pi)


// scopes
// 1. global scope
// 2. local scope

// 1. global scope

{
    var a = 10
    console.log("inside", a)
}
 console.log("outside", a)

//  2. local scope
{
    let b = "person"
    console.log("inside", b)
}
//  console.log("outside:", b)

// arithmetic operations
let x = 10
let y = 20  
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)

// increment operator
// 1. pre - increment
// 2. post - increment

//  1. pre- increment
let z = 10
let y2 = ++z
console.log(y2)

//  2. post increment
z = 50
y2 = z++
console.log(y2)
console.log(z)

// if else
let g = 10
if(g===10)
    {
        console.log("yes")
    }
    else
    {
        console.log("no")
    }


const num = 10;
const str = "10";

console.log(num == str); // true - The values are the same after type conversion
console.log(num === str); // false - The values are different types and not equal