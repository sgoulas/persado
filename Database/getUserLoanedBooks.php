<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    /*Get JSON as a string*/
    $json_str = file_get_contents('php://input');
    /*Get as an object*/
    $json_obj = json_decode($json_str, false); //second parameter returns array instead of objects
     
    $userID   = $json_obj->ID;

    $con = mysqli_connect("localhost", "root", "", "library");
    
    if (!$con) {
        echo "error: to connect to MySQL: " . mysqli_connect_error();
        exit();
        
    }
    
    mysqli_query($con, "SET NAMES 'utf8'");
    mysqli_query($con, "SET CHARACTER SET 'utf8'");
    
    $getuserLoanedBooksQuery = "SELECT Books.Name FROM Registry INNER JOIN BOOKS 
    ON Registry.Book_ID = Books.Book_ID 
    WHERE U_ID='" . $userID . "' 
    AND DateReturned IS NULL";

    $result = mysqli_query($con, $getuserLoanedBooksQuery);
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