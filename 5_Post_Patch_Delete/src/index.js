document.addEventListener('DOMContentLoaded', () => {
  // Basic Get request (Read)

  // Post
  
  // Delete

  // Patch

  // Yesterdays:
  // Renders Header
  function renderHeader(store){
    document.querySelector('h1').textContent = store.name;
  }
  // Renders Footer
  function renderFooter(store){
    const footerDivs = document.querySelectorAll('footer div');
    footerDivs[0].textContent = store.name;
    footerDivs[1].textContent = store.address;
    footerDivs[2].textContent = store.hours;
  }
  //Add a book from yesterday
  
})