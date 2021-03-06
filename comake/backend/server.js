const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

require('dotenv').config(); //env variables from envfile

const app = express(); //server
const port = process.env.PORT || 5000;

app.use(cors()); //middleware
app.use(express.json()); //parses json

const uri = process.env.ATLAS_URI; //db uri
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }); //starts connection to db
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
/////////////

const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts')

app.use('/users', usersRouter);
app.use('/posts', postsRouter);
/////////////
app.listen(port, () => { //starts server
    console.log(`Server is running on port: ${port}`);
});
