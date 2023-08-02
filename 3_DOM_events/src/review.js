// Array manipulation
const array = [10,0,2,50]
array.push(2)
// console.log(array)
array.pop()
// console.log(array)
const newArray = [...array]
array.push(50)
array.pop()
// console.log(newArray)
// console.log(array)
// [10,   20 ,  30 ,  5]
// [true,false,false,true]
const filteredArray = array.filter((num)=>{
    // return num < 15
    // console.log(num===15)
    if(num<15){
        console.log("Failed number ",num)
        return false
    }
    return true
})

// same as above
const filteredArray2 = array.filter((num)=>num<15) 
console.log(filteredArray)
console.log(filteredArray2)
// Query Selectors
const banner = document.querySelector("#banner")
// const banner2 = document.getElementById('banner')
// banner.textContent = ""
// const header = document.querySelector("#header")
// header.textContent = ""

// Select subsets
// document.querySelector() we can chain selectors by putting spaces
// "#header header div"
const h1 = document.querySelector("#header header div")
// const empty = document.querySelector("")
// h1.textContent = "hello"
console.log(h1)

const div = document.createElement("div")
div.textContent = "NEW DIV"
div.id = "new_id"
h1.append(div)

console.log(h1)

