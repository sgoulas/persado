<!DOCTYPE html>
<html lang="en">
<head>
  <title>Add user</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="./../CSS/main.css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
</head>
<body>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="/persado/www/HTML/index.php">Home</a></li>
		<li><a href="/persado/www/HTML/new-book.php">New book</a></li>
		<li class="active"><a href="/persado/www/HTML/new-user.php">New user</a></li>
		<li><a href="/persado/www/HTML/loan-book.php">Loan book</a></li>
		<li><a href="/persado/www/HTML/return-book.php">Return book</a></li>
		<li><a href="/persado/www/HTML/manage-books.php">Manage books</a></li>
		<li><a href="/persado/www/HTML/manage-users.php">Manage users</a></li>
      </ul>
    </div>
  </div>
</nav>
  
<div class="container-fluid text-center">    
  <div class="row content">
    <div class="col-sm-2 sidenav">
      <p><a href="#">Link</a></p>
      <p><a href="#">Link</a></p>
      <p><a href="#">Link</a></p>
    </div>
    <div class="col-sm-8 text-left"> 
<div class="container">
  <h2>Add a new user</h2>
  <form id="addUserForm" action="#">
    <div class="form-group">
      <label for="firstName">firstName:</label>
      <input type="firstName" class="form-control" id="firstName" placeholder="first name" name="firstName" required>
    </div>
    <div class="form-group">
      <label for="lastName">lastName:</label>
      <input type="lastName" class="form-control" id="lastName" placeholder="last name" name="lastName" required>
    </div>
    <div class="form-group">
      <label for="address">address:</label>
      <input type="address" class="form-control" id="address" placeholder="address" name="address" required>
    </div>    


    <button type="submit" class="btn btn-default">Submit</button>
    <a href="/persado/www/HTML/index.php" class="btn btn-danger" role="button">cancel</a>
  </form>
</div>
    </div>
    <div class="col-sm-2 sidenav">
      <div class="well">
        <p>ADS</p>
      </div>
      <div class="well">
        <p>ADS</p>
      </div>
    </div>
  </div>
</div>

<footer class="container-fluid text-center">
  <p>sgoulas technical assignment for Persado interview process</p>
</footer>

</body>

<script src="./../JavaScript/AJAX/addUserAJAX.js"></script>
<script src="./../JavaScript/PageSpecific/addUser.js"></script>
<script src="./../JavaScript/Utils/utils.js"></script>
</html>
