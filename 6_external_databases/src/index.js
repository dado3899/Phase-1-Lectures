document.addEventListener('DOMContentLoaded', () => {
  // GET
  // let data
  // fetch("http://localhost:3000/stores")
  // .then(r => r.json())
  // .then(data => console.log(data))
  
  // .then(data => console.log(data))
  
  //POST
  // fetch("http://localhost:3000/users",{
  //   method: "POST",
  //   headers: {
  //     "Content-Type":"Application/json"
  //   },
  //   body:JSON.stringify({
  //     test:"Test"
  //   })
  // })
  // .then(r=>r.json())
  // .then(data=>console.log(data))

  //patch
  // fetch("http://localhost:3000/users/2",{
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type":"Application/json"
  //   },
  //   body:JSON.stringify({
  //     test:"User Test",
  //     username:"testuser"
  //   })
  // })
  // .then(r=>r.json())
  // .then(data=>console.log(data))

  //DELETE
  // fetch("http://localhost:3000/users/2",{
  //   method:"DELETE"
  // })
  // .then(r=>r.json())
  // .then(data => console.log(data))

  //Fetch from https://dog.ceo/dog-api/
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(r => r.json())
  .then(data=>{
    console.log(data)
    // <img/>
    img = document.createElement('img')
    // <img src=/>
    // <img id= // img.id =
    img.src = data.message
    document.querySelector("#book-list").appendChild(img)
    //Post to our database
    fetch("http://localhost:3000/randomDogSaved",{
      method: "POST",
      headers: {
        "Content-Type":"Application/json"
      },
      body: JSON.stringify(data)
    })
  })
  const key = "c82d5efadbe37e6a719e4c9825b64b6b"
  //Fetch from weather api
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=39.7392&lon=-104.9903&appid=${key}`)
  .then(r=>r.json())
  .then(data=>console.log(data))
})