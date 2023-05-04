//Data 
// How would we import this?
// Well we would add 
// <script src="src/newfile.js"></script>
const bookStore = {
  location: "Seattle",
  address:'333 st ne Seattle wa 99999',
  number: 303999999,
  name: 'Coding Books',
  hours: 'Monday - Friday 9am - 6pm',
  inventory: [
      {
          id:1,
          title: 'Eloquent JavaScript: A Modern Introduction to Programming',
          author: 'Marjin Haverbeke',
          price: 10.00,
          reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
          inventory: 1,
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
          
      },
      {
          id:2,
          title: 'JavaScript & JQuery: Interactive Front-End Web Development',
          author: 'Jon Duckett',
          price: 45.75,
          reviews: [{userID: 15, content:'good way to learn JQuery'}],
          inventory: 2,
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
      },
      {
          id:3,
          title: 'JavaScript: The Good Parts',
          author: 'Douglas Crockford',
          price: 36.00,
          reviews: [{userID: 25, content:'I disagree with everything in this book'}, {userID: 250, content:'Only JS book anyone needs'}],
          inventory: 8,
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      },
      {
          id:4,
          title: 'JavaScript: The Definitive Guide',
          author: 'David Flanagan',
          price: 25.50,
          reviews: [{userID: 44, content:'Great intro to js book'}, {userID: 350, content:'It really is the Definitive guide'}],
          inventory: 0,
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
          
      },
      {
          id:5,
          title: 'You Don’t Know JS',
          author: 'Kyle Simpson',
          price: 6.00,
          reviews: [{userID: 76, content:'You can find this for free online, no need to pay for it!'}],
          inventory: 7,
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
      }, 
      {
          id:6,
          title: 'Learn Enough JavaScript to Be Dangerous',
          author: 'Michael Hartl',
          price: 24.00,
          reviews: [{userID: 50, content:'pretty good'}],
          inventory: 5,
          imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW'

      },
      {
          id:7,
          title: 'Cracking the Coding Interview',
          author: 'Gayle Laakmann McDowell',
          price: 49.95,
          reviews: [{userID: 99, content:'One of the most helpful books for taking on the tech interview'}, {userID:20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
          inventory: 20,
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'

      }
  ]
}

//array methods
const name = ["Tom", "Jack", "Phil", "Bill"]
// console.log(name) 
//push adds to the end
name.push("Wyatt")
// console.log(name)
//unshift adds to the start
name.unshift("Bob")
// console.log(name)
//spread operator copies the array
const newName = [...name,"jon"]
// console.log(newName)
//shift removes the first element
const shiftedName = newName.shift()
// console.log(newName)
// console.log(shiftedName)
//pop removes the last element
const popName = newName.pop()
// console.log(newName)
// console.log(popName)
//slice  returns the above but keeps the the original
const slicedName= newName.slice(1,3)
// console.log(slicedName)
// console.log(newName)
//splice changes the array to between two indices
newName.splice(1,3)
// console.log(newName)

const newObject = {
  name: ["Tom", "Jack", "Phil", "Bill"],
  test: "test"
}
newObject.name.pop()
// console.log(newObject)

// Lets Create a .querySelector()!

// const header = document.querySelector("#header")
// console.log(header)
// .getElementById
const removable = document.getElementById("removable")
// console.log(removable)
// .getElementsByClassName()
const classList = document.getElementsByClassName("list")
const classList2 = document.querySelector(".list")
// console.log(classList)
// console.log(classList2)
// Use .querySelectorAll to get all divs!
const divSelector = document.querySelector("div")
// console.log(divSelector)
const allDiv = document.querySelectorAll("div")
// console.log(allDiv)
// We can then use .textcontent to change whats inside!
removable.textContent = "HELLO"
// Using .createElement we can create and set a new html element!
const newElement = document.createElement("div")
newElement.textContent = "This is a new element!"
// console.log(newElement)
classList[1].appendChild(newElement)
// Lets use .remove on a queryselector!
removable.remove()
// classList[1].remove()
// And lets clear the children using inner html!
const booklist = document.querySelector("#book-list")
booklist.innerHTML = ''
booklist.appendChild(newElement)

function returnDavid(){
  return "David"
}
const david = returnDavid()
// const david = "David"

//* Create a function that uses a selector to get the header and add the bookStore name as its text content
function createHeader(){
  const header = document.querySelector("header")
  header.textContent = `${bookStore.name}`
}
createHeader()
//* Create a function that creates all the divs from the footer and add the book store name, address, hours and/or phone number
function createFooter(){
  const footer = document.querySelector("footer")
  const name = document.createElement("div")
  const address = document.createElement("div")
  const hours = document.createElement("div")
  const number = document.createElement("div")
  name.textContent = `${bookStore.name} . `
  address.textContent = `${bookStore.address} . `
  hours.textContent = `${bookStore.hours} . `
  number.textContent = `${bookStore.number} .  `
  footer.append(name,address,hours,number)
}
createFooter()

// use a forEach to iterate over BookStore inventory.
booklist.innerHTML =''
bookStore.inventory.forEach((book)=>{
  // console.log(book)
  //creating elements
  const li = document.createElement("li")
  const title = document.createElement("h3")
  const author = document.createElement("p")
  const price = document.createElement("p")
  //<img></img>
  const img = document.createElement("img")
  // Assign elements
  title.textContent = book.title
  author.textContent = book.author
  price.textContent = book.textContent
  img.src = book.imageUrl
  // Showing off attaching classes
  li.className = "List-Element"
  //attatch elements to li
  li.append(title,author,price,img)
  //create and attatch the review/s
  book.reviews.forEach((review)=> {
    const newReview = document.createElement("p")
    newReview.textContent = review.content
    // DONE DO BELOW
    // li.append(document.createElement("p").textContent=review.content)
    li.append(newReview)
  })
  // append to booklist
  booklist.append(li)
  

// use a forEach to iterate over BookStore inventory.
// create li, an h3 tag, 2 p tags, and image tag.
// Add the cardData content to the tags.
// Append all elements to our li
// Append li to the DOM through the ul with the id of book-list
