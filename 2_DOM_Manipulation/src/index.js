//Data 
// How would we import this?
// Well we would add 
// <script src="src/newfile.js"></script>
console.log(bookStore)

// const str ="STRING"
// str.toLowerCase()
//array methods
const arr = []
const fruits = ["Apple","Orange"]
//push adds to the end
fruits.push("Watermelon")
console.log(fruits)
//pop removes the last element
// const removedElement = fruits.pop()
// console.log(removedElement)
console.log(fruits)
//unshift adds to the start
fruits.unshift("Kiwi")
console.log(fruits)
//shift removes the first element
// const shiftedElement = fruits.shift()
// console.log(shiftedElement)
console.log(fruits)
//spread operator copies the array
const newFruits = [...fruits]
newFruits.push("Lemon")
fruits.push("Coconut")
console.log("Original: ", fruits)
console.log("New: ",newFruits)
//slice returns the array to between two indices, slice(startIndex,endIndex)
const sliced = fruits.slice(0,2)
console.log(sliced)
console.log(fruits)
//splice changes original array by removing indices, splice(startIndex,deletecount)
//splice also lets you add to the middle!
const spliced = fruits.splice(1,0,"ADDED","ADDED","ADDED","ADDED","ADDED","ADDED")
console.log(spliced)
console.log(fruits)
//length returns the length
const fruitLen= fruits.length
console.log(fruitLen)
// const obj = {
//     a: 1
// }
// obj.a
// obj["a"]

//foreach
fruits.forEach((fruit)=>{
    if (fruit === "ADDED"){
        console.log("We found the not fruit")
    }
    else{
        console.log("This is our Fruit: ", fruit)
    }
})
//map
const mapVar = fruits.map((fruit)=>{
    return 1
    // if (fruit === "ADDED"){
    //     return "Peach"
    // }
    // else{
    //     return fruit
    // }
})
// fruits.map(func)
console.log(mapVar)
function changeFruit(fruit){
    return fruit+"s"
}
const callbackMap = fruits.map(changeFruit)
console.log(callbackMap)

// Lets Create a .querySelector()!
// .getElementById
// .getElementsByClassName()
// Use .querySelectorAll to get all divs!
// We can then use .textcontent to change whats inside!
// Using .createElement we can create and set a new html element!

// Lets use .remove on a queryselector!
// And lets clear the children using inner html!


//* Create a function that uses a selector to get the header and add the bookStore name as its text content

//* Create a function that grabs all the divs form the footer and add the book store name, address, hours and/or phone number

// use a forEach to iterate over BookStore inventory.
// create li, an h3 tag, 2 p tags, and image tag.
// Add the cardData content to the tags.
// Append all elements to our li
// Append li to the DOM through the ul with the id of book-list
