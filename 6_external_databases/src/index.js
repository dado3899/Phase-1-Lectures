document.addEventListener('DOMContentLoaded', () => {
  //Fetch from https://dog.ceo/dog-api/
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(r=>r.json())
  .then(data => {
    const img = document.querySelector("#dog-image")
    img.src = data["message"]
  })
  fetch("https://api.breakingbadquotes.xyz/v1/quotes")
  .then(r => r.json())
  .then(data => console.log(data))
  //Fetch from weather api
  const apiKey = "c82d5efadbe37e6a719e4c9825b64b6b"
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=39.7392&lon=104.9903&appid=${apiKey}`)
  .then(r=>r.json())
  .then(data=>{
    const weather = document.querySelector("#weather")
    weather.textContent = data.main.temp + "K"
  })
})