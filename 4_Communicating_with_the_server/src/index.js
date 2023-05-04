document.addEventListener('DOMContentLoaded', () => {
  // Event Listeners
  // document.querySelector('header').addEventListener('click',(e)=>console.log(e))
  // document.querySelector('#book-form').addEventListener('submit',(e)=>{
  //   e.preventDefault()
  //   console.log(e)
  //   // e.target.title.addEventListener('change',(e)=>console.log(e))
  // })
  // Toc start off let us start the json server and test the routes in our web browser

  // Basic Get Request
  // fetch(url)
  // .then((r)=>r.json())
  // .then((data)=> )
  // .catch(e => console.log(e))
  // let currentname = null
  fetch('http://localhost:3000/stores/2')
  .then((r)=> r.json())
  .then((data)=> {
    // currentid = data.id
    console.log(data)
    renderHeader(data)
    renderFooter(data)
  })
  .catch(e => console.log(e))

  fetch('http://localhost:3000/books')
  .then((r)=>r.json())
  .then((data)=>{
    console.log(data)
    data.forEach((book)=>addBook(book))
  })

  function handleDelete(id){
    fetch(`http://localhost:3000/books/${id}`,{
      method: "DELETE"
    })
    .then((r)=>r.json())
    .then((data)=>{
      console.log(data)
    })
  }
  function handlePost(newdata){
    fetch(`http://localhost:3000/books`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newdata)
    })
    .then((r)=>r.json())
    .then((data)=>{
      console.log(data)
    })
  }
  // We can fetch either all the data or just one!
  // Now lets refactor what we had yesterday to be more dynamic!
  // We can use store to render the header and footer!

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
  function addBook(book){
    console.log(book.inventory+1)
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
      handleDelete(book.id)
    })
    document.querySelector("#book-list").append(li)
  }

  const form = document.querySelector("#book-form")
  console.log(form)
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
    handlePost(newBook)
    addBook(newBook)
  })


  // Lets take the logic of yesterdays card data rendering as well!

  // Now instead of calling bookData let us fetch from the database
})