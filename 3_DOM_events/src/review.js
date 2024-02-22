// Array manipulation
const arr = []

arr.push({val: "string"})
arr.push({val: "Another"})
arr.push({val: "Another1"})
arr.push({val: "Another2"})
arr.push({val: "Another3"})
console.log(arr)
const slice = arr.slice(1,4)
// console.log(slice)
// arr.splice(2,2)
// console.log(arr)

arr.forEach((obj)=>{
    // obj.val = "Example"
    console.log(obj)
})
// console.log(arr)
const mappedArr = arr.map((obj)=>{
    if (obj.val === "string" ){
        return 0
    }
    return obj.val
})
console.log(mappedArr)

// Query Selectors
const h1 = document.querySelector("div header div h1")

const byId = document.querySelector("#form-wrapper")
const byClass = document.querySelector(".list footer")

// byId.remove()
// byId.innerHTML = ""

h1.textContent = bookStore.name

const li = document.createElement("li")
const div = document.createElement("div")
div.textContent = "Test"

const ul = document.querySelector("#book-list")
li.append(div)
ul.append(li)

const body = document.querySelector("body")
body.className = "light-mode"

const selectbyClass = document.querySelector(".light-mode")
console.log(selectbyClass)

