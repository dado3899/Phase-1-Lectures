document.addEventListener('DOMContentLoaded', () => {
  // so I can push
  //Fetch from https://dog.ceo/dog-api/
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(r=>r.json())
  .then(dog =>{
    console.log(dog)
    const booklist = document.querySelector("#book-list")
    const image = document.createElement("img")
    image.src = dog.message
    booklist.append(image)
  })
  //Fetch from weather api
  fetch('https://api.breakingbadquotes.xyz/v1/quotes/100')
  .then(r=>r.json())
  .then(data=>{
    console.log(data)
  })
  const lat = 29.9792
  const lon = 31.1342

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
  .then(r=>r.json())
  .then(data=>{
    console.log(data)
  })
})