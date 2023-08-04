document.addEventListener('DOMContentLoaded', () => {
  // Basic Get request (Read)
  fetch('http://localhost:3000/books')
  .then((r)=> r.json())
  .then((books)=> {
    books.forEach((book) => addBook(book))
  })

  fetch('http://localhost:3000/stores/2')
  .then((r)=>r.json())
  .then((store)=>{
    renderHeader(store)
    renderFooter(store)
  })
  

  // fetch('http://localhost:3000/books', {method:"GET"})
  fetch('http://localhost:3000/books')
  .then(r => r.json())
  .then(data => console.log(data))
  // console.log("Below fetch")
  // console.log(data2)
  // .then(r=>r.json())
  // .then(data=>console.log(data))


  // Post
  function postBook(book){
    fetch('http://localhost:3000/books',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
    .then((r)=>r.json())
    .then((newBook)=>addBook(newBook))
  }
  // Delete
  // fetch('http://localhost:3000/books/4',{
  //   method:"DELETE"
  // })
  // .then(r=>r.json())
  // .then(data=>console.log(data))
  function deleteById(id){
    fetch(`http://localhost:3000/books/${id}`,{
      method:"DELETE"
    })
    .then(r=>r.json())
    .then(data=>console.log(data))
  }
  // Patch
  // fetch('http://localhost:3000/books/3',{
  //   method: "PATCH",
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     title: "NEW TITLE2",
  //     author:"NEW AUTHOr"
  //   })
  // })
  function patchByID(id,updatedtitle){
    fetch(`http://localhost:3000/books/${id}`,{
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title:updatedtitle
      })
    })
    .then(r=>r.json())
    .then(data=>addBook(data))
  }

  // Yesterdays:
  // Renders Header
  function renderHeader(store){
    document.querySelector('h1').textContent = store.name;
  }
  // Renders Footer
  function renderFooter(store){
    const footerDivs = document.querySelectorAll('footer div');
    footerDivs[0].textContent = store.name;
    footerDivs[1].textContent = store.address;
    footerDivs[2].textContent = store.hours;
  }
  //Add a book
  function addBook(book){
    // console.log(book)
    // Create element
    const li = document.createElement("li")
    const title = document.createElement("h3")
    const author = document.createElement("p")
    const price = document.createElement("p")
    const img = document.createElement("img")
    const button = document.createElement("button")
    const button2 = document.createElement("button")
    const input = document.createElement("input")
    // <input type="number" id="form-price" name="price">
    // setting elements
    title.textContent = book.title
    author.textContent = book.author
    price.textContent = book.price
    img.src = book.imageUrl
    button.textContent = "Delete"
    button2.textContent = "Update"
    input.type = "text"
    input.name = "new_title"

    li.className = "List-Element"
    li.append(title,author,price,img, button,button2,input)
    book.reviews.forEach((review)=> {
      const newReview = document.createElement("p")
      newReview.textContent = review.conten
      li.append(newReview)
    })
    button.addEventListener('click',()=> {
      li.remove()
      deleteById(book.id)
    })
    button2.addEventListener('click',()=>{
      const updatedtitle = input.value
      patchByID(book.id,updatedtitle)
      title.textContent = updatedtitle

    })
    document.querySelector("#book-list").append(li)
  }

  // Book Form Event 
  const form = document.querySelector("#book-form")
  form.addEventListener('submit', (event)=> {
    event.preventDefault()
    // console.log(event.target.image_Url.value)
    const newBook = {
      title: event.target.title.value,
      author: event.target.author.value,
      price: parseInt(event.target.price.value),
      imageUrl: event.target.image-Url.value,
      inventory: parseInt(event.target.inventory.value),
      reviews: []
    }
    console.log(newBook)
    postBook(newBook)
  })
})