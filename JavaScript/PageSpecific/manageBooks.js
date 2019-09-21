/**
 * HANDLEBARS variable declarations
 */

let booksSource;
let booksTemplate;

const populateBooksList = booksList => {
    let bookArray = [];
    for (let i = 0; i < booksList.length; i++) {
        let book = {};
        book = {
            bookID: booksList[i].Book_ID,
            bookName: booksList[i].Name,
            ISBN: booksList[i].ISBN,
            purchased: booksList[i].Purchased,
            available: booksList[i].Available
        };
        bookArray.push(book);
    }
    //sort the list alphabetically by last name
    bookArray.sort((a, b) => (a.bookName > b.bookName ? 1 : -1));

    //create the html elements and render them
    for (let i = 0; i < bookArray.length; i++) {
        let html = booksTemplate(bookArray[i]);
        $("#books-table-body").append(html);
    }
};

$("document").ready(() => {
    //books template
    booksSource = document.getElementById("books-template").innerHTML;
    booksTemplate = Handlebars.compile(booksSource);

    let getBooksPromise = new Promise((resolve, reject) => {
        $.ajax({
            url: "/persado/www/Database/getAllBooks.php",
            type: "GET",
            success: function(data) {
                books = data;
                resolve(data);
            },
            error: function(xhr, statusText, err) {
                reject("error" + xhr.status);
            }
        });
    });

    getBooksPromise
        .then(value => {
            populateBooksList(JSON.parse(value));
        })
        .catch(reason => {
            alert(reason);
        });
});
