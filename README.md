# Overview

This is a simple project called "NBA Players". In this project, the users have the ability to add their favorite NBA players into the Google's firebase cloud firestore, and the data will be updated in real-time so that the users can see them down in the player list on the web application. All the data in this project are connected to the cloud firestore in both ways, and all the delete, update, and insert actions will be updated in real-time without clicking the refresh button.  

I love watching NBA games, so I thought that it would be a good idea if I can create a web application that allows the users to add, remove and store their favorite players' information on the Google's cloud firestore. 

[Software Demo Video](https://youtu.be/yijynkr9l0E)

# Cloud Database

I used Google's firebase cloud firestore for this project. 

In the cloud firestore, I have one collection called "nba", and inside it, I have 2 documents that have auto generated ID which both contain player's information. If the users add their favorite players through the web application, then one new document will be added to the "nba" collection automatically, and inside the doucment, it will have the player's information which contains the fields and values. The users can delete the documents inside the collection as well. 

# Development Environment

* Visual Studio Code
* Google Firebase Cloud Firestore
* GitHub
* JavaScript
* HTML
* CSS

# Useful Websites

* [Cloud Firestore Documentation | Firebase](https://firebase.google.com/docs/firestore)
* [Cloud Firestore Structure Introduction](https://www.youtube.com/watch?v=v_hR4K4auoQ&t=25s)
* [Cloud Firestore Tutorials](https://www.youtube.com/watch?v=4d-gIPGzmK4&list=PL4cUxeGkcC9itfjle0ji1xOZ2cjRGY_WB)
* [NBA Players Information](https://www.nba.com/players)

# Future Work

* Have the "Edit" functionality to allow users to change the information of the player
* Have input validation set up to make sure the users enter the required information for the player with the correct data types
* Use Bootstrap to make the web application more modern in terms of the appearance