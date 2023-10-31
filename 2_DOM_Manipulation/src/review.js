const inventory = [
    {
        id:1,
        title: 'Eloquent JavaScripta: A Modern Introduction to Programming',
        author: 'Marjin Haverbeke',
        price: 10.00,
        reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
        inventory: 10,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',  
    },
    {
        id:2,
        title: 'JavaScriptb & JQuery: Interactive Front-End Web Development',
        author: 'Jon Duckett',
        price: 45.75,
        reviews: [{userID: 15, content:'good way to learn JQuery'}],
        inventory: 2,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
    },
    {
        id:3,
        title: 'JavaScriptc: The Good Parts',
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
// Global
const glob = "global"
// Functions
// Regular
const solution = add_func(5,3)
function add_func(a,b){
    return a+b
}
// const solution = add_func(5,3)
console.log(solution)
// Anonomous
const anon_func = function(a,b){
    return a-b
}
const solution2 = anon_func(5,3)
console.log(solution2)

function callback(func){
    return func(5,3)
}
// Arrow
const solution3 = callback((a,b) => {
    return a*b
})
console.log(solution3)

// Scope


// Function
function scope_test(){
    const func_scope = "function"
    console.log(glob)
    console.log(func_scope)
    if (true){
        const block_scope = "block"
        console.log(block_scope)
    }
}
scope_test()
// Block
// console.log(func_scope)
// map,foreach,filter
const array_nums = [5,10,30,20,50]

const map_array = array_nums.map((variable)=>{
    return variable+5
})
console.log(map_array)
console.log(array_nums)

const foreach = array_nums.forEach((variable)=>{
    console.log(variable+3)
})
console.log(foreach)

const filter_array = array_nums.filter((variable)=>{
    if(variable >= 10){
        return true
    }
    return false
})
console.log(filter_array)

// Sorts!
// const newArray = inventory.sort(comparison)
const newArray = inventory.sort((a,b)=>{
    if(a.title < b.title){
        return -1
    }
    else if(b.title < a.title){
        return 1
    }
    return 0
})
console.log(newArray)
console.log(array_nums)
// Comparitor function:
// function compareFn(a, b) {
//     if (a is less than b by some ordering criterion) {
//       return -1;
//     } else if (a is greater than b by the ordering criterion) {
//       return 1;
//     }
//     // a must be equal to b
//     return 0;
//   }
function comparison(a,b){
    if(a.title < b.title){
        return -1
    }
    else if(b.title > a.title){
        return 1
    }
    return 0
}