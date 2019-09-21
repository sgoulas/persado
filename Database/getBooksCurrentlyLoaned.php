<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $con = mysqli_connect("localhost", "root", "", "library");
    
    if (!$con) {
        echo "error: to connect to MySQL: " . mysqli_connect_error();
        exit();
        
    }
    
    mysqli_query($con, "SET NAMES 'utf8'");
    mysqli_query($con, "SET CHARACTER SET 'utf8'");
    
    $getBooksQuery = "SELECT Books.Book_ID, Registry.U_ID, Users.FirstName, Users.LastName FROM Books
    INNER JOIN Registry
    ON Books.Book_ID = Registry.Book_ID
    INNER JOIN Users
    ON Registry.U_ID = Users.U_ID
    WHERE Registry.DateLoaned IS NOT NULL
    AND Registry.DateReturned IS NULL
    AND Books.Purchased <> Books.Available;";
 
    $result = mysqli_query($con, $getBooksQuery);
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

