// Lets start by reviewing object manipulation
// Objects are a collection of data in a key value pair format
const obj = {}
const userInfo = {
  firstName: {one:"Avi",two:[{steve:"Nested Steve"},{}]},
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
const getObjBy = "project1title"

userInfo.middleName = "Bob"
// userInfo.firstName = "New Name"
obj["a"] = "Apple"
console.log(userInfo.firstName["two"][0].steve)
// console.log(userInfo)


//// We can iterate through this using a for loop!
// for(key in userInfo){
//   if(key === "firstName"){
//     for( newKey in userInfo[key]){
//       console.log(`${newKey} : ${userInfo[key][newKey]}`)
//     }
//   }
//   console.log(`${key} : ${userInfo[key]}`)
// }
// We can nest within the object as we've seen before!

// Now let us start grabbing specific data from that

// DOM Events


// Event Listeners
//* Add a eventListener to an element and log the event object

// A common event listener you will see, why is that? What does it do?
// document.addEventListener('DOMContentLoaded', () => {})
const headerh1 = document.querySelector('h1')
// Renders Header
function renderHeader(newHeader){
  headerh1.textContent = newHeader;
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

const header = document.querySelector("header")
// addEventListener(eventType,function)
header.addEventListener("mouseover",()=>{
  if(headerh1.textContent === bookStore.name){
    renderHeader(bookStore.address)
  }
  else{
    renderHeader(bookStore.name)
  }
})

const darklightButton = document.createElement('button')
darklightButton.textContent = "dark mode"
header.append(darklightButton)
darklightButton.addEventListener('click',()=>{
  // console.log(e)
  const body = document.querySelector("body")
  if (body.className === "dark-mode"){
    body.className = "light-mode"
    darklightButton.textContent = "dark mode"
  }
  else{
    body.className = "dark-mode"
    darklightButton.textContent = "light mode"
  }
})

// Let us create a function that rerenders each of the books
bookStore.inventory.forEach(renderBook)

function renderBook(book){
  const booklist = document.querySelector('#book-list')
  const li = document.createElement('li')
  const h3 = document.createElement('h3')
  const p1 = document.createElement('p')
  const p2 = document.createElement('p')
  const img = document.createElement('img')
  h3.textContent = book.title
  p1.textContent = book.author
  p2.textContent = book.price
  img.src = book.imageUrl
  li.addEventListener("click", ()=>{
    if(img.src === book.imageUrl){
      img.src = ""
    }
    else{
      img.src = book.imageUrl
    }
  })
  const deleteButton = document.createElement('button')
  deleteButton.textContent = "Delete"
  deleteButton.addEventListener("click",()=>{
    li.remove()
  })
  li.append(h3,p1,p2,img,deleteButton)
  booklist.append(li)
}

// Add a button element to this function
// Now we can add an event listener to remove it!
const bookForm = document.querySelector("#book-form")
bookForm.addEventListener('submit',(e)=>{
  e.preventDefault()
  const newBook = {
    title: e.target.title.value,
    author: e.target.author.value,
    price: e.target.price.value,
    imageUrl: e.target.imageUrl.value,
    inventory: e.target.inventory.value
  }
  console.log(e.target)
  renderBook(newBook)
})
// Now how would we handle the form we have?

// Lets add an event listener! Make it a submit type and pass into it a function

// Now we can create a function to handle this form! We need to now use
// e.preventDefault()
// use e.target to get specific items out of the event
// now we can create a new book object!
