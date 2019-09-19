$.ajax({
    url: "/persado/www/Database/manageUsers.php",
    type: "POST",
    success: function(data) {
        alert(data);
    },
    error: function(xhr, statusText, err) {
        console.log("error" + xhr.status);
    }
});
