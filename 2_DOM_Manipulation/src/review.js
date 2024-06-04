// Functions
function sayHello(name){
    console.log(`Hello ${name},welcome`)
}
// Regular
// Anonomous
console.log(function (a,b){
    return a+b
})
// Arrow
console.log((a,b)=>{
    return a+b
})

// Scope
// Global
var glob = "Global"
// Function
function sayHelloAgain(name){
    console.log(`Hello ${name},welcome`)
}
sayHelloAgain("Dillon")
// Block
let printString
num = 10
if(num > 5){
    printString = "Greater then 5"
}
else{
    printString = "Less then 5"
}

console.log(printString)

