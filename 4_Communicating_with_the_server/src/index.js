document.addEventListener('DOMContentLoaded', () => {
  // To start off let us start the json server and test the routes in our web browser

  // Basic Get Request
  // fetch(url)
  // .then((r)=>r.json())
  // .then((data)=> )
  // .catch(e => console.log(e))
  // let updatedData = []
  fetch("http://localhost:3000/stores/3")
  .then(r=>{return r.json()})
  .then(data => {
    renderFooter(data)
    renderHeader(data)
  })

  fetch("http://localhost:3000/books")
  .then(r => r.json())
  .then(books => {
    books.forEach((book) => createCard(book))
  })
  

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
  console.log("Async test")
  // console.log(updatedData)
  // We can fetch either all the data or just one!

  // Now lets refactor what we had yesterday to be more dynamic!
  // We can use store to render the header and footer!
  // Yesterdays:
  // Renders Header
  function renderHeader(bookStore){
    document.querySelector('h1').textContent = bookStore.name;
  }
  // Renders Footer
  function renderFooter(bookStore){
    const footerDivs = document.querySelectorAll('footer div');
    footerDivs[0].textContent = bookStore.name;
    footerDivs[1].textContent = bookStore.address;
    footerDivs[2].textContent = bookStore.hours;
  }

  const form = document.querySelector("#book-form")
  form.addEventListener("submit",(e)=>{
    e.preventDefault()
    // {
    //   "title": "JavaScript: The Good Parts",
    //   "author": "Douglas Crockford",
    //   "price": 36,
    //   "inventory": 8,
    //   "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
    // }
    const newBook = {
      title: e.target.title.value,
      author: e.target.author.value,
      price: e.target.price.value,
      reviews: [],
      inventory: e.target.inventory.value,
      imageUrl: e.target.imageUrl.value
    }

    fetch('http://localhost:3000/books',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newBook)
    })
    .then(r => r.json())
    .then(data => {
      createCard(data)
      e.target.title.value = ""
      e.target.author.value = ""
      e.target.price.value = ""
      e.target.inventory.value = ""
      e.target.imageUrl.value = ""
    })
    // createCard(newBook)

  }) 
  // Lets take the logic of yesterdays card data rendering as well!

  // Now instead of calling bookData let us fetch from the database
  // O(n^2)
  // for i in array:
  //    for j in array:

  // Post:
  // fetch('http://localhost:3000/books',{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(book)
  //   })
  // fetch('http://localhost:3000/stores',{
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     name: "Bob",
  //     occupation: "Stuff"
  //   })
  // })
  // .then(r => r.json())
  // .then(data => console.log(data))

})