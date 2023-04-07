function attachEvents() {
  let loadBooks = document.getElementById('loadBooks');
  let booksContainer = document.querySelector('table > tbody');
  loadBooks.addEventListener('click',loadAllBooksHandler);
  let BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';
  let formHeader = document.querySelector('#form > h3');
  let [titleInput,authorInput] = Array.from(document.querySelectorAll('#form > input'));
  let submitBtn = document.querySelector('#form > button');
  submitBtn.addEventListener('click',submitBookHandler);

  let allBooks = {};
  let editBookId = null;

  async function submitBookHandler() {
    let title = titleInput.value;
    let author = authorInput.value;
    let httpHeaders = {
      method: 'POST',
      body: JSON.stringify({title,author})
    }
    let url = BASE_URL;

    if(formHeader.textContent === 'Edit FORM'){
      httpHeaders.method = 'PUT';
      url += editBookId;
    }
    let resData = await fetch(url,httpHeaders);
    loadAllBooksHandler();
    if(formHeader.textContent === 'Edit FORM'){
      formHeader.textContent = 'FORM';
    }
    titleInput.value = '';
    authorInput.value = '';
  }

  async function loadAllBooksHandler() {
    booksContainer.innerHTML = '';
    let booksRes = await fetch(BASE_URL);
    let booksData = await booksRes.json();
    allBooks = booksData;
    for (const bookId in booksData) {
      let {author,title} = booksData[bookId];
      let tableRow = document.createElement('tr');
      let titleColumn = document.createElement('td');
      let authorColumn = document.createElement('td');
      let buttonColumn = document.createElement('td');
      let editBtn = document.createElement('button');
      let deleteBtn = document.createElement('button');
      titleColumn.textContent = title;
      authorColumn.textContent = author;
      editBtn.textContent = 'Edit';
      deleteBtn.textContent = 'Delete';
      deleteBtn.id = bookId;

      editBtn.addEventListener('click',() => {
        editBookId = bookId;
        formHeader.textContent = 'Edit FORM';
        submitBtn.textContent = 'Save';
        titleInput.value = title;
        authorInput.value = author;
      });

      deleteBtn.addEventListener('click',deleteBookHandler);

      tableRow.appendChild(titleColumn);
      tableRow.appendChild(authorColumn);
      buttonColumn.appendChild(editBtn);
      buttonColumn.appendChild(deleteBtn);
      tableRow.appendChild(buttonColumn);
      booksContainer.appendChild(tableRow);
  
    }
  }
  async function deleteBookHandler() {
    let id = this.id;
    let httpHeaders = {
      method: 'DELETE'
    };

    await fetch(BASE_URL+id,httpHeaders);
    loadAllBooksHandler();
  }
}

attachEvents();