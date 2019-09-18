<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    //Get JSON as a string
    $json_str = file_get_contents('php://input');
    //Get as an object
    $json_obj = json_decode($json_str, false); //second parameter returns array instead of objects
    
    $FirstName   = $json_obj->firstName;
    $LastName    = $json_obj->lastName;
    $Address     = $json_obj->address;
    
    $con = mysqli_connect("localhost", "root", "", "library");
    
    if (!$con) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        exit();
        
    }
    
    mysqli_query($con, "SET NAMES 'utf8'");
    mysqli_query($con, "SET CHARACTER SET 'utf8'");
    
    //by default a new user has no books loaned so BooksLoaned is 0
    $addUserStatement = "INSERT INTO Users(FirstName, LastName, Address, BooksLoaned) VALUES ('" . $FirstName . "', '" . $LastName . "', '" . $Address . "', '0')";
    
    if (!mysqli_query($con, $addUserStatement)) {
        die('Error: ' . mysqli_error($con));
        echo "error running query";
    } else {
        echo "success writing to db";
    }
    
    mysqli_close($con);
    exit();
} else {
    echo "this is not a post request";
    exit();
}
?>