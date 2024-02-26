document.addEventListener('DOMContentLoaded', () => {
  // To start off let us start the json server and test the routes in our web browser

  // Basic Get Request
  // fetch(url)
  fetch('http://localhost:3000/books')
  .then((r)=>r.json())
  .then((books)=>{
    books.forEach((book) => {
      showBook(book)
    });
  })
  // .then((r)=>r.json())
  // .then((data)=> )
  // .catch(e => console.log(e))

  // We can fetch either all the data or just one!
  fetch('http://localhost:3000/stores/1')
  .then(r=>r.json())
  .then(data=>{
    renderFooter(data)
    renderHeader(data)
  })
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


  function showBook(book){
    const booklist = document.querySelector('#book-list')
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const form = document.createElement('form')
    const input = document.createElement('input')
    const img = document.createElement('img')
    const button = document.createElement('button')

    button.textContent = "DELETE"
    input.name = "new_name"
    h3.textContent = book.title
    p1.textContent = book.author
    p2.textContent = book.price
    img.src = book.imageUrl

    form.append(input)
    form.addEventListener('submit',(e)=>{
      e.preventDefault()
      // console.log(book.id)
      // console.log(e.target.new_name.value)
      patchBook(book.id,e.target.new_name.value,h3)
    })

    button.addEventListener('click',()=>{
      deleteBook(book.id,li)
    })

    li.append(h3,p1,p2,form,img,button)
    booklist.append(li)
  }


  const form = document.querySelector("form")
  form.addEventListener('submit',(e)=>{
      e.preventDefault()
      const formObj = {
          title: e.target.title.value,
          author: e.target.author.value,
          price: e.target.price.value,
          inventory: e.target.inventory.value,
          imageUrl: e.target.imageUrl.value
      }
      postData(formObj)
  })

  function postData(bookObj){
    fetch('http://localhost:3000/books',{
      method: "POST",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(bookObj)
    })
    .then(r=>r.json())
    .then(data=>{
      console.log(data)
      showBook(data)
    })
  }

  function patchBook(bookId,newtitle,h3){
    fetch(`http://localhost:3000/books/${bookId}`,{
      method: "PATCH",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify({
        title: newtitle
      })
    })
    .then(r=>r.json())
    .then(data=>{
      console.log(data)
      h3.textContent = newtitle
    })
  }

  function deleteBook(bookId,li){
    fetch(`http://localhost:3000/books/${bookId}`,{
      method: "DELETE"
    })
    .then(r=>r.json())
    .then(data=>{
      console.log(data)
      li.remove()
    })

  }


})