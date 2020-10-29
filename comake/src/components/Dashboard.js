import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {useHistory, useParams} from 'react-router-dom'

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box"


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

let cardStyle = {
  display: "block",
  width: "100%",
  transitionDuration: "0.3s",
  height: "30vw",
  
};

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const classes = useStyles;

  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, []);

  const history = useHistory()
  const routeNewPost = () => {
      history.push('/new')
  }

  return (
    <Box justifyContent="center" alignItems="center" flexDirection="row">
      
      <Box 
        display="flex" 
        width="100%" height={80}
        alignItems="center"
        justifyContent="center"
      >
      <Button variant="contained" color="secondary" onClick= {()=>routeNewPost() }>
      New Post
      </Button>
      </Box>
      
      {/* //////////////////////////////////////////////////// */}
<Box display="flex">
<Grid container spacing={3} style={{ minHeight: '100vh' }}>
      {posts.map((post) => (
          <Grid item xs = {3}>
        <Card style={cardStyle} id={post.id} className="cardStyle" border = {1} borderColor="black">
          <CardActionArea>
            <CardMedia
              component="img"
              width="33%"
              height="140"
              src={post.imageurl}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">{post.title}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">{post.description.slice(0, 100) + '...'}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">Posted by: {post.username}</Typography>
              <CardActions>
              <Typography variant="body2" color="textSecondary" component="p"><Button size="small" color="primary"> Upvote: </Button>{post.likes}</Typography>
              <Button size="small" color="primary"> Comment </Button>
              </CardActions>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
      ))}
      </Grid>
      </Box>

      {/* //////////////////////////////////////////////////// */}
    </Box>
  );
}

export default Dashboard;
