let myLibrary = []

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isReaded = false;
  this.info = function () {
    return "Title: " + title + "\nAuthor: " + author + "\nPages: " + pages
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  showBooks();
}

function showBooks() {
  let booksTable = document.getElementById("booksTable")
  booksTable.innerHTML = "<thead><th>Title</th><th>Author</th><th>Pages</th><th>Read</th><th>Options</th>"
  myLibrary.forEach((book, index) => {
    const row = document.createElement('tr')
    const tdTitle = document.createElement("td")
    const tdAuthor = document.createElement("td")
    const tdPages = document.createElement("td")
    const tdReaded = document.createElement("td")
    const tdOptions = document.createElement("td")
    const deleteBtn = document.createElement("button")
    const toggleReadedBtn = document.createElement("button")
    tdOptions.className = "options-row"
    deleteBtn.innerHTML = 'DELETE'
    deleteBtn.className = "delete-button"
    deleteBtn.onclick = function () { deleteBook(index) };
    toggleReadedBtn.innerHTML = 'READED'
    toggleReadedBtn.className = "readed-button"
    toggleReadedBtn.onclick = function () { markReaded(index) };
    tdTitle.textContent = book.title
    tdAuthor.textContent = book.author
    tdPages.textContent = book.pages
    tdReaded.textContent = (book.isReaded) ? "Yes" : "No"
    tdOptions.appendChild(deleteBtn)
    tdOptions.appendChild(toggleReadedBtn)
    row.appendChild(tdTitle)
    row.appendChild(tdAuthor)
    row.appendChild(tdPages)
    row.appendChild(tdReaded)
    row.appendChild(tdOptions)
    booksTable.appendChild(row);
  })
}

function createNewBook() {
  let book = new Book(
    document.getElementById("title").value,
    document.getElementById("author").value,
    document.getElementById("pages").value
  )
  addBookToLibrary(book);
  closeForm();
}

function deleteBook(index) {
  delete myLibrary[index]
  showBooks();
}

function markReaded(index) {
  myLibrary[index].isReaded = !myLibrary[index].isReaded
  showBooks();
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Mock Data
const book1 = new Book("Hobbit", "Tolkien", 800)
const book2 = new Book("Harry Potter i komnata tajemnic", "J.K. Rowling", 532)

addBookToLibrary(book1)
addBookToLibrary(book2)

showBooks();