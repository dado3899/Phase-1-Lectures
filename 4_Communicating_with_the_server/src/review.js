// Objects

const newobj = {
    one: 1,
    two: 2,
    three: {
        four: 4,
        five: [
            {
                six: 6
            },
            {
                seven: 7
            }
        ]
    }
}
console.log(newobj.one)
console.log(newobj["two"])
// console.log(newobj.three.five)
console.log(newobj.three.five[1].seven)

// Understanding ifs
const test = null
const array = [1,2,3]
for(let i=0; i<array.length; i++){
    if(test === array[i] || test ===2){
        console.log("within for loop if")
    }
}
 if(array.length > 0){
    console.log("Test exists")
 }