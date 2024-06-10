// get request
fetch("http://localhost:3000/books")
.then(r => r.json())
.then(books =>{

    books.map(book=>{
        displayBook(book)
    })
})

console.log('Hello')


function displayBook(book){
    console.log(book)
}

const form = document.querySelector("#book-form")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const newBook = {
        title: event.target.title.value,
        author: event.target.author.value,
        price: parseInt(event.target.price.value),
        imageUrl: event.target.imageUrl.value,
        inventory: parseInt(event.target.inventory.value),
        reviews: []
      }
    // fetch(url, object)
    fetch("http://localhost:3000/books",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBook)
    })
    .then(r=> r.json())
    .then(data=>{
        displayBook(data)
    })

})