// Lets start by reviewing object manipulation
// Objects are a collection of data in a key value pair format
const obj = {
  key1: {
    fname: "Bob",
    lname: "Bobberton",
    func: (data)=>console.log("Internal ", data)
  },
  key2: (data)=>console.log(data)
}
const userInfo = {
  firstName: "Avi",
  lastName: "Flombaum",
  companyName: "Flatbook Labs",
  jobTitle: "Developer Apprentice",
  friend1firstName: "Nancy",
  friend1lastName: "Burgess",
  friend1companyName: "Flatbook Labs",
  friend1jobTitle: "Developer Apprentice",
  friend2firstName: "Corinna",
  friend2lastName: "Jackson",
  friend2companyName: "Flatbook Labs",
  friend2jobTitle: "Senior Developer",
  project1title: "Flatbook",
  project1description:
    "The premier Flatiron School-based social network in the world.",
  project2title: "Scuber",
  project2description:
    "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
};
// We can use . or brackets in order to get different keys from the data
//// We can iterate through this using a for loop and .keys/.values!
userInfo["firstName"] = "New name"
console.log(userInfo["firstName"])
// console.log(Object.values(userInfo))
const keyArray = []
for(key in userInfo){
  keyArray.push(key)
  // console.log(`${key} | ${userInfo[key]}`)
}
// console.log(keyArray)

// We can nest within the object as we've seen before!
// obj["key1"].func("NEW DATA")
// Now let us start grabbing specific data from that
console.log(bookStore)
// DOM Events

// Event Listeners
//* Add a eventListener to an element and log the event object
// const header = document.querySelector("#header")
// const h1 = document.querySelector("#header header div h1")
// let counter = 0
// h1.textContent = counter 

// header.addEventListener('click',()=>{
//   counter += 1
//   h1.textContent = counter
// })
// A common event listener you will see, why is that? What does it do?
// document.addEventListener('DOMContentLoaded', () => {
//   console.log("Hello")
// })
// console.log(obj.values())

console.log("Outside domcontentloaded")
// Renders Header
function renderHeader(){
  const header = document.querySelector('h1')
  header.textContent = bookStore.name;
  header.addEventListener("click",(event)=>{
    // console.log(event)
    if (header.textContent ===bookStore.name){
      header.textContent = bookStore.address
    }
    else{
      header.textContent = bookStore.name
    }
  })
}
// Renders Footer
function renderFooter(){
    const footerDivs = document.querySelectorAll('footer div');
    footerDivs[0].textContent = bookStore.name;
    footerDivs[1].textContent = bookStore.address;
    footerDivs[2].textContent = bookStore.hours;
}
renderHeader()
renderFooter()

// Let us create a function that rerenders each of the books
bookStore.inventory.forEach((book)=>createCard(book))

function createCard(book){
  const div = document.createElement("div")
  const h3 = document.createElement("h3")
  const p = document.createElement("p")
  const img = document.createElement("img")
  const button = document.createElement("button")

  h3.textContent = book.title
  p.textContent = book.author
  img.src = book.imageUrl
  button.textContent = "DELETE"

  div.append(h3,p,img,button)
  const bookList = document.querySelector("#book-list")
  bookList.appendChild(div)
  
  button.addEventListener("click", ()=>div.remove())
}

const bookForm = document.querySelector("#book-form")
bookForm.addEventListener("submit", (event)=>{
  event.preventDefault()
  const bookObj = {
    title: event.target.title.value,
    author: event.target.author.value,
    price: event.target.price.value,
    inventory: event.target.inventory.value,
    imageUrl: event.target.imageUrl.value
  }
  createCard(bookObj)
  bookStore.inventory.push(bookObj)
  console.log(bookStore)
})
// Add a button element to this function
// Now we can add an event listener to remove it!


// Now how would we handle the form we have?

// Lets add an event listener! Make it a submit type and pass into it a function

// Now we can create a function to handle this form! We need to now use
// e.preventDefault()
// use e.target to get specific items out of the event
// now we can create a new book object!