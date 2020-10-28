const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: { type: String, required: false },
    title: {type: String, required: false},
    description: { type: String, required: false },
    imageurl: { type: String, required: false },
    date: { type: Date, required: false },
  }, {
    timestamps: true,
  });

const Post = mongoose.model('Post', postSchema)

module.exports = Post;