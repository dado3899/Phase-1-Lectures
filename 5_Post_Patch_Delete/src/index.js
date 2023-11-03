document.addEventListener('DOMContentLoaded', () => {
  // To start off let us start the json server and test the routes in our web browser

  // Basic Get Request
  // fetch(url)
  // .then((r)=>r.json())
  // .then((data)=> )
  // .catch(e => console.log(e))
  fetch("http://localhost:3000/stores/3")
  .then(r =>  r.json())
  .then(data => {
    console.log(data)
    renderHeader(data)
  })

  fetch("http://localhost:3000/books")
  .then(r => r.json())
  .then(books => {
    console.log(books)
    books.forEach((book)=>{
      createBookCard(book)
    })
  })

  
  
  const form = document.querySelector("#book-form")
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const new_obj = {
      title: e.target['form-title'].value,
      author: e.target.author.value,
      price: parseFloat(document.querySelector("#form-price").value),
      imageUrl: e.target.imageUrl.value,
      inventory: parseInt(e.target.inventory.value)
    }
    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(new_obj)
    })
    .then(r=>r.json())
    .then(new_book=>createBookCard(new_book))
    //UPDATE FRONTEND
    // (new_obj)
    //UPDATE BACKEND
  })


  // We can fetch either all the data or just one!

  // Now lets refactor what we had yesterday to be more dynamic!
  // We can use store to render the header and footer!

  // Yesterdays:
  // Renders Header
  function renderHeader(bookStore){
    document.querySelector('h1').textContent = bookStore.name;
  }

  // Renders Footer
  function renderFooter(){
    const footerDivs = document.querySelectorAll('footer div');
    footerDivs[0].textContent = bookStore.name;
    footerDivs[1].textContent = bookStore.address;
    footerDivs[2].textContent = bookStore.hours;
  }

  function createBookCard(book){
    const li = document.createElement('li')
    const title = document.createElement("h3")
    const author = document.createElement("p")
    const price = document.createElement("p")
    const image = document.createElement("img")
    const del = document.createElement("button")
    del.textContent = "Delete"
    title.textContent = book.title
    author.textContent = book.author
    price.textContent = book.price
    image.src = book.imageUrl


    li.append(title,author,price,image, del)
    document.querySelector("#book-list").append(li)

    price.addEventListener('click',()=>{
        const new_price = parseInt(price.textContent) + 1
        
        price.textContent = new_price
        fetch(`http://localhost:3000/books/${book.id}`,{
          method: "PATCH",
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            price: new_price
          })
        })
        
      })

    del.addEventListener('click',()=>{
        li.remove()
        // fetch delete
        console.log(book.id)
        fetch(`http://localhost:3000/books/${book.id}`,{
          method: "DELETE"
        })
    })
    // li.addEventListener('click',()=>{
    //     if(image.src === book.imageUrl){
    //     image.src = ""
    //     }
    //     else{
    //     image.src = book.imageUrl
    //     }
    // })
    }

  // Lets take the logic of yesterdays card data rendering as well!

  // Now instead of calling bookData let us fetch from the database

})