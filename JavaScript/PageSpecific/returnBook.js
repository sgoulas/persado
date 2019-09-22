$("document").ready(function() {
    /**
     * Handlebars templates compilations
     */
    let booksSource = document.getElementById("loaned-books-template")
        .innerHTML;
    let booksTemplate = Handlebars.compile(booksSource);
    let userSource = document.getElementById("user-options").innerHTML;
    let userTemplate = Handlebars.compile(userSource);
    let loanedData;

    let getLoanedBooksPromise = new Promise((resolve, reject) => {
        $.ajax({
            url: "/persado/www/Database/getLoanedBookAndUsers.php",
            type: "GET",
            success: function(data) {
                resolve(data);
            },
            error: function(xhr, statusText, err) {
                reject("error" + xhr.status);
            }
        });
    });

    getLoanedBooksPromise
        .then(data => {
            loanedData = JSON.parse(data);
            renderLoanedBooks(loanedData);
        })
        .then(() => {
            renderCurrentOwners(loanedData);
        })
        .catch(reason => {
            console.table(reason);
            alert(
                "Something went wrong! Please contact your system administrator."
            );
        });

    const renderLoanedBooks = books => {
        let booksArray = [];
        for (let i = 0; i < books.length; i++) {
            let obj = {
                BookID: books[i].Book_ID,
                BookName: books[i].Name
            };
            booksArray.push(obj);
        }

        //sort the list by book name
        booksArray.sort((a, b) => (a.BookName > b.BookName ? 1 : -1));
        for (let i = 0; i < booksArray.length; i++) {
            let html = booksTemplate(booksArray[i]);
            $("#loaned-books-list").append(html);
        }
    };

    const renderCurrentOwners = data => {
        let renderedBooks = $(".book-row");
        for (let i = 0; i < renderedBooks.length; i++) {
            let bookID = renderedBooks.eq(i).attr("data-book-id");
            for (let j = 0; j < data.length; j++) {
                if (bookID === data[j].Book_ID) {
                    let user = {
                        UserID: data[j].U_ID,
                        FirstName: data[j].FirstName,
                        LastName: data[j].LastName
                    };
                    let html = userTemplate(user);
                    renderedBooks
                        .eq(i)
                        .find(".users-select-menu")
                        .append(html);
                }
            }
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
            .closest(".book-row")
            .find(".return-button")
            .attr("data-return-from-id", selecteUserID);
    });

    $("body").on("click", ".return-button", function() {});
});
