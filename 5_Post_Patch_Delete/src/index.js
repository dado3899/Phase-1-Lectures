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
  
  // const data2 = fetch('http://localhost:3000/users')
  
  // .then(r=>r.json())
  // .then(data=>console.log(data))
  // More in depth in async!
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
  // Patch

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
    console.log(book)
    const li = document.createElement("li")
    const title = document.createElement("h3")
    const author = document.createElement("p")
    const price = document.createElement("p")
    const img = document.createElement("img")
    const button = document.createElement("button")
    title.textContent = book.title
    author.textContent = book.author
    price.textContent = book.textContent
    img.src = book.imageUrl
    button.textContent = "Delete"
    li.className = "List-Element"
    li.append(title,author,price,img, button)
    book.reviews.forEach((review)=> {
      const newReview = document.createElement("p")
      newReview.textContent = review.conten
      li.append(newReview)
    })
    button.addEventListener('click',()=> {
      li.remove()
      deleteBook(book)
    })
    document.querySelector("#book-list").append(li)
  }

  // Book Form Event 
  const form = document.querySelector("#book-form")
  form.addEventListener('submit', (event)=> {
    event.preventDefault()
    const newBook = {
      title: event.target.title.value,
      author: event.target.author.value,
      price: parseInt(event.target.price.value),
      imageUrl: event.target.imageUrl.value,
      inventory: parseInt(event.target.inventory.value),
      reviews: []
    }
    console.log(newBook)
    postBook(newBook)
  })
})