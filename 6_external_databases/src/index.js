document.addEventListener('DOMContentLoaded', () => {
  // fetch('http://whiskyhunter.net/api/distillery_data/')
  // .then(r =>r.json())
  // .then(data => console.log(data))
  //Fetch from https://dog.ceo/dog-api/
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(r => r.json())
  .then(data => console.log(data))
  //Fetch from weather api
  const lat = 12
  const long = 30
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=${api_key}`)
  .then(r => r.json())
  .then(weather => console.log(weather))
})