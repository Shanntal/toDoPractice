const express = require('express');
const path = require('path');
// Initialize app but invoking express
const app = express();  
const { Todo } = require('./db');


const PORT = process.env.PORT || 3000;



// creating paths so that this file connects to the dist folder and the public folder
const DIST_PATH = path.join(__dirname, '../dist');
const PUBLIC_PATH = path.join(__dirname, '../public');



// servers up our dist and public folders using the paths you created above
//exposing these files through this middleware (app.use)
app.use(express.static(DIST_PATH));   // getting main.js file from here
app.use(express.static(PUBLIC_PATH));  // getting the html and css files from here


// creating routes
app.get('/todos', async (req, res) => {
    const todos = await Todo.findAll();
    res.status(200).send(todos);
})




// making the app connect to a port where you are able to view it
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
});