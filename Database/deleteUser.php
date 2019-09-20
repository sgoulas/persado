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
    
    $deleteUserStatement = "DELETE FROM Users WHERE U_ID ='" . $userID . "'";
    
    if (!mysqli_query($con, $deleteUserStatement)) {
        die('error: ' . mysqli_error($con));
        echo "error running query";
    } else {
        echo "success deleting user";
    }
    
    mysqli_close($con);
    exit();
} else {
    echo "error: this is not a post request";
    exit();
}
?>