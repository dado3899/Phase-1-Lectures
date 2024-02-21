// Functions
const r1 = funcExample(10)
function funcExample(x){
    console.log(x)
    return x + " Hi"
}
// x = 10
// x = dog
const r2d2 = funcExample("Dog")
console.log(r1,r2d2)
// Regular
// Anonomous
const anon = function(){
    console.log("In anon")
}
anon()
// Arrow
console.log(
    () => {
        console.log("Arrow")
    })

// Scope
// Global
const glob = "Global"
// Function
function funcScope(){
    const func = "Function"
    if(book.price<10 && book.inventory>0 ){
        const ifVar= "If"
        console.log(ifVar)
        if(true){
            const if2 = "If2"
            console.log(if2)
        }
    }
}
funcScope()
// console.log(func)
// Block