/**
 * HANDLEBARS variable declarations
 */

let booksSource;
let booksTemplate;
let bookSummaries = [];

/**
 *
 * @param {Array} booksList
 * populate the DOM with all the books in the booksList array
 */
const populateBooksList = booksList => {
    let bookArray = [];
    for (let i = 0; i < booksList.length; i++) {
        let book = {};
        let bookSummary = {
            bookID: booksList[i].Book_ID,
            summary: booksList[i].Summary
        };
        book = {
            bookID: booksList[i].Book_ID,
            bookName: booksList[i].Name,
            ISBN: booksList[i].ISBN,
            purchased: booksList[i].Purchased,
            available: booksList[i].Available,
            onLoan: booksList[i].Purchased - booksList[i].Available
        };

        bookSummaries.push(bookSummary);
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

/**
 *
 * @param {Array} loanedBooks
 * loops through all loaned books and matches them with their rendered counterparts,
 * then renders in the correct table column the names of the current occupants of the copies.
 * TODO This should be done in a more efficient way
 */
const populateLentToColumn = loanedBooks => {
    let renderedBooks = $(".book");
    for (let i = 0; i < loanedBooks.length; i++) {
        for (let j = 0; j < renderedBooks.length; j++) {
            if (
                loanedBooks[i].Book_ID ===
                renderedBooks.eq(j).attr("data-book-id")
            ) {
                let html =
                    "<p>" +
                    loanedBooks[i].FirstName +
                    " " +
                    loanedBooks[i].LastName +
                    "</p>";
                renderedBooks
                    .eq(j)
                    .find(".current-owners")
                    .append(html);
            }
        }
    }
};

/**
 *
 * @param {String} bookID
 * @returns the summary of the book specified by bookID param
 */
const getBookSummary = bookID => {
    for (let i = 0; i < bookSummaries.length; i++) {
        if (bookSummaries[i].bookID == bookID) {
            return bookSummaries[i].summary;
        }
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

/*****************
 * DOCUMENT READY
 *****************/
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
        .then(() => {
            //TODO also add currently loaned to..
            $.ajax({
                url: "/persado/www/Database/getBooksCurrentlyLoaned.php",
                type: "GET",
                success: function(data) {
                    populateLentToColumn(JSON.parse(data));
                },
                error: function(xhr, statusText, err) {
                    console.log("error" + xhr.status);
                }
            });
        })
        .catch(reason => {
            alert(reason);
        });

    /*******************
     * EVENT LISTENERS
     *******************/

    /**
     * DELETE BOOK LISTENER
     */
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

    /**
     * DISPLAY BOOK SUMMARY LISTENER
     */

    $("body").on("click", ".glyphicon.glyphicon-text-size", function() {
        let bookID = $(this)
            .closest("tr")
            .attr("data-book-id");

        let bookSummary = getBookSummary(bookID);
        let bookName = $(this)
            .closest("tr")
            .attr("data-book-name");
        $("#bookSummary").html(bookSummary);
        $("#book-summary-title").html("'" + bookName + "'");
        $("#book-summary-info").show();
    });
});
