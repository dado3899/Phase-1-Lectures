// Server
let booksArray = []
// Fetch request
fetch('http://localhost:3000/books')
.then(r => r.json())
.then(books => {
    books.forEach((book)=>createBookCard(book))
})
console.log(booksArray)

const form = document.querySelector("#book-form")

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(e.target.title.value)
    const new_book = {
      title: e.target.title.value,
      author: e.target.author.value,
      price: parseFloat(e.target.price.value),
      imageUrl: e.target.imageUrl.value,
      inventory: parseInt(e.target.inventory.value)
    }
    console.log(new_book)
    createBookCard(new_book)
    fetch('http://localhost:3000/books',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(new_book)
    })
})


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
        price.textContent = parseInt(price.textContent)+1
    })

    del.addEventListener('click',()=>{
        li.remove()
        // fetch delete
    })
    li.addEventListener('click',()=>{
        if(image.src === book.imageUrl){
        image.src = ""
        }
        else{
        image.src = book.imageUrl
        }
    })
    }