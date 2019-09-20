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
 * EVENT LISTENERS
 */
$("body").on("click", ".glyphicon.glyphicon-remove", function() {
    console.log("remove button clicked");
    //can this user be deleted?
    let userCanBeDeleted; //check loaned book data
    if (!userCanBeDeleted) {
        //display info message + list of books that are currently loaned to user
        return false;
    }
    //get user id
    let userID;
    //delete user
    let deleteUserPromise = new Promise((resolve, reject) => {
        $.ajax({
            url: "/persado/www/Database/deleteUser.php",
            type: "POST",
            data: userID,
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
            //alert the user was deleted
        })
        .catch(reason => {
            console.table(reason);
            alert(
                "Something went wrong! Please contact your system administrator."
            );
        });
});
