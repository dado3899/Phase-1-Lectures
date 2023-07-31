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
// const x = "Hello"
// console.log(x)
// Function Declaration!
function firstFunction(){
    console.log("WE ARE IN A FUNCTION")
    console.log("YIPEEE")
}
// Now lets call the function
firstFunction()

function secondFunction(data){
    console.log(data)
}
secondFunction("This is a piece of data2")
secondFunction(10)
// Lets make a function with a parameter
function addNumbers(num1,num2){
    return num1+num2
}
const nums = addNumbers(3,5)
console.log(nums)
// Using the data above what sort of function can we create?

// Anonomous Functions? Another way to write functions!
console.log(
    function(){
        console.log("Hello")
        return "Anonomous"
    }()
)

// Whats the difference? It comes down to where it is called


// Arrow Functions
// Arrow functions vs regular functions vs anonomous functions????

const arrowFunc = (variable)=>{
    console.log("Hello Arrow")
    console.log(variable)
}
arrowFunc()
// Lets refactor the regular function above to be an arrow function!
belowTest()

function belowTest(){
    console.log("We are below")
}

// Scoping
// Global Scope
// console.log(inventory)
// Function Scope
let x
function scopeTesting(){
    const functionScopeVar = "We are in an function"
    console.log(inventory)
    let changingVar 
    x=190
    if(true){
        console.log(functionScopeVar)
        const ifScope = "We are in an If"
        changingVar = 5
        function testAccess(){
            console.log(ifScope)
        }
        testAccess()
    }
    console.log(changingVar)
    return functionScopeVar
}

console.log("This is ", x)
const functionScopeVar = scopeTesting()
console.log(functionScopeVar)
console.log(x)
console.log(`This is ${functionScopeVar+"ADDING TO THE END"} with string interpolation`)
console.log("This is ${functionScopeVar+ADDING TO THE END} with string interpolation")
// Block Scope (If, else, for, while)
let ifStatement = 10

if(ifStatement > 0){
    console.log("IN IF")
}
else if(ifStatement === -10){
    console.log("IN ELSE IF")
}
else if(ifStatement < 0){
    console.log("IN ELSE IF 2")
}
else{
    console.log("IN ELSE")
}

while(ifStatement > 0){
    // ifStatement = ifStatement - 1
    console.log("Countdown ", ifStatement)
    ifStatement -= 1
}
const arrayExample = ["First Number","Second number",2,3,4,5,"String", "SOMETHING"]
for(let x=0; x < inventory.length; x++){
    console.log(inventory[x])
}

const mapTest = inventory.map((item)=>{
    console.log(item)
    return(item.title)
})
const itemCall = "id"
inventory.forEach((item)=>{
    console.log(item[itemCall])
    return(x.title)
})

console.log(mapTest)
// console.log(forEach)
console.log(inventory[1]["reviews"][0])
// Callback Functions, calling a function in a function

function outerFunction(innerFunction){
    console.log("outerFunction")
    console.log(innerFunction)
}

function bob(){
    console.log("Inner Function")
}
function tim(){
    console.log("In tim")
    return 202
}
outerFunction(bob)
outerFunction(tim())
outerFunction(()=>{console.log("INNER ARROW FUNCTION")})
console.log(tim)