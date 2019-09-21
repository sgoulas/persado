<!DOCTYPE html>
<html lang="en">
<head>
  <title>Manage users</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="./../CSS/main.css" />
  <link rel="stylesheet" href="./../CSS/manageUsers.css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  <script src="../JavaScript/Utils/handlebars-v4.2.0.js"></script>
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
  <h2>User Directory</h2>
  <div id="usersList" class="list-group">
  </div>
</div><hr>

  <div id="user-loaned-books-list" style="display:none;">
      <h3>Books loaned to this user:</h3>
    <a href="#" class="list-group-item"><span style="margin-left: 10px;"><strong>Book name </strong></span><span class="pull-right"><strong>Date loaned</strong></span></a>
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
  <p>Footer Text</p>
</footer>

</body>
<script src="./../JavaScript/Classes/User.js"></script>
<script src="./../JavaScript/PageSpecific/manageUsers.js"></script>
<script src="./../JavaScript/Utils/utils.js"></script>


<!-- handlebars user template -->
<script id="entry-template" type="text/x-handlebars-template">
<a href="#" class="list-group-item glyphicon glyphicon-user"
data-id={{id}}
data-books-loaned={{loaned}}
data-name={{firstName}}
>
<span style="margin-left: 10px;">{{firstName}} {{lastName}} </span>
<span class="pull-right"> 
<span class ="glyphicon glyphicon-remove">
</span>
</span>
</a>
</script>

<!-- handlebars loaned books by specific user template -->
<script id="loaned-books-template" type="text/x-handlebars-template">
<a href="#" class="list-group-item">
<span style="margin-left: 10px;">{{bookName}}</span>
<span class="pull-right">{{dateLoaned}}</span>
</a>
</script>


</html>
