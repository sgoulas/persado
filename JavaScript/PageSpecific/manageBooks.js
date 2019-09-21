/**
 * HANDLEBARS variable declarations
 */

let loanedBooksSource;
let loanedBooksTemplate;

$("document").ready(() => {
    //books template
    booksSource = document.getElementById("books-template").innerHTML;
    booksTemplate = Handlebars.compile(booksSource);

    let getBooksPromise = new Promise((resolve, reject) => {
        //TODO ajaxcall
    });

    getBooksPromise
        .then(value => {
            //TODO call handlebars and render books to DOM
        })
        .catch(reason => {
            alert(reason);
        });
});
