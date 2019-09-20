let users;

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
    })
    .catch(reason => {
        console.table(reason);
        alert(
            "Something went wrong! Please contact your system administrator."
        );
    });
