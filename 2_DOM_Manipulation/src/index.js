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
const fruits = ["Apple","Orange","Banana"]
//array methods
//push adds to the end
fruits.push("Cantalope")

//unshift adds to the start
fruits.unshift("Melon")
//spread operator copies the array
const newFruits = ["Grape",...fruits,"Mango"]
//shift removes the first element
// const shifted = fruits.shift()
// console.log(shifted)
//pop removes the last element
// const popped = fruits.pop()
// console.log(popped)
//slice returns the above but keeps the the original
const newarray = fruits.slice(0,-1)
//splice changes the array to between two indices
fruits.splice(1,3)
console.log(newFruits)
console.log(fruits)
// Lets Create a .querySelector()!
const removable = document.querySelector("#removable")
console.log(removable)
const list = document.querySelector(".list")
console.log(list)
// .getElementById
const booklist = document.getElementById("book-list")
console.log(booklist)
// .getElementsByClassName()
const list2 = document.getElementsByClassName("list")
console.log(list2[1])
// Use .querySelectorAll to get all divs!
// We can then use .textcontent to change whats inside!
removable.textContent = "Keep this"
// list2[1].textContent = ""
// Using .createElement we can create and set a new html element!
const listTest = document.createElement("li")
listTest.textContent = "Testing stuff"
console.log(listTest)
booklist.appendChild(listTest)

const ptag = document.createElement("p")
ptag.textContent = "THIS IS A P TAG"
ptag.id = "Unique_PTAG"
list2[1].appendChild(ptag,listTest)
// Lets use .remove on a queryselector!
document.querySelector("#removable").remove()
// And lets clear the children using inner html!
// list2[1].innerHTML = ""  

//* Create a function that uses a selector to get the header and add the bookStore name as its text content
function headerUpdate(){
    const header =  document.querySelector("#inner_header")
    header.textContent = bookStore.name
    // const div = document.createElement("h3")
    // div.textContent = bookStore.name
    // header.textContent = ""
    // header.appendChild(div)
}
headerUpdate()
//* Create a function that grabs all the divs form the footer and add the book store name, address, hours and/or phone number
function footerUpdate(){
    const footer = document.querySelector("footer")
    const div = document.createElement("div")
    div.textContent = `${bookStore.name} | ${bookStore.address} | ${bookStore.hours} | ${bookStore.number}`
    footer.appendChild(div)
    
}
footerUpdate()
// use a forEach to iterate over BookStore inventory.
bookStore.inventory.forEach((item)=>{
    console.log(item)
    addItemToList(item)
})

function addItemToList(individualItem){
    // <li>
        // <h3>Example Title</h3>
        // <p>Example Author</p>
        // <p>$99</p>
        // <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAQlBMVEX///+hoaGenp6ampr39/fHx8fOzs7j4+P8/Pyvr6/d3d3FxcX29va6urqYmJjs7OzU1NSlpaW1tbWtra3n5+e/v78TS0zBAAACkUlEQVR4nO3b63KCMBCGYUwUUVEO6v3fagWVY4LYZMbZnff51xaZ5jON7CZNEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQb5tvI8qzX4/nH84XG5Upfj2ir2V2E5fZ/XpIX9saMnhkYLIkiyRJjdgMoiEDMmiQgfwM8rSu77ew2wnPoLTmwdZBs0J2BuXrYckcQm4nOoP+WcmWAbcTnUHZPy9eA24nOoN7n0HI54ToDM5k8PjluwyqgNuJzqDoaugPg8gWZ4noDAYLwuIg75fLeeHHsjNIzrZJwWwW+0DNsmEWPjiEZ5AcD8ZUu8VZ8HyQMifvBdIz+PS33i8adu+7Qn4Gn1Tdupl7rlCfQb9seosK7RkcBy1o30iVZ5CPOtDW3WhQnsF13IV3v0p3BqfJRoSpXVepzmA/24+yqeMyzRm4tqOs44lSUwa3yfgOri25av5CPRnklR33VlPnrqSZV09qMsiqSWV082xOz1uPajJ49pTM/f115k6guWa6JGjJ4N1lt8fXN2rv/vysjFaSQdFXBc/KKF04ptFPliclGVR9Bu27XCyeVOkmy5OODAZN9rYyyip/AIPJ8qIig+PoXbf7YdPdncFoSdCQQT4ZceV+MhiFMBy0hgyu0yGvOLI17KwpyGBaHK5jtt0N5GcwLw7XZdB31sRn8O+ziqYro8Vn4CwOV+k6a9Iz+PwRsKC7h+gMfMXhKu/OmuwM/MXhKq8yWnYG/uJw5Uxoy2jRGZTBZ/jboxuSM1guDtdNhKazJjiDbNMe0AxzKUVnkO+jEJxBxNtJzWCTxlNLzSB8KehJ/H+mJGYAjaDjzj9SnHZRuXZiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECXP1XDHv7U4SNFAAAAAElFTkSuQmCC">
    // </li>
    // Defining content
    const li = document.createElement("li")
    const h3 = document.createElement("h3")
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    const img = document.createElement("img")
    // Assign content
    h3.textContent = individualItem.title
    p1.textContent = individualItem.author
    p2.textContent = individualItem.price
    img.src = individualItem.imageUrl
    // appends
    li.append(h3,p1,individualItem.price,img)
    console.log(li)
    // li.appendChild(h3)
    // li.appendChild(p1)
    // li.appendChild(p2)
    // li.appendChild(img)
    booklist.appendChild(li)
}

// create li, an h3 tag, 2 p tags, and image tag.
// Add the cardData content to the tags.
// Append all elements to our li
// Append li to the DOM through the ul with the id of book-list
