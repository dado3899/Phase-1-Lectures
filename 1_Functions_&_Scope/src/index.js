//Data 
const inventory = [
    {
        id: 1,
        title: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marjin Haverbeke',
        price: 10.00,
        reviews: [{ userID: 1, content: 'Good book, but not great for new coders' }],
        inventory: 10,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',

    },
    {
        id: 2,
        title: 'JavaScript & JQuery: Interactive Front-End Web Development',
        author: 'Jon Duckett',
        price: 45.75,
        reviews: [{ userID: 15, content: 'good way to learn JQuery' }],
        inventory: 2,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
    },
    {
        id: 3,
        title: 'JavaScript: The Good Parts',
        author: 'Douglas Crockford',
        price: 36.00,
        reviews: [{ userID: 25, content: 'I disagree with everything in this book' }, { userID: 250, content: 'Only JS book anyone needs' }],
        inventory: 8,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    },
    {
        id: 4,
        title: 'JavaScript: The Definitive Guide',
        author: 'David Flanagan',
        price: 25.50,
        reviews: [{ userID: 44, content: 'Great intro to js book' }, { userID: 350, content: 'It really is the Definitive guide' }],
        inventory: 0,
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"

    },
    {
        id: 5,
        title: 'You Don’t Know JS',
        author: 'Kyle Simpson',
        price: 6.00,
        reviews: [{ userID: 76, content: 'You can find this for free online, no need to pay for it!' }],
        inventory: 7,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
    },
    {
        id: 6,
        title: 'Learn Enough JavaScript to Be Dangerous',
        author: 'Michael Hartl',
        price: 24.00,
        reviews: [{ userID: 50, content: 'pretty good' }],
        inventory: 5,
        imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW'

    },
    {
        id: 7,
        title: 'Cracking the Coding Interview',
        author: 'Gayle Laakmann McDowell',
        price: 49.95,
        reviews: [{ userID: 99, content: 'One of the most helpful books for taking on the tech interview' }, { userID: 20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
        inventory: 20,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'

    }
]
addprice(inventory[0],inventory[3])
// Pre Work Questions?
const x = 10
let y = 20
const arr = [1, 2, 3, 4]
// console.log(arr[0])
const exampleDict = {
    a: 1,
    b: 2
}
// console.log(exampleDict.a)
// console.log(exampleDict['b'])
// console.log("Hello")
// Function Declaration!
function whatever() {
    console.log("In Whatever")
}
// whatever()
// whatever()
// whatever()
// Now lets call the function
// whatever()
// Lets make a function with a parameter
function add(num1, num2) {
    console.log(num1, num2)
    const sum = num1 + num2
    console.log(sum)
}
// add(12, 20)
// add(1, 2)
// Using the data above what sort of function can we create?
function addprice(book1, book2) {
    const total = book1.price + book2.price
    // console.log(total)
    return total
}
const total14 = addprice(inventory[0],inventory[3])
// console.log(total14)

// Anonomous Functions? Another way to write functions!
// console.log(
//     function(){
//         const x = "hello"
//         return x
//     }()
// )
// Whats the difference? It comes down to where it is called
const anon = function(){
    const x = "hello"
    return x
}
// console.log(anon)

// Arrow Functions
// Arrow functions vs regular functions vs anonomous functions????
// console.log(()=>{
//     return 22
// })
// Lets refactor the regular function above to be an arrow function!
const arrow = ()=>{
    const x = "hello"
    return x
}
// Now you try it!

// Scoping
// Global Scope
const glob = "In global"
console.log(glob)
function consoleGlob(){
    console.log(glob)
    // Function Scope
    const func = "In function"
    console.log(func)
    // Block Scope (If, else, for, while)
    if(true){
        const block = "In block"
        console.log(block)
    }
    return func
}
// const func = consoleGlob()
// console.log(func)
const block = "Above block"
if(true){
    const block = "In block"
    console.log(block)
}
// Callback Functions, calling a function in a function
// const callback = "string"
function callback(newfunction){
    console.log(newfunction)
    newfunction()
}

callback(consoleGlob)
callback(whatever)
