document.addEventListener('DOMContentLoaded', () => {
  //Fetch from https://dog.ceo/dog-api/
  //Fetch from weather api
  fetch('https://pokeapi.co/api/v2/pokemon/blastoise')
  .then(r=>r.json())
  .then(data=> console.log(data))
})