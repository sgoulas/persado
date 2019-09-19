const addBookAJAX = formData => {
    let addBookPromise = new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            url: "/persado/www/Database/addBook.php",
            data: JSON.stringify(formData),
            success: function(data) {
                //this refers to the success of the AJAX call, not the db operation

                if (data.includes("error")) {
                    reject(data);
                }
                resolve("success: " + data);
            },
            error: function(jqXHR, exception) {
                reject(jqXHR.status + " --- " + exception);
            },
            contentType: "application/json;"
        });
    });

    addBookPromise
        .then(function(value) {
            console.table(value);
            alert("Book successfully created in the database!");
            window.location.href = "/persado/www/HTML/index.php";
        })
        .catch(reason => {
            console.table(reason);
            alert(
                "Something went wrong! Please contact your system administrator."
            );
        });
};
