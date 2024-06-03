//Data 
const inventory = [
  {
      id:1,
      title: 'Eloquent JavaScript: A Modern Introduction to Programming',
      author: 'Marjin Haverbeke',
      price: 10.00,
      reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
      inventory: 10,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      
  },
  {
      id:2,
      title: 'JavaScript & JQuery: Interactive Front-End Web Development',
      author: 'Jon Duckett',
      price: 45.75,
      reviews: [{userID: 15, content:'good way to learn JQuery'}],
      inventory: 2,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
  },
  {
      id:3,
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford',
      price: 36.00,
      reviews: [{userID: 25, content:'I disagree with everything in this book'}, {userID: 250, content:'Only JS book anyone needs'}],
      inventory: 8,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
  },
  {
      id:4,
      title: 'JavaScript: The Definitive Guide',
      author: 'David Flanagan',
      price: 25.50,
      reviews: [{userID: 44, content:'Great intro to js book'}, {userID: 350, content:'It really is the Definitive guide'}],
      inventory: 0,
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
      
  },
  {
      id:5,
      title: 'You Don’t Know JS',
      author: 'Kyle Simpson',
      price: 6.00,
      reviews: [{userID: 76, content:'You can find this for free online, no need to pay for it!'}],
      inventory: 7,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
  }, 
  {
      id:6,
      title: 'Learn Enough JavaScript to Be Dangerous',
      author: 'Michael Hartl',
      price: 24.00,
      reviews: [{userID: 50, content:'pretty good'}],
      inventory: 5,
      imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW'

  },
  {
      id:7,
      title: 'Cracking the Coding Interview',
      author: 'Gayle Laakmann McDowell',
      price: 49.95,
      reviews: [{userID: 99, content:'One of the most helpful books for taking on the tech interview'}, {userID:20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
      inventory: 20,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'

  }
]

// Pre Work Questions?

// Function Declaration!
const day = "Monday"
// day = "Saturday"
const x = 25

let day2 = "Tuesday"
day2 = "Saturday"
// console.log(day2)


function sayHi(){
    console.log("Hello")
}


// Now lets call the function
// sayHi()

// Lets make a function with a parameter
function sayHelloUser(username){
    console.log("Hello there ", username)
}
// sayHelloUser("David")
// sayHelloUser("Jack")

function addTwo(num1,num2){
    const sum = num1+num2
    return sum
}
const solution = addTwo(5,24)
const solution2 = addTwo(solution,20)

// console.log(inventory)

// Using the data above what sort of function can we create?
function showPrice(book){
    console.log(book)
}
// showPrice(30)

// Anonomous Functions? Another way to write functions!
// function subtract(num1,num2){
    //     return num1 - num2
    // }
const subtract = function(num1,num2){
    return num1-num2
}

const sol = subtract(5,3)
// console.log(sol)

// Whats the difference? It comes down to where it is called


// Arrow Functions
function callOtherFunction(func){
    console.log(func(50,3))
}

// callOtherFunction((num1,num2) => {return num1-num2})
// callOtherFunction(addTwo)
// Arrow functions vs regular functions vs anonomous functions????
// Lets refactor the regular function above to be an arrow function!

// Now you try it!
// Try creating multiplyTwo and calling it in callOtherFunction
function multTwo(num1,num2){
    return num1 * num2
}
// callOtherFunction(multTwo)

// Scoping
// Global Scope
console.log(inventory)
const globalVar = "global"
// Function Scope
function scopeTesting(var1){
    console.log(var1)
    const funcScope = "Function"
    console.log(x)
    console.log(globalVar)
    if (true){
        const blockScope = "Block"
        console.log(globalVar)
        console.log(blockScope)
        console.log(funcScope)
    }
    function nestedFunc(){
        const nested = "Nested"
        console.log("nested")
        nestedAgain()
        function nestedAgain(){
            console.log(funcScope)
            console.log("Nested squared")
        }
    }
    nestedFunc()
}
scopeTesting("Testing Function Scope")
console.log(x)
// function scope2(){
//     console.log(var1)
// }
// scope2()
// Block Scope (If, else, for, while)

// Callback Functions, calling a function in a function

