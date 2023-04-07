function solve() {
   let searchInput = document.getElementById('searchField');

   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //   TODO:
      let searchedWord = searchInput.value;
      let tableRows = Array.from(document.querySelectorAll('tbody tr'));
      for (const row of tableRows) {
         let trimmedTextContent = row.textContent.trim();
         if(row.classList.contains('select')){
            row.classList.remove('select');
         }
         if(trimmedTextContent.includes(searchedWord)){
            row.classList.add('select');
         }
         searchInput.value = '';
         console.log(row.textContent);
         
      }
   }
}