# bataillenavale
Battleship 

AJAX Battleship

A battleship game using AJAX, PHP and MySQL.

Instructions

- Here is the list of steps to realize the game:-

Version Control (VCS)

Create a new repository on Github.

Display The Boats

We want to display the boats on a grid and keep the database up to date. Here is a list of step to accomplish this:

create a new file game.php with a grid
add a script to allow the player to click on table cell
store information about the boats in an object
send the boats to create-boat.php on the server
update create-boat.php to store the boats in a database
make sure everything is working before going to the next step
Display The Shots:

We want to display the shots on a grid and to keep the database up to date. Here is a list of step to accomplish this:

add a new grid to game.php
improve the script to allow player to click on the table cell
store information about the shots in an object
send the shots to create-shot.php on the server
update create-shot.php to store the shots in a database
make sure everything is working before going to the next step
Handle User Connection

We want to keep track of the number of user connected to our site. Here is a list of step to accomplish this:

create a new file index.php that add a new player in the database
display the number of player on index.php
create a new file del-player.php wich remove a player from the database
add a Javascript function to index.php which call del-player.php when the user close the page
redirect the first two player to game.php and display an error message to the other
make sure everything is working before going to the next step
