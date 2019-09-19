const addUserAJAX = formData => {
    let addUserPromise = new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            url: "/persado/www/Database/addUser.php",
            data: JSON.stringify(formData),
            success: function(data) {
                resolve("success: " + data);
            },
            error: function(jqXHR, exception) {
                reject(jqXHR.status + " --- " + exception);
            },
            contentType: "application/json;"
        });
    });

    addUserPromise
        .then(function(value) {
            console.table(value);
            alert("User successfully created in the database!");
            window.location.href = "/persado/www/HTML/index.php";
        })
        .catch(reason => {
            console.table(reason);
            alert(
                "Something went wrong! Please contact your system administrator."
            );
        });
};
