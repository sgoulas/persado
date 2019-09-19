$.ajax({
    url: "/persado/www/Database/manageUsers.php",
    type: "GET",
    success: function(data) {
        console.log(data);
    },
    error: function(xhr, statusText, err) {
        console.log("error" + xhr.status);
    }
});
