$("document").ready(function() {
    /**
     * Handlebars templates compilations
     */
    let booksSource = document.getElementById("loaned-books-template")
        .innerHTML;
    let booksTemplate = Handlebars.compile(booksSource);
    let userSource = document.getElementById("user-options").innerHTML;
    let userTemplate = Handlebars.compile(userSource);

    let getLoanedBooksPromise = new Promise((resolve, reject) => {
        //TODO AJAX call
    });

    getLoanedBooksPromise
        .then(data => {
            //TODO parse data
            //TODO populate DOM
        })
        .catch(reason => {
            console.table(reason);
            alert(
                "Something went wrong! Please contact your system administrator."
            );
        });

    const renderLoanedBooks = books => {
        //TODO render
    };
});
