$("document").ready(() => {
    /**
     * HANDLEBARS code
     */
    let source = document.getElementById("entry-template").innerHTML;
    let template = Handlebars.compile(source);

    //call this on a function call
    let context = { name: "My new user" };
    let html = template(context);
    $("#usersList").html(html);

    let users; //all database users

    let getUsersPromise = new Promise((resolve, reject) => {
        $.ajax({
            url: "/persado/www/Database/manageUsers.php",
            type: "GET",
            success: function(data) {
                console.log(data);
                users = data;
                resolve("success");
            },
            error: function(xhr, statusText, err) {
                console.log("error" + xhr.status);
                reject("error" + xhr.status);
            }
        });
    });

    getUsersPromise
        .then(() => {
            console.log("got all users");
            users = JSON.parse(users);
            //call handlebars...
        })
        .catch(reason => {
            console.table(reason);
            alert(
                "Something went wrong! Please contact your system administrator."
            );
        });
});

/**
 * EVENT LISTENERS
 */
$("body").on("click", ".glyphicon.glyphicon-remove", function() {
    console.log("remove button clicked");
});
