<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $con = mysqli_connect("localhost", "root", "", "library");
    
    if (!$con) {
        echo "error: to connect to MySQL: " . mysqli_connect_error();
        exit();
        
    }
    
    mysqli_query($con, "SET NAMES 'utf8'");
    mysqli_query($con, "SET CHARACTER SET 'utf8'");
    
    $getUsersQuery = "SELECT * from Users";
 
    $result = mysqli_query($con, $getUsersQuery);

    if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "id: " . $row["U_ID"]. " - Name: " . $row["FirstName"]. " Last name:" . $row["LastName"]. "<br>";
    }
} else {
    echo "0 results";
}

    
    mysqli_close($con);
    exit();
} else {
    echo "error: this is not a post request";
    exit();
}
?>