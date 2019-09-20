/**
 * on document ready get all users from database and render them on the document
 */
$("document").ready(() => {
    /**
     * HANDLEBARS code
     */
    let source = document.getElementById("entry-template").innerHTML;
    let template = Handlebars.compile(source);

    /**
     *
     * @param {Array} dbUsers of database JSON objects
     * dynamically create an html list-item element for each user
     * and render it on the page
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
            let html = template(usersArray[i]);
            $("#usersList").append(html);
        }
    };

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
            users = JSON.parse(users);
            //call handlebars...
            populateUserHTMLlist(users);
        })
        .catch(reason => {
            console.table(reason);
            alert(
                "Something went wrong! Please contact your system administrator."
            );
        });
});

/**
 *
 * @param {String} id the id of the user in the database
 * deletes the specified user in the dabase
 */
const deleteUser = id => {
    $.ajax({
        url: "/persado/www/Database/deleteUser.php",
        type: "POST",
        success: function(data) {
            console.log(data);
            //alert the user was deleted
            resolve("success");
        },
        error: function(xhr, statusText, err) {
            console.log("error" + xhr.status);
            //alert the error
            reject("error" + xhr.status);
        }
    });
};

/**
 * EVENT LISTENERS
 */
$("body").on("click", ".glyphicon.glyphicon-remove", function() {
    console.log("remove button clicked");
    //dlete user
});
