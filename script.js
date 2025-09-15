// get references
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const submitInput = document.getElementById('submit');
const bookListInput = document.getElementById('book-list');

function addBook(e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const isbn = isbnInput.value.trim();

  if (title === '' || author === '' || isbn === '') {
    alert('Please fill the form');
    return;
  }

  const row = document.createElement('tr');

  const titleCell = document.createElement('td');
  titleCell.textContent = title;
  row.appendChild(titleCell);

  const authorCell = document.createElement('td');
  authorCell.textContent = author;
  row.appendChild(authorCell);

  const isbnCell = document.createElement('td');
  isbnCell.textContent = isbn;
  row.appendChild(isbnCell);

  const deleteCell = document.createElement('td');
  const btnDelete = document.createElement('button');
  btnDelete.textContent = '×';               // Put "x" or multiplication sign
  btnDelete.className = 'delete';            // give class delete
  // optionally style with bootstrap or custom css
  btnDelete.addEventListener('click', function() {
    row.remove();
  });
  deleteCell.appendChild(btnDelete);
  row.appendChild(deleteCell);

  bookListInput.appendChild(row);

  // Clear input fields
  titleInput.value = '';
  authorInput.value = '';
  isbnInput.value = '';
}

// Hook up the listener
submitInput.addEventListener('click', addBook);

 