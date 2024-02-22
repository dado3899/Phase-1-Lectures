//Data 
// How would we import this?
// Well we would add 
// <script src="src/newfile.js"></script>
// console.log(bookStore)

// const str ="STRING"
// str.toLowerCase()
//array methods
const arr = []
const fruits = ["Apple","Orange"]
//push adds to the end
fruits.push("Watermelon")
// console.log(fruits)
//pop removes the last element
// const removedElement = fruits.pop()
// console.log(removedElement)
// console.log(fruits)
//unshift adds to the start
fruits.unshift("Kiwi")
// console.log(fruits)
//shift removes the first element
// const shiftedElement = fruits.shift()
// console.log(shiftedElement)
// console.log(fruits)
//spread operator copies the array
const newFruits = [...fruits]
newFruits.push("Lemon")
fruits.push("Coconut")
// console.log("Original: ", fruits)
// console.log("New: ",newFruits)
//slice returns the array to between two indices, slice(startIndex,endIndex)
const sliced = fruits.slice(0,2)
// console.log(sliced)
// console.log(fruits)
//splice changes original array by removing indices, splice(startIndex,deletecount)
//splice also lets you add to the middle!
const spliced = fruits.splice(1,0,"ADDED","ADDED","ADDED","ADDED","ADDED","ADDED")
// console.log(spliced)
// console.log(fruits)
//length returns the length
const fruitLen= fruits.length
// console.log(fruitLen)
// const obj = {
//     a: 1
// }
// obj.a
// obj["a"]

//foreach
fruits.forEach((fruit)=>{
    if (fruit === "ADDED"){
        // console.log("We found the not fruit")
    }
    else{
        // console.log("This is our Fruit: ", fruit)
    }
})
//map
const mapVar = fruits.map((fruit)=>{
    console.log(fruit)
    // return 1
    // if (fruit === "ADDED"){
    //     return "Peach"
    // }
    // else{
    //     return fruit
    // }
})
// fruits.map(func)
// console.log(mapVar)
function changeFruit(fruit){
    return fruit+"s"
}
const callbackMap = fruits.map(changeFruit)
// console.log(callbackMap)

// Lets Create a .querySelector()!
const removeable = document.querySelector('#removable')
console.log(removeable)
removeable.textContent = "Don't remove this"
const header = document.querySelector('header div h2')
header.className = "list"
console.log(header)

const byClass = document.querySelector('.list')
console.log(byClass)
// .getElementById
const booklist = document.getElementById('book-list')
console.log(booklist)
// .getElementsByClassName()
const classlist = document.getElementsByClassName('list')
console.log(classlist[1])
// Use .querySelectorAll to get all divs!
const alldiv = document.querySelectorAll('div')
console.log(alldiv)
// We can then use .textcontent to change whats inside!
header.textContent = "New header text"
// Using .createElement we can create and set a new html element!
const newimg = document.createElement('img')
console.log(newimg)
newimg.src = "https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1"
booklist.append(newimg)
// Lets use .remove on a queryselector!
removeable.remove()
// And lets clear the children using inner html!
// const h = document.querySelector('header')
// h.innerHTML = ""
// console.log(h)

//* Create a function that uses a selector to get the header and add the bookStore name as its text content
const h1 = document.querySelector('header div h1')
const h2s = document.querySelectorAll('header div h2')
console.log(h1)
console.log(h2s)
h1.textContent = bookStore.name
h2s[0].textContent = bookStore.hours
h2s[1].textContent = bookStore.address

//* Create a function that grabs all the divs form the footer and add the book store name, address, hours and/or phone number
// {
//     id:7,
//     title: 'Cracking the Coding Interview',
//     author: 'Gayle Laakmann McDowell',
//     price: 49.95,
//     reviews: [{userID: 99, content:'One of the most helpful books for taking on the tech interview'}, {userID:20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
//     inventory: 20,
//     imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'

// }
bookStore.inventory.push(
    {
        id:8,
        title: "Coding with cats",
        author: "Cat",
        price: 0.00,
        reviews:[],
        inventory: 1,
        imageUrl: "https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1"
    }
)

// use a forEach to iterate over BookStore inventory.
booklist.innerHTML = ""
bookStore.inventory.forEach((book)=>{
    console.log(book)
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const img = document.createElement('img')
    h3.textContent = book.title
    p1.textContent = book.author
    p2.textContent = book.price
    img.src = book.imageUrl
    li.append(h3,p1,p2,img)
    booklist.append(li)
})
// create li, an h3 tag, 2 p tags, and image tag.
// Add the cardData content to the tags.
// Append all elements to our li
// Append li to the DOM through the ul with the id of book-list
