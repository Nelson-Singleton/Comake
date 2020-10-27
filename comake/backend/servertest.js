const express = require('express')
const cors = require('cors')

const mongoose = require('mongoose')

require('dotenv').config() //grab env variables

const app = express();
const port = process.env.PORT || 5000 //env file OR default to localhost 5000 in development

//middleware
app.use(cors())
app.use(express.json)

//mongodb connection
const uri = process.env.ATLAS_URI; //db uri
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }); //starts connection to db
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
//routes
const usersRouter = require('./routes/users')
// const postRouter = require('./routes/posts')
// const commentRouter = require('./routes/comments')

app.use('/users', usersRouter)
// app.use('/posts', postRouter)
// app.use('/comments', commentRouter)


//server
app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})





