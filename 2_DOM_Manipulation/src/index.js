//Data 
// How would we import this?
// Well we would add 
// <script src="src/newfile.js"></script>
const bookStore = {
  location: "Seattle",
  address:'333 st ne Seattle wa 99999',
  number: 9999999999,
  name: 'Coding Books',
  hours: 'Monday - Friday 9am - 6pm',
  inventory: [
      {
          id:1,
          title: 'Eloquent JavaScript: A Modern Introduction to Programming',
          author: 'Marjin Haverbeke',
          price: 10.00,
          reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
          inventory: 10,
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
const arr = ["Apple","Orange","Pomegranate"]
// console.log(arr)
//push adds to the end
arr.push("Watermelon")
// console.log(arr)
//unshift adds to the start
arr.unshift("Strawberry")
// console.log(arr)
//spread operator copies the array
const newFruitArr = [...arr]
// Memory
// [=>][arr]
newFruitArr.push("Grape")
// console.log(arr)
// console.log(newFruitArr)
//shift removes the first element
const firstItem = arr.shift()
// console.log(arr)
// console.log(firstItem)
//pop removes the last element
const lastItem = arr.pop()
// console.log(arr)
// console.log(lastItem)
//slice changes the array to between two indices
// console.log(newFruitArr)
// console.log(newFruitArr.slice(1,4))
// console.log(newFruitArr)
//splice returns the above but keeps the the original
// console.log(newFruitArr.splice(2,2))
// console.log(newFruitArr)

// .forEach
console.log(bookStore.inventory)
bookStore.inventory.forEach((book)=>{
    console.log(book.reviews[0])
})

function addPrice(book){
    // console.log(book)
    // book.price = book.price + 1
    book.price += 1
}

const forEachReturn = bookStore.inventory.forEach(addPrice)
console.log(forEachReturn)
// console.log(bookStore.inventory[])
const mapReturn = bookStore.inventory.map((book)=>{
    return book.price
})
console.log(mapReturn)
// mapping through and messing with our book arr

// Lets Create a .querySelector()!
const byId = document.querySelector("#removable")
byId.remove()
const byClass = document.querySelector(".list")
console.log(byClass)
// .getElementById
const gEBI = document.getElementById("removable")
console.log(gEBI)
// .getElementsByClassName()
// Use .querySelectorAll to get all divs!
const allDivs = document.querySelectorAll("div")
// console.log(allDivs[1])
// We can then use .textcontent to change whats inside!
// Lets use .remove on a queryselector!
// And lets clear the children using inner html!
const bookList = document.querySelector("#book-list")
bookList.innerHTML = ""

// const body = document.querySelector("body")
// body.innerHTML = ""

// Using .createElement we can create and set a new html element!
//* Create a function that uses a selector to get the header and add the bookStore name as its text content
function addHeader(){
    const firstH2 = document.querySelector("div header div h2")
    firstH2.textContent = bookStore.address
    const h1 = document.createElement("h1")
    h1.textContent = bookStore.name
    
    const headerDiv = document.querySelector("#header header div")
    console.log(headerDiv)
    headerDiv.append(h1)
}
addHeader()
//* Create a function that grabs all the divs form the footer and add the book store name, address, hours and/or phone number
function addFooter(){
    const footer = document.querySelector("footer")
    const hours = document.createElement("h2")
    const phone = document.createElement("h2")
    const splitter = document.createElement("h2")
    
    hours.textContent = bookStore.hours
    phone.textContent = bookStore.number
    splitter.textContent = "---"
    
    footer.append(hours,splitter,phone)
}
addFooter()

// use a forEach to iterate over BookStore inventory.
bookStore.inventory.forEach((book)=>{
    // console.log(book)
    const bookList = document.querySelector("#book-list")
    const li = document.createElement("div")
    const title = document.createElement("h3")
    const auth = document.createElement("p")
    const price = document.createElement("p")
    const image = document.createElement("img")

    title.textContent = book.title
    title.className = "some_class"
    auth.textContent = book.author
    price.textContent = book.price
    image.src = book.imageUrl
    li.append(title,auth,price,image)
    // console.log(li)
    bookList.append(li)
})
// create li, an h3 tag, 2 p tags, and image tag.
// Add the cardData content to the tags.
// Append all elements to our li
// Append li to the DOM through the ul with the id of book-list
