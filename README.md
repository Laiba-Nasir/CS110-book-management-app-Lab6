# Lab5: The book management App 

- this is a bare bones, full stack applications in which we manage the collection of books with certain features. The user can add, edit, and read books through a very skeleton interface.


## TechStack: 
- for the frontend we used react
- ⁠ for the backend we use node.js, express.js
- ⁠ for the database we use the Mongo DB Atlas


## How to run this

### Backend instructions:
- go to the back and folder using “cd backend” 
- ⁠ install the dependencies using “npm install”
- ⁠ we create the ANV file with our Mongo, URI connection, string, and our port number, I use port 5001
- ⁠ and we start the server using “npm run dev”
- ⁠ the back end will run on http://localhost:5001


### Fontend instructions: 
- go to the front and folder using “cd frontend”
- ⁠ we installed dependencies using “npm install” 
- ⁠ we begin the application using “npm start” 
- ⁠ and frontend and will run on http://localhost:3000


## Additional features

1. Adding the date field.(the user can add the published date for the book, I did this using an HTML date input, and this allows the user to record when the book is published the state is stored as a string in Mongo, DB and displayed in the book list along with the other operations.)

2. ⁠ adding the Page count field (the user can input the page number using a number input, this allows the users to attract the length of each book, and this will be stored as a number type in the Mongo DB and is also displayed in the book list with all the other operations)
