fetch('http://localhost:3000/books')
.then(r =>r.json())
.then(books=>{
    console.log(books)
    const nums = [1,2,3,4,5]
    // [false, false, true, true, true]
    // [3,4,5]
    // const newNums = nums.filter((number)=>{
    //     if (number < 2){
    //         return true
    //     }
    //     return false
    // })
    // console.log(newNums)
    const filteredBooks = books.filter((book)=>{
        if(book.title.toLowerCase().includes("javascript")){
            return true
        }
        return false
    })
    console.log(filteredBooks)
    // [1,2,3,4,5]
})