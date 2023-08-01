// How to bring over the solution branch: 
// MAKE SURE TO HAVE GIT ADD, GIT COMMIT, and GIT PUSH
// git remote add upstream https://github.com/dado3899/Phase-1-Lectures.git
// git fetch upstream
// git checkout 073123_solutions
// git push origin 073123_solutions

// To update do the following in the 073123_solutions branch
// git pull upstream
// To avoid merge conflicts make sure to not edit this branch!

// Functions
// Regular
const varGlobal = "Hello"
let varLet = "Let"
function testFunction(var1,var2){
    const varGlobal = "Goodbye"
    console.log(varGlobal)
    console.log(var1)
    console.log(var1*var2)
}
function testFunction2(){
    // const varGlobal = "Goodbye"
    console.log(varGlobal)
    if(true){
        // console.log(varGlobal)
        const varGlobal = "In if"    
    }
    console.log("IN 2")
}
testFunction2()
varLet = varLet+" Variable"
console.log(varLet)
testFunction(5,5)
console.log(varGlobal)
// Anonomous
callfunction(function(){console.log("Inner function")})
function callfunction(innerfunction){
    console.log(innerfunction)
    innerfunction()
}

// Arrow
callfunction(()=>{console.log("Arrow Function")})

const arrowFunc = ()=>{
    console.log("Defined arrow function")
}
arrowFunc()

// Scope
// Global
// Function
// Block

// Array iteration

const fruits = ["Apple","Orange","Banana"]
fruits.push("Cantalope")
fruits.push("Melon")
const fruitTest = fruits.pop()
console.log(fruitTest)
console.log(fruits)
// for(let x=0; x<fruits.length; x++){
//     console.log(fruits[x])
// }
// (fruit)=>{console.log(fruit)}
function loopFruit(fruit){
    console.log(fruit)
    return fruit + " TO EAT"
}
fruits.forEach(loopFruit)
const mapFruit = fruits.map(loopFruit)
console.log(mapFruit)
// console.log(foreachtest)
