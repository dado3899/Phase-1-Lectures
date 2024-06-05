// Array manipulation
arr = [1,2,3,4]
fruits = ["apple","orange"]
// arr.push(5)
// arr.unshift(0)
// arr.pop()
// arr.shift()
// arrCopy = [...arr]
// arr.slice(-2)
// arr.splice(1,2)
// console.log(arr)
function mapFunc(fruit){
    
}
const mapReturn = arr.map((item)=>{
    console.log("Hello")
    if (item === 1){
        return 100
    }
    else{
        return -1
    }
}
)


// console.log(mapReturn)
const forEachReturn = arr.forEach((item)=>{
    // console.log(item)
    return item
})
// Query Selectors
const headerDiv = document.querySelector("div header div")
console.log(document.querySelector("#form-wrapper"))
console.log(document.querySelector(".list"))

const header = document.querySelector("h1")
header.textContent = "THIS IS A HEADER"
header.id = "Unique_id"

const img = document.createElement("img")
img.src = "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
headerDiv.append(img)