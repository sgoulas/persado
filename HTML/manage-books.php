<!DOCTYPE html>
<html lang="en">
<head>
  <title>Manage books</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="./../CSS/main.css" />
   <link rel="stylesheet" href="./../CSS/manageBooks.css" />
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
		<li class="active"><a href="/persado/www/HTML/manage-books.php">Manage books</a></li>
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
      <h1>Books Directory</h1>
  <div id="booksList" class="list-group">
      <table class="table table-striped">
    <thead>
      <tr>
        <th>Bookname</th>
        <th class="ISBN">ISBN</th>
        <th class="available-copies">Copies available</th>
        <th class="purchased-copies">Copies purchased</th>
        <th>Currently loaned to</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>moby dick</td>
        <td class="ISBN">46845134384</td>
        <td class="available-copies">5</td>
        <td class="purchased-copies">10</td>
        <td>sgoulas</td>
      </tr>
    </tbody>
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
</html>
