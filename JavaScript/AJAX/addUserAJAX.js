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
        })
        .catch(reason => {
            console.table(reason);
        });
};
