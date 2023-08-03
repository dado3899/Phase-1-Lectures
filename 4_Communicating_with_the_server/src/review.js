// Array manipulation
const array = [
    {a:1,b:2},
    {a:3,b:2},
    {a:5,b:2}
]
const filteredarray = array.filter((obj)=>{
    if(obj.a === 5){
        return false
    }
    return true
})
console.log(filteredarray)
// Query Selectors
const header = document.querySelector("#header header div h1")
console.log(header)
header.textContent = "TEXT TO PRESS"

header.addEventListener("mouseover",()=>console.log("Hello"))

const form = document.querySelector("#book-form")

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     console.log(document.querySelector("#form-title").value)
//     console.log("IN submit")
//     console.log(e.target.title.value)
// })
// Slice vs splice mistakes!
const slicetest = [0,1,2,3,4,5]
console.log(slicetest.slice(1,5))
console.log(slicetest)
slicetest.splice(1,4)
console.log(slicetest)
// Slice does not mutates it returns the items
// Splice mutates the original array cutting out the spliced items 