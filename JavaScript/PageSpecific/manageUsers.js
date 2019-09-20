/**
 * HANDLEBARS code
 */

// $("document").ready(() => {
//     let source = document.getElementById("entry-template").innerHTML;
//     let template = Handlebars.compile(source);
//     let context = { title: "My New Post", body: "This is my first post!" };
//     let html = template(context);
//     $("#usersList").html(html);
// });

/**
 * EVENT LISTENERS
 */
$("body").on("click", ".glyphicon.glyphicon-remove", function() {
    console.log("remove button clicked");
});
