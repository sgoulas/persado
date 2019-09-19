$(document).ready(function() {
    /**
     * EVENT LISTENERS
     */
    $("#addBookForm").on("submit", function(e) {
        e.preventDefault();

        // get all the inputs into an array.
        let inputs = $(this).serializeArray();
        let data = objectifySerializedArray(inputs);
        console.log(data);
        addBookAJAX(data);
    });
});
