document.addEventListener('DOMContentLoaded', () => {
  // To start off let us start the json server and test the routes in our web browser

  // Basic Get Request
  // fetch(url)
  // .then((r)=>r.json())
  // .then((data)=> )
  // .catch(e => console.log(e))

  // We can fetch either all the data or just one!

  // Now lets refactor what we had yesterday to be more dynamic!
  // We can use store to render the header and footer!

  // Yesterdays:
  // Renders Header
  function renderHeader(){
    document.querySelector('h1').textContent = bookStore.name;
  }
  // Renders Footer
  function renderFooter(){
    const footerDivs = document.querySelectorAll('footer div');
    footerDivs[0].textContent = bookStore.name;
    footerDivs[1].textContent = bookStore.address;
    footerDivs[2].textContent = bookStore.hours;
  }

  // Lets take the logic of yesterdays card data rendering as well!

  // Now instead of calling bookData let us fetch from the database

})