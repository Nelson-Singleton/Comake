const router = require('express').Router();
let Post = require('../models/post.model');

//to do
//get post, update, delete

router.route('/').get((req, res) => {
    Post.find()
      .then(posts => res.json(posts))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').get((req, res) => {
  Post.findById(req.params.id)
  .then(post => res.json(post))
  .catch(err => res.status(400).json(err))
})
  
  router.route('/add').post((req, res) => {
    const username = req.body.username;
    const title = req.body.title
    const description = req.body.description
    const imageurl = req.body.imageurl
    const date = Date.parse(req.body.date)
    
  
    const newPost = new Post({
      username,
      title,
      description,
      imageurl,
      date,
      
    });
  
    newPost.save()
      .then(() => res.json('post added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').post((req, res) => {
  })
  //     req.params.id,
  //     {$push: {"comments": { $each: req.body.comment}}},
  //     {safe: true, upsert: true},
  //       function(err, model) {
  //           console.log(err);
  //       }
      
  //   )
    
  // })
  
  module.exports = router;