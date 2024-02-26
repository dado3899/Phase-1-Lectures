document.addEventListener('DOMContentLoaded', () => {
  //Fetch from https://dog.ceo/dog-api/
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(r=>r.json())
  .then(data=>{
    console.log(data)
    const list = document.querySelector('#book-list')
    const img = document.createElement("img")
    img.src = data.message
    list.append(img)
  })
  //Fetch from weather api
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=55.8617&lon=4.2583&appid=${apiKey}`)
  .then(r=>r.json())
  .then(data=>{
    console.log(data)
  })
})