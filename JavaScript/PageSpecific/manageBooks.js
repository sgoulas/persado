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
            available: booksList[i].Available,
            onLoan: booksList[i].Purchased - booksList[i].Available
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

const deleteBookConfirmation = bookName => {
    let confirmation = confirm(
        'Are you sure you want to delete "' +
            bookName +
            '" ?\nThis action can not be undone.'
    );

    return confirmation;
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

    $("body").on("click", ".glyphicon.glyphicon-remove", function() {
        let copiesOnLoan = parseInt(
            $(this)
                .closest("tr")
                .attr("data-onloan")
        );
        let canBeDeleted = copiesOnLoan === 0;
        if (!canBeDeleted) {
            alert("Can not delete book. Copies of it are still on loan.");
            return false;
        }

        let bookName = $(this)
            .closest("tr")
            .attr("data-book-name");
        if (!deleteBookConfirmation(bookName)) {
            return false;
        }
        let bookID = $(this)
            .closest("tr")
            .attr("data-book-id");
        console.log(bookID);

        let dataID = { ID: bookID };

        let deleteBookPromise = new Promise((resolve, reject) => {
            $.ajax({
                url: "/persado/www/Database/deleteBook.php",
                type: "POST",
                data: JSON.stringify(dataID),
                success: function(data) {
                    console.log(data);
                    resolve("success");
                },
                error: function(xhr, statusText, err) {
                    console.log("error" + xhr.status);
                    reject("error" + xhr.status);
                }
            });
        });

        deleteBookPromise
            .then(() => {
                alert("Book successfully deleted.");
                $(this)
                    .closest(".book")
                    .remove();
            })
            .catch(reason => {
                console.table(reason);
                alert(
                    "Something went wrong! Please contact your system administrator."
                );
            });
    });
});
