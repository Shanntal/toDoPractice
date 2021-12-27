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
app.use(express.json());   // middleware that parses through incoming data; if object coming into server file is a HTTP request and also with it is a data object with json data then this express.json() middleware will parse through it and then put it in the body property of req so req.body 

// creating routes
app.get('/todos', async (req, res) => {
    const todos = await Todo.findAll();
    res.status(200).send(todos);
})

app.put('/:id', async (req, res) => {
    // console.log(req.body);  -> is the { newStatus: complete } -> 'complete' being the updated status of the todo (either true or false) after clicked
    // console.log(req.params.id);  //.params is whatever comes after the : (i.e. line 30)
    
    try {
        await Todo.update({complete: req.body.newStatus}, {where: {id:req.params.id}})
        res.sendStatus(201);
    } catch (err) {
        res.status(304).send(err);
    }

})



// making the app connect to a port where you are able to view it
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
});