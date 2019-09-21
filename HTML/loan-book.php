<!DOCTYPE html>
<html lang="en">
<head>
  <title>Loan a book</title>
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
		<li class="active"><a href="/persado/www/HTML/loan-book.php">Loan book</a></li>
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
  <div class="list-group">
    <h3>Loan a book to a user by clicking their name in the "loan book" drop down menu.</h3>

    


  <table class="table table-striped">
    <thead>
      <tr>
        <th>Book name</th>
        <th>Copies available</th>
        <th>User</th>
        <th></th>
      </tr>
    </thead>
    <tbody id="available-books-list"></tbody>
  </table>











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

<script src="./../JavaScript/PageSpecific/loanBook.js"></script>

<script id="loan-book-template" type="text/x-handlebars-template">
      <tr>
        <td>{{BookName}}</td>
        <td>{{Available}}</td>

        <td>
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select user
        <span class="caret"></span></button>
        <ul class="dropdown-menu">
         <li><a href="#">user 1</a></li>
         <li><a href="#">user 2</a></li>
         <li><a href="#">user 3</a></li>
         </ul>
      </div>
        </td>

        <td><button type="button" class="btn btn-primary">loan</button></td>
      </tr>

</script>
</html>
