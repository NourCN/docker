const bodyParser = require("body-parser");
const express = require("express");
const app = express();
require("./database");
require('./database');
const postsRoutes =require('./controller/postsController');


app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Welcome to my first API')
  });

app.use('/posts',postsRoutes);


app.listen(4242, () => console.log("server running on port :4242"));


