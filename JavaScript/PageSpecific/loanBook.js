/**
 * HANDLEBARS variable declarations
 */

let booksSource;
let booksTemplate;

/*****************
 * DOCUMENT READY
 *****************/
$("document").ready(function() {
    //books template
    booksSource = document.getElementById("loan-book-template").innerHTML;
    booksTemplate = Handlebars.compile(booksSource);
});
