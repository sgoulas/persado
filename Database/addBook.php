<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    /*Get JSON as a string*/
    $json_str = file_get_contents('php://input');
    /*Get as an object*/
    $json_obj = json_decode($json_str, false); //second parameter returns array instead of objects
    
    $name   = $json_obj->name;
    $summary    = $json_obj->summary;
    $ISBN     = $json_obj->ISBN;
    $purchased     = $json_obj->purchased;
    
    $con = mysqli_connect("localhost", "root", "", "library");
    
    if (!$con) {
        echo "error: failed to connect to MySQL: " . mysqli_connect_error();
        exit();
        
    }
    
    mysqli_query($con, "SET NAMES 'utf8'");
    mysqli_query($con, "SET CHARACTER SET 'utf8'");
    
    /*by default a new book is not loaned to anyone so available = purchased*/
    $addBookStatement = "INSERT INTO Books(Name, Summary, ISBN, Purchased, Available) VALUES ('" . $name . "', '" . $summary . "', '" . $ISBN . "', '" . $purchased . "', '" . $purchased . "')";
    
    if (!mysqli_query($con, $addBookStatement)) {
        die('error: ' . mysqli_error($con));
        echo "error running query";
    } else {
        echo "success writing to db";
    }
    
    mysqli_close($con);
    exit();
} else {
    echo "error: this is not a post request";
    exit();
}
?>