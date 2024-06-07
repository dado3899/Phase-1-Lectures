document.addEventListener('DOMContentLoaded', () => {
  // To start off let us start the json server and test the routes in our web browser

  // Basic Get Request
  // fetch(url)
  // .then((r)=>r.json())
  // .then((data)=> )
  // .catch(e => console.log(e))
  const userid = 3
  fetch(`http://localhost:3000/stores/${userid}`)
  .then((r)=> r.json())
  .then((store)=>{
    console.log(store)
    renderFooter(store)
    renderHeader(store)
  })
  
  fetch('http://localhost:3000/books')
  .then((r)=>r.json())
  .then((books)=> {
    books.forEach((book)=>{
      displayBook(book)
    })
  })

  console.log("Outside .then")

  // We can fetch either all the data or just one!
  const form = document.querySelector("#book-form")
  form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e.target.title.value)
    const newBookObj = {
        title: e.target.title.value,
        author: e.target.author.value,
        price: e.target.price.value,
        imageUrl: e.target.imageUrl.value,
        reviews: [],
        inventory: e.target.inventory.value
    }
    // "" = false
    // "a" = true
    if(newBookObj.title && newBookObj.author){
      fetch('http://localhost:3000/books',{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBookObj)
      })
      .then(r=>r.json())
      .then(book=>{
        displayBook(book)
      })
    }
    else{
      alert("PLEASE FILL EVERYTHING")
    }


    // displayBook(newBookObj)
  })

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
  function displayBook(book){
    const book_list = document.querySelector("#book-list")
    const div = document.createElement("div")
    const title = document.createElement("h3")
    const auth = document.createElement("p")
    const price = document.createElement("p")
    const image = document.createElement("img")
    const button = document.createElement("button")
  
    title.textContent = book.title
    auth.textContent = book.author
    price.textContent = book.price
    image.src = book.imageUrl
    button.textContent = "Show More"
  
    div.append(title,auth,price,image)
    book_list.append(div)
  }

  // Lets take the logic of yesterdays card data rendering as well!

  // Now instead of calling bookData let us fetch from the database

})