<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $con = mysqli_connect("localhost", "root", "", "library");
    
    if (!$con) {
        echo "error: to connect to MySQL: " . mysqli_connect_error();
        exit();
        
    }
    
    mysqli_query($con, "SET NAMES 'utf8'");
    mysqli_query($con, "SET CHARACTER SET 'utf8'");
    
    $getAvailableBooksQuery = "SELECT Book_ID, Name, Available from Books WHERE Available != 0";
 
    $result = mysqli_query($con, $getAvailableBooksQuery);
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

