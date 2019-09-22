<!DOCTYPE html>
<html lang="en">
<head>
  <title>Return a book</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="./../CSS/main.css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  <script src="./../JavaScript/Utils/handlebars-v4.2.0.js"></script>
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
		<li class="active"><a href="/persado/www/HTML/return-book.php">Return book</a></li>
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
    <div id="loaned-books"></div>
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


<!-- handlebars user template -->
<script id="loaned-books-template" type="text/x-handlebars-template">
      <tr class="book-row" data-book-id={{BookID}}>
        <td>{{BookName}}</td>

        <td>
      <select class="form-control users-select-menu" style="width: 60%">
        <option value="" selected disabled>Select user</option>

      </select>
        </td>

        <td><button type="button" class="btn btn-primary loan-button" data-loan-to-id="-1">return</button></td>
      </tr>
</script>

<!-- handlebars loaned books by specific user template -->
<script id="user-options" type="text/x-handlebars-template">
<option class="user-option" data-user-id={{UserID}}>{{FirstName}} {{LastName}}</option>
</script>

</html>
