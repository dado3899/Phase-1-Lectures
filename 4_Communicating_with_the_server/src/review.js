// Object manipulation
const obj = {
    key: "value"
}
const variable = "key"
console.log(obj["key"])
console.log(obj[variable])
obj["new_key"] = "new value"
console.log(obj)
function return_obj(a,b){
    const new_obj = {
        a: a,
        b: b
    }
    return new_obj
}
console.log(return_obj(1,2))

for(let key in obj){
    console.log(key + ":" + obj[key])
}

// event listeners
const h1 = document.querySelector("h1")
console.log(h1)
h1.addEventListener('click',(e)=>{
    console.log(e)
    if (h1.textContent === "Something"){
        h1.textContent = "Something else"
    }
    else{
        h1.textContent = "Something"
    }
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
    })
    // li.addEventListener('mouseover',()=>{
    //   image.src = book.imageUrl
    // })
    // li.addEventListener('mouseout',()=>{
    //   image.src = ""
    // })
    li.addEventListener('click',()=>{
        if(image.src === book.imageUrl){
        image.src = ""
        }
        else{
        image.src = book.imageUrl
        }
    })
}
 

const form = document.querySelector("#book-form")
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(e.target['form-title'].value)
    console.log(e.target.title.value)
    console.log(document.querySelector("#form-title").value)
    const new_obj = {
        title: e.target['form-title'].value,
        author: e.target.author.value,
        price: parseFloat(document.querySelector("#form-price").value),
        imageUrl: e.target.imageUrl.value,
        inventory: parseInt(e.target.inventory.value)
    }
    console.log(new_obj)
    createBookCard(new_obj)
})
