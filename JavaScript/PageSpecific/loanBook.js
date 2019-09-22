/*****************
 * DOCUMENT READY
 *****************/
$("document").ready(function() {
    /**
     * HANDLEBARS variable declarations
     */

    let booksSource = document.getElementById("loan-book-template").innerHTML;
    let booksTemplate = Handlebars.compile(booksSource);

    let getAvailableBooksPromise = new Promise((resolve, reject) => {
        $.ajax({
            url: "/persado/www/Database/getAvailableBooks.php",
            type: "GET",
            success: function(data) {
                resolve(data);
            },
            error: function(xhr, statusText, err) {
                console.log("error" + xhr.status);
                reject("error" + xhr.status);
            }
        });
    });

    let getEligibleUsersPromise = new Promise((resolve, reject) => {
        //TODO AJAX call
    });

    /**
     * promise chain
     * get available books
     * then populate the list
     * then get eligible users
     * then populate the user dropdown menus
     */
    getAvailableBooksPromise
        .then(data => {
            populateBooksList(JSON.parse(data));
        })
        .then(() => {
            return getEligibleUsersPromise;
        })
        .then(data => {
            console.log(data);

            populateUserDropdowns(JSON.parse(data));
        })
        .catch(reason => {
            console.table(reason);
            alert(
                "Something went wrong! Please contact your system administrator."
            );
        });

    const populateBooksList = books => {
        let listEntries = [];
        for (let i = 0; i < books.length; i++) {
            let entry = {
                BookName: books[i].Name,
                Available: books[i].Available
            };
            listEntries.push(entry);
        }
        //sort the list alphabetically by book name
        listEntries.sort((a, b) => (a.BookName > b.BookName ? 1 : -1));

        for (let i = 0; i < listEntries.length; i++) {
            let html = booksTemplate(listEntries[i]);
            $("#available-books-list").append(html);
        }
    };

    const populateUserDropdowns = users => {};
});
