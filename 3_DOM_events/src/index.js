// Lets start by reviewing object manipulation
// Objects are a collection of data in a key value pair format
const obj = {}

const arr = [1,2,3]
// We can use . or brackets in order to get different keys from the data
console.log(userInfo["firstName"])
console.log(userInfo.firstName)
for(let i = 1; i <= 2; i++){ 
  console.log(userInfo[`friend${i}firstName`])
  console.log(arr[i-1])
}

// We can iterate through this using a for loop!
for(key in userInfo){
  console.log(userInfo[key])
}
userInfo["middleName"] = "B"
console.log(userInfo)
// We can nest within the object as we've seen before!
const userInfo2 = {
  firstName: "Avi",
  lastName: "Flombaum",
  companyName: "Flatbook Labs",
  jobTitle: "Developer Apprentice",
  friend: [{
    firstName:"Nancy",
    lastName: "Burgess"
  },
  {
    firstName:"Corinna",
    lastName:"Jackson"
  }
  ],
  project1title: "Flatbook",
  project1description:
    "The premier Flatiron School-based social network in the world.",
  project2title: "Scuber",
  project2description:
    "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
}

// Now let us start grabbing specific data from that
const friendArray = userInfo2["friend"]
console.log(friendArray)
const f1 = friendArray[0]
console.log(f1)
const f1name = f1.firstName
console.log(f1name)
console.log(userInfo2["friend"][0].firstName)

// DOM Events

// Event Listeners
// Add a eventListener to an element and log the event object

// A common event listener you will see, why is that? What does it do?
document.addEventListener('DOMContentLoaded', () => {
  const h1 = document.querySelector("h1")
  h1.addEventListener('click',()=>{
    if(h1.textContent==="REVEALED"){
      h1.textContent ="REVEALED2"
    }
    else if (h1.textContent==="REVEALED2"){
      renderHeader()
    }
    else{
      h1.textContent = "REVEALED"
    }
  })
  console.log(h1)
  // const bookStore = {}
  console.log(bookStore)
  function renderHeader(){
    document.querySelector('h1').textContent = bookStore.name;
  }
  // Renders Footer
  function renderFooter(){
    const footerDivs = document.querySelectorAll('footer div');
    footerDivs[0].textContent = bookStore.name;
    footerDivs[1].textContent = bookStore.address;
    footerDivs[2].textContent = bookStore.hours;
  }

  const booklist = document.querySelector("#book-list")

  // Figure where/what event listener
  const form = document.querySelector("#book-form")
  // console.log(form)
  form.addEventListener('submit', (event)=> {
    event.preventDefault()
    const newBook = {
      title: event.target.title.value,
      author: event.target.author.value,
      price: event.target.price.value,
      imageUrl: event.target.imageUrl.value,
      inventory: event.target.inventory.value,
      reviews: []
    }
    // console.log(newBook)
    addBook(newBook)
  })
  // .addEventListener('submit', ()=> )

  bookStore.inventory.forEach((book)=>addBook(book))

  function addBook(book){
    //creating elements
    const li = document.createElement("li")
    const title = document.createElement("h3")
    const author = document.createElement("p")
    const price = document.createElement("p")
    //<img></img>
    const img = document.createElement("img")
    // Create a button
    const button = document.createElement("button")
    // Assign elements
    title.textContent = book.title
    author.textContent = book.author
    price.textContent = book.textContent
    img.src = book.imageUrl
    button.textContent = "Delete"
    // Showing off attaching classes
    li.className = "List-Element"
    //attatch elements to li
    li.append(title,author,price,img, button)
    //create and attatch the review/s
    book.reviews.forEach((review)=> {
      const newReview = document.createElement("p")
      newReview.textContent = review.content
      // DONE DO BELOW
      // li.append(document.createElement("p").textContent=review.content)
      li.append(newReview)
    })
    // On click remove li
    button.addEventListener('click',()=> li.remove())
    // append to booklist
    booklist.append(li)
  }

  renderHeader()
  renderFooter()


})

// Renders Header

// Let us create a function that rerenders each of the books

// Add a button element to this function
// Now we can add an event listener to remove it!


// Now how would we handle the form we have?

// Lets add an event listener! Make it a submit type and pass into it a function

// Now we can create a function to handle this form! We need to now use
// e.preventDefault()
// use e.target to get specific items out of the event
// now we can create a new book object!