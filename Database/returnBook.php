<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    /*Get JSON as a string*/
    $json_str = file_get_contents('php://input');
    /*Get as an object*/
    $json_obj = json_decode($json_str, false); //second parameter returns array instead of objects
    
    $userID   = $json_obj->userID;
    $bookID    = $json_obj->bookID;
    
    $con = mysqli_connect("localhost", "root", "", "library");
    
    if (!$con) {
        echo "error: to connect to MySQL: " . mysqli_connect_error();
        exit();
        
    }
    
    mysqli_query($con, "SET NAMES 'utf8'");
    mysqli_query($con, "SET CHARACTER SET 'utf8'");
    
    
$updateUserQuery = "UPDATE Users SET BooksLoaned = BooksLoaned - 1 WHERE U_ID = '" . $userID . "' ";
$updateBookQuery = "UPDATE Books SET Available = Available + 1 WHERE Book_ID = '" . $bookID . "' ";
$updateRegistryQuery = "UPDATE Registry SET DateReturned = NOW() WHERE Book_ID ='" . $bookID . "' AND U_ID ='" . $userID . "'";


    if (!mysqli_query($con, $updateUserQuery)) {
        die('error: ' . mysqli_error($con));
        echo "error updating user\n";
    } else {
        echo "success updating user\n";
    }

        if (!mysqli_query($con, $updateBookQuery)) {
        die('error: ' . mysqli_error($con));
        echo "error updating book\n";
    } else {
        echo "success updating book\n";
    }
        if (!mysqli_query($con, $updateRegistryQuery)) {
        die('error: ' . mysqli_error($con));
        echo "error updating registry\n";
    } else {
        echo "success updating registry\n";
    }
    
    mysqli_close($con);
    exit();
} else {
    echo "error: this is not a post request";
    exit();
}
?>