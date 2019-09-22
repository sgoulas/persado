/**
 * HANDLEBARS variable declarations
 */
let booksSource;
let booksTemplate;
let usersSource;
let usersTemplate;

/**
 * on document ready get all users from database and render them on the document
 */
$("document").ready(() => {
    //loaned books template
    booksSource = document.getElementById("loaned-books-template").innerHTML;
    booksTemplate = Handlebars.compile(booksSource);
    //users template
    usersSource = document.getElementById("entry-template").innerHTML;
    usersTemplate = Handlebars.compile(usersSource);

    /**
     *
     * @param {Array} dbUsers of database JSON objects
     * dynamically create an html list-item element for each user
     * and render it on the DOM
     */
    const populateUserHTMLlist = dbUsers => {
        let usersArray = [];
        for (let i = 0; i < dbUsers.length; i++) {
            let user = {};
            user = {
                id: dbUsers[i].U_ID,
                firstName: dbUsers[i].FirstName,
                lastName: dbUsers[i].LastName,
                loaned: dbUsers[i].BooksLoaned
            };

            usersArray.push(user);
        }

        //sort the list alphabetically by last name
        usersArray.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));

        //create the html elements and render them
        for (let i = 0; i < usersArray.length; i++) {
            let html = usersTemplate(usersArray[i]);
            $("#usersList").append(html);
        }
    };

    let users; //all database users

    let getUsersPromise = new Promise((resolve, reject) => {
        $.ajax({
            url: "/persado/www/Database/manageUsers.php",
            type: "GET",
            success: function(data) {
                users = data;
                resolve("success");
            },
            error: function(xhr, statusText, err) {
                reject("error" + xhr.status);
            }
        });
    });

    getUsersPromise
        .then(() => {
            users = JSON.parse(users);
            //call handlebars
            populateUserHTMLlist(users);
        })
        .catch(reason => {
            console.table(reason);
            alert(
                "Something went wrong! Please contact your system administrator."
            );
        });
});

const deleteUserConfirmation = userName => {
    let confirmation = confirm(
        "Are you sure you want to delete user " +
            userName +
            " ?\nThis action can not be undone."
    );

    return confirmation;
};

/**
 *
 * @param {Array} booksList of database JSON objects
 * dynamically create an html list-item element for each book the user has loaned
 * and render it on the DOM
 */
const populateUserLoanedBooksList = booksList => {
    objectifySerializedArray(booksList);
    let bookArray = [];
    for (let i = 0; i < booksList.length; i++) {
        let book = {};
        book = {
            bookName: booksList[i].Name,
            dateLoaned: booksList[i].DateLoaned
        };
        bookArray.push(book);
    }

    //sort the list by date loaned
    bookArray.sort((a, b) => (a.dateLoaned > b.dateLoaned ? 1 : -1));

    //create the html elements and render them
    let previousRenderedLoanedBooks = $(".list-group-item.loaned-books");
    for (let i = 0; i < previousRenderedLoanedBooks.length; i++) {
        previousRenderedLoanedBooks.eq(i).remove();
    }
    for (let i = 0; i < bookArray.length; i++) {
        let html = booksTemplate(bookArray[i]);
        $("#user-loaned-books-list").append(html);
    }
    //show the list
    $("#user-loaned-books-list").show();
};

/**
 * @param userID of type {String} the ID of the user to search for loaned books,
 * @returns a JSON array of book names this user has loaned and not yet returned
 */
const refuseToDelete = userID => {
    alert("User must first return loaned books!"); //TODO move this message from an alert to inside the DOM
    let data = { ID: userID };
    //get the books this user has loaned
    let getUserLoanedBooksPromise = new Promise((resolve, reject) => {
        $.ajax({
            url: "/persado/www/Database/getUserLoanedBooks.php",
            type: "POST",
            data: JSON.stringify(data),
            success: function(data) {
                resolve(data);
            },
            error: function(xhr, statusText, err) {
                console.log("error" + xhr.status);
                reject("error" + xhr.status);
            }
        });
    });

    getUserLoanedBooksPromise
        .then(value => {
            populateUserLoanedBooksList(JSON.parse(value));
        })
        .catch(reason => {
            console.log(reason);
        });
};

/**
 * EVENT LISTENERS
 */
$("body").on("click", ".glyphicon.glyphicon-remove", function() {
    let userName = $(this)
        .closest(".list-group-item")
        .attr("data-name");
    let userID = $(this)
        .closest(".list-group-item")
        .attr("data-id");
    let userCanBeDeleted =
        parseInt(
            $(this)
                .closest(".list-group-item")
                .attr("data-books-loaned")
        ) === 0;

    if (!deleteUserConfirmation(userName)) {
        return false;
    }
    //get user id from the html5 attribute

    if (!userCanBeDeleted) {
        //display info message + list of books that are currently loaned to user
        refuseToDelete(userID);
        return false;
    }
    //delete user
    let data = { ID: userID };
    let deleteUserPromise = new Promise((resolve, reject) => {
        $.ajax({
            url: "/persado/www/Database/deleteUser.php",
            type: "POST",
            data: JSON.stringify(data),
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

    deleteUserPromise
        .then(() => {
            //remove the row from the document
            $(this)
                .closest(".list-group-item")
                .remove();
            //alert the user was deleted
            alert("User successfully deleted.");
        })
        .catch(reason => {
            console.table(reason);
            alert(
                "Something went wrong! Please contact your system administrator."
            );
        });
});
