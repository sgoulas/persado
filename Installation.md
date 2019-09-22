Install wamp server: http://www.wampserver.com/en/

In your WWW/ directory create a directory "persado" and inside it a directory "www".

Inside the aforementioned "www" directory, clone this repository.

You should then see this project's folders: CSS, Database, HTML & JavaScript, plus the .md files.

Important: before running the project you should initialize your database.

For that to happen you need to left click the wampserver icon from your task bar -> MySQL -> MySQL console.

The username by default is "root" and the password is empty, so just hit enter and you should log in.

After that copy paste inside the terminal the contents of the Database/Initialization.sql file.

You should be able to load the home page of the project in your browser by typing:

http://localhost/persado/www/HTML/index.php

If there is any problem with your ports, please set up your wampserver port as 8080 (basically anything not 80) and retry at

http://localhost:8080/persado/www/HTML/index.php

(during development I set my port to 8080 because skype -still- listens to port 80.)
