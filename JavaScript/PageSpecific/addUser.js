$(document).ready(function() {
    /**
     * EVENT LISTENERS
     */
    $("#addUserForm").on("submit", function(e) {
        e.preventDefault();

        // get all the inputs into an array.
        let inputs = $(this).serializeArray();
        let data = objectifySerializedArray(inputs);
        let user = new User(data);
        addUserAJAX(data);
    });
});
