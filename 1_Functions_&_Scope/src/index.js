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
const x = "Hello"
// console.log("Hello World")
// Function Declaration!
function say_hello(){
    console.log("I'm saying hello")
}

// Now lets call the function
// say_hello()
// say_hello()

// Lets make a function with a parameter
function say_hello_person(name){
    console.log("Hello " + name)
}
// say_hello_person("David")
// say_hello_person("Bob")
// const someones_name = "Bill"
// say_hello_person(someones_name)

// console.log(math_add(1,2,3))

// This is a comment
function math_add(num1,num2,num3){
    sum = num1 + num2 + num3
    return sum
}
// math_add = sum
solution = math_add(5,3,1)
// console.log(solution)

// Using the data above what sort of function can we create?
// function alphebatize(inventory){
//     inventory.map((book)=>{
//         console.log(book)
//     })
// }
// alphebatize(inventory)

// Anonomous Functions? Another way to write functions!
function standard_function(function_to_pass){
    function_to_pass(10)
}
// python def standard_function()

// Anonomous
const af = function (){
    return "a function"
}

// console.log(x)


// standard_function(function (variable){ console.log(variable+variable) })
// Whats the difference? It comes down to where it is called


// Arrow Functions
// Arrow functions vs regular functions vs anonomous functions????
// standard_function((variable)=>{
//     console.log(variable*variable)
// })
// Lets refactor the regular function above to be an arrow function!

// Scoping
// Global Scope
const global_var = "Global"
console.log(global_var)

function_scope()

// Function Scope
function function_scope(){
    const function_var = "Function"
    console.log(global_var)
    console.log(function_var)
    // Block Scope (If, else, for, while)
    function_in_function()
    function function_in_function(){
        console.log("I am a function in a function")
        function_in_function_in_function()
        function function_in_function_in_function(){
            console.log("I am a function in a function in a function")
        }
    }
    if (true){
        const block_var = "Block"
        console.log(global_var)
        console.log(function_var)
        console.log(block_var)
    }
    // console.log(block_var)
}
// function_scope()

// console.log(function_var)
// console.log(block_var)
console_log_day_by_day(console_log_today_2)
// console_log_today("Wed", "Sleep")
function console_log_today(day,activity){
    console.log(day + " " + activity)
}
function console_log_today_2(day,activity){
    console.log(activity + " done on " + day)
}

// Callback Functions, calling a function in a function
function console_log_day_by_day(today_function){
    today_function("Monday","Swim")
    today_function("Tuesday","Run")
}
const simple_array = [1,2,3,4]
const fe_var = inventory.forEach((item)=>{
    // same as item.inventory = item.inventory+1
    item.price += 1
    return item.price
})

const map_var = inventory.map((book)=>{
    // same as item.inventory = item.inventory+1
    book.inventory2 = book.inventory + 1
    return 1
})
// expects to return t/f
const filter_array = inventory.filter((book)=>{
    return book.price > 20
})
const filter_array_2 = inventory.filter((book)=> book.price > 20)
console.log(filter_array)
// undefined, false, 0 = false
// for(i=0;i<inventory.length;i++)
// {
//     console.log(inventory[i])
// }

// console.log(map_var)
// function into_arrow(item){
//     console.log(item)
// }
// simple_array.forEach(into_arrow)
// forEach vs Map