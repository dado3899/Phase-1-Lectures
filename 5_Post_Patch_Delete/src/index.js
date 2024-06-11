document.addEventListener('DOMContentLoaded', () => {
  // Basic Get request (Read)
  fetch('http://localhost:3000/books')
  .then((r)=> console.log(r))
  .then((books)=> {
    const searchForm = document.createElement("form")
    const search = document.createElement("input")
    search.type = "text"
    search.name = "search"
    searchForm.append(search)
    document.querySelector("#form-wrapper").append(searchForm)

    searchForm.addEventListener("submit",(e)=>{
      e.preventDefault()
      const filteredBooks = books.filter((book)=>{
        if(book.title.toLowerCase().includes(e.target.search.value.toLowerCase())){
            return true
        }
        return false
      })
      document.querySelector("#book-list").innerHTML = ""
      filteredBooks.forEach((book) => addBook(book))
    })
    
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
  function deleteBook(id,li){
    console.log(id)
    fetch(`http://localhost:3000/books/${id}`,{
      method: "DELETE"
    })
    .then(r=>r.json())
    .then(data=>{
      li.remove()
    })
    .catch(data => {
      alert("Sorry could not delete")
    })
  }
  // Patch


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
    const li = document.createElement("li")
    const title = document.createElement("h3")
    const author = document.createElement("p")
    const price = document.createElement("p")
    const img = document.createElement("img")
    const delButton = document.createElement("button")
    const reviewHeader = document.createElement("h1")
    const reviewWrapper = document.createElement("div")
    book.reviews.map((review)=>{
      const reviewElement = document.createElement("p")
      reviewElement.textContent = review.content
      reviewWrapper.append(reviewElement)
    })
    

    const editForm = document.createElement("form")
    const input1 = document.createElement("input")
    input1.type = "text"
    input1.name = "new_review"
    input1.placeholder = "New Review"

    title.textContent = book.title
    author.textContent = book.author
    price.textContent = book.textContent
    img.src = book.imageUrl
    li.className = "List-Element"
    delButton.textContent = "Delete"
    reviewHeader.textContent = "REVIEWS: "

    editForm.append(input1)
    li.append(title,author,price,img,delButton,reviewHeader,reviewWrapper,editForm)

    document.querySelector("#book-list").append(li)
    delButton.addEventListener("click",()=>{
      deleteBook(book.id,li)
    })

    editForm.addEventListener("submit",(e)=>{
      e.preventDefault()
      const newReview = {
        "userID": 1000,
        "content": e.target.new_review.value
      }
      book.reviews.push(newReview)
      fetch(`http://localhost:3000/books/${book.id}`,{
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          reviews: book.reviews
        })
      })
      .then(r=>r.json())
      .then(data=>{
        const reviewElement = document.createElement("p")
        reviewElement.textContent = newReview.content
        reviewWrapper.append(reviewElement)
        // title.textContent =  e.target.new_title.value
      })
    })


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
    postBook(newBook)
  })
})