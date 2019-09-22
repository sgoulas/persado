/*****************
 * DOCUMENT READY
 *****************/
$("document").ready(function() {
    /**
     * HANDLEBARS variable declarations
     */

    let booksSource = document.getElementById("loan-book-template").innerHTML;
    let booksTemplate = Handlebars.compile(booksSource);
    let userSource = document.getElementById("user-options").innerHTML;
    let userTemplate = Handlebars.compile(userSource);

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
        $.ajax({
            url: "/persado/www/Database/getEligibleUsers.php",
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
                BookID: books[i].Book_ID,
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

    const populateUserDropdowns = users => {
        let userArray = [];
        for (let i = 0; i < users.length; i++) {
            let user = {
                UserID: users[i].U_ID,
                FirstName: users[i].FirstName,
                LastName: users[i].LastName
            };
            userArray.push(user);
        }

        let html = userTemplate(userArray[0]);
        for (let i = 1; i < userArray.length; i++) {
            html += userTemplate(userArray[i]);
        }
        let dropdownMenus = $(".users-select-menu");
        for (let i = 0; i < dropdownMenus.length; i++) {
            dropdownMenus.eq(i).append(html);
        }
    };

    /******************
     * EVENT LISTENERS
     ******************/

    $("body").on("change", ".users-select-menu", function() {
        var selectedOption = this.value;
        let allOptions = $(this).find(".user-option");
        let selecteUserID;
        for (let i = 0; i < allOptions.length; i++) {
            if (allOptions.eq(i).html() === selectedOption) {
                selecteUserID = allOptions.eq(i).attr("data-user-id");
            }
        }
        $(this)
            .closest(".user-row")
            .find(".loan-button")
            .attr("data-loan-to-id", selecteUserID);
    });
});
