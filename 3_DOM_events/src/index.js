// document.addEventListener('DOMContentLoaded', () => {
// Lets start by reviewing object manipulation
// Objects are a collection of data in a key value pair format
const obj = {}
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
  nested_example: {
    a: "a",
    b: "b"
  }
};

// We can use . or brackets in order to get different keys from the data
const key_example = "friend1jobTitle"
console.log(userInfo.firstName)

console.log(userInfo[key_example])
// We can iterate through this using a for loop!
let saved_key
for(let key in userInfo){
  // console.log(key)
  // console.log(userInfo[key])
  if (userInfo[key] === "Nancy"){
    saved_key = key
  }
}
console.log(saved_key)

// We can nest within the object as we've seen before!
const nest = userInfo["nested_example"]
console.log(userInfo["test_key"])
userInfo["test_key"] = "A thing"
console.log(userInfo["test_key"])
// Now let us start grabbing specific data from that


// DOM Events
// Event Listeners
//* Add a eventListener to an element and log the event object

// A common event listener you will see, why is that? What does it do?
// document.addEventListener('DOMContentLoaded', () => {})

// Renders Header
function renderHeader(variable){
    document.querySelector('h1').textContent = variable;
}
// Renders Footer
function renderFooter(){
    const footerDivs = document.querySelectorAll('footer div');
    footerDivs[0].textContent = bookStore.name;
    footerDivs[1].textContent = bookStore.address;
    footerDivs[2].textContent = bookStore.hours;
}
renderHeader(bookStore.name)
renderFooter()

// Let us create a function that rerenders each of the books
const header = document.querySelector('h1')
header.addEventListener('click',(e)=>{
  console.log("Clicked ", e)
  if (header.textContent === bookStore.name){
    renderHeader(bookStore.hours)
  }
  else{
    renderHeader(bookStore.name)
  }
  
})

bookStore.inventory.forEach((book)=>{
  createBookCard(book)
})

function createBookCard(book){
  const li = document.createElement('li')
  const title = document.createElement("h3")
  const author = document.createElement("p")
  const price = document.createElement("p")
  const image = document.createElement("img")
  const del = document.createElement("button")
  del.textContent = "Delete"
  title.textContent = book.title
  author.textContent = book.author
  price.textContent = book.price
  image.src = book.imageUrl
  
  
  li.append(title,author,price,image, del)
  document.querySelector("#book-list").append(li)

  price.addEventListener('click',()=>{
    price.textContent = parseInt(price.textContent)+1
  })

  del.addEventListener('click',()=>{
    li.remove()
  })
  // li.addEventListener('mouseover',()=>{
  //   image.src = book.imageUrl
  // })
  // li.addEventListener('mouseout',()=>{
  //   image.src = ""
  // })
  li.addEventListener('click',()=>{
    if(image.src === book.imageUrl){
      image.src = ""
    }
    else{
      image.src = book.imageUrl
    }
  })
}

// Add a button element to this function
// Now we can add an event listener to remove it!


// Now how would we handle the form we have?
const form = document.querySelector("#book-form")
// Lets add an event listener! Make it a submit type and pass into it a function
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  console.log(e)

  const newBook = {
    // title: document.querySelector("#form-title").value,
    title: e.target.title.value,
    author: e.target.author.value,
    price: parseFloat(e.target.price.value),
    imageUrl: e.target.imageUrl.value,
    inventory: parseInt(e.target.inventory.value)
  }

  // console.log(newBook)
  createBookCard(newBook)
})
// Now we can create a function to handle this form! We need to now use
// e.preventDefault()
// use e.target to get specific items out of the event
// now we can create a new book object!

// })