<!DOCTYPE html>
<html lang="en">
<head>
  <title>Manage users</title>
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
      <a class="navbar-brand" href="#">Logo</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="/persado/www/HTML/index.php">Home</a></li>
		<li><a href="/persado/www/HTML/new-book.php">New book</a></li>
		<li><a href="/persado/www/HTML/new-user.php">New user</a></li>
		<li><a href="/persado/www/HTML/loan-book.php">Loan book</a></li>
		<li><a href="/persado/www/HTML/return-book.php">Return book</a></li>
		<li><a href="/persado/www/HTML/manage-books.php">Manage books</a></li>
		<li class="active"><a href="/persado/www/HTML/manage-users.php">Manage users</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
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
  <h2>Active Item in a List Group</h2>
  <div id="usersList" class="list-group">
    <a href="#" class="list-group-item">First item</a>
    <a href="#" class="list-group-item">Second item</a>
    <a href="#" class="list-group-item">Third item</a>
  </div>
</div><hr>
      <h3>Test</h3>
      <p>Lorem ipsum...</p>
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
  <p>Footer Text</p>
</footer>

</body>
<script src="./../JavaScript/AJAX/getAllUsersAJAX.js"></script>
</html>
