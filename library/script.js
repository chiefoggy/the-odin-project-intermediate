let myLibrary = [];
class Book {
    constructor(title, author, genre, pages, description, status) {
        this.ID = crypto.randomUUID(); // random ID
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pages = pages;
        this.description = description;
        this.status = status;
    }
}

function addBookToLibrary(title, author, genre, pages, description){
    const status = document.querySelector('input[name="status"]:checked').value;
    const book = new Book(title, author, genre, pages, description, status);
    myLibrary.push(book);
    createBookCard(book);
    console.log('new book added!');
}

function createBookCard(book){
    const container = document.getElementById('libraryContainer');
    const card = document.createElement('div')
    card.className = 'book-card';
    card.id = book.ID;
    card.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
        <p><strong>Number of pages:</strong> ${book.pages}</p>
        <p><strong>Description:</strong> ${book.description}</p>
        <p><strong>Status:</strong> ${book.status}</p>
        <button class="delete-btn" data-id="${book.ID}">Delete </button>
    `;
    container.appendChild(card)

    const deleteBtn = card.querySelector(".delete-btn");
    deleteBtn.addEventListener('click', () => {
        deleteBook(book.ID);
    });
}

function deleteBook(bookID){
    myLibrary = myLibrary.filter(book => book.ID !== bookID);
    const card = document.getElementById(bookID);
    if (card) card.remove();
}

const form = document.getElementById('addBook');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const pages = document.getElementById('pages').value;
    const description = document.getElementById('description').value;

    addBookToLibrary(title, author, genre, pages, description);

    form.reset();
});