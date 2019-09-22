<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $con = mysqli_connect("localhost", "root", "", "library");
    
    if (!$con) {
        echo "error: to connect to MySQL: " . mysqli_connect_error();
        exit();
        
    }
    
    mysqli_query($con, "SET NAMES 'utf8'");
    mysqli_query($con, "SET CHARACTER SET 'utf8'");
    
    //user id and book id of each user that has a book loaned. Mulitple books loaned on the same user => multiple user id with different book ids
    $getEligibleUsersQuery = "SELECT Registry.Book_ID, Registry.U_ID FROM Registry
    INNER JOIN Users ON
    Registry.U_ID = Users.U_ID
    WHERE Registry.DateReturned IS NULL
    AND Users.BooksLoaned != 3";
 
    $result = mysqli_query($con, $getEligibleUsersQuery);
    $rows = array();

    if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
         $rows[] = $row;
    }
    print json_encode($rows);
} else {
    echo "0 results";
}

    
    mysqli_close($con);
    exit();
} else {
    echo "error: this is not a GET request";
    exit();
}
?>

