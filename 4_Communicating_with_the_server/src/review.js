const numbers = {
    num1: 1
}

// obj.key
// obj["key"]
// obj["num2"] = 2

for(let key in numbers){
    console.log(obj[key])
}


document.addEventListener("DOMContentLoaded",()=>{
    const b = document.querySelector("#banner")
    b.textContent = "Click Here"
    b.addEventListener("click",()=>{
        console.log("Clicked banner")
    })


    const form = document.querySelector("#book-form")
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        console.log(e.target.title.value)
        const newBookObj = {
            title: e.target.title.value,
            author: e.target.author.value,
            price: e.target.price.value,
            imageUrl: e.target.imageUrl.value
        }
        displayBook(newBookObj)
    })
})

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
  
    div.append(title,auth,price,image,button)
    book_list.append(div)
}