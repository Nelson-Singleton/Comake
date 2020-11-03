import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'
import {Button, Typography} from '@material-ui/core'

export default function Comment(){

    const history = useHistory()
    const params = useParams();
    const {id} = useParams()
    const initialComment = {username: "", title:"", description:"", imageurl:""}
    
    const [comment, setComment] = useState(initialComment)
    const [newComment, setNewComment] = useState({comment:""})

    let postId = "_" + params.id

    const getPost = (id) => {
        axios
            .get(`http://localhost:5000/posts/${params.id}`)
            //.get(`http://localhost:5000/posts/${postId}`)

            .then(res => {
                console.log(res, "Getting specific issue")
                setComment(res.data)
                console.log(res.data)
            })
            .catch(err => {console.log(err)})
    }

    useEffect(() => {
        getPost(params.id)
        console.log("This is params", params)
    
    },[params.id])

    function backButton(){
        history.push('/dashboard')
    }

    const handleChanges = e => {
        e.preventDefault()
        setNewComment({
            
            ...newComment,
                //[e.target.name]: e.target.value
                comment: e.target.value

                
                
        })
        console.log(newComment)
    }

    const submitButton = () => {
        
        
    }

    
    return(
        <div className ="commentPageContainer">
        
        <div className="commentPageDiv">
            <p>{comment.title}</p>
            <p>{comment.description}</p>
            <p>Posted by: {comment.username}</p>
             
            <br></br>
            <br></br>
            <h2>Add a Comment</h2>
            
            <form>            

            <textarea 
            type = 'text'
            name= "newComment" 
            rows= "3"
            
            cols = "50"
            value = {newComment.comment}
            onChange = {handleChanges}
            placeholder = 'Comment Description'
            ></textarea>
            </form>
            <Button variant="contained" size="small" color="primary"> Submit </Button>
            <br></br>
            <br></br>
            <Button variant="contained" size="small" color="secondary" onClick={() => backButton()}> Back to Dashboard </Button>
     
            

        </div>
        
        <div className ="commentPageDiv">
            <h1> Comments </h1>
            {comment.comments}
        </div>
        
        </div>
    )
}

/*
const getIssue = (id) => {
    //axios
        //.get(`http://localhost:5000/comment${id}`)
        axiosWithAuth()
        .get(`/issues/issue/${params.id}`)
        .then(res => {
            console.log(res, "Getting specific issue")
            setSomeIssue(res.data)
            console.log(res.data)
        })
        .catch(err => {console.log(err)})
}


useEffect(() => {
    getIssue(params.id)
    console.log("This is params", params)

},[params.id])

const submitChange = (e => {
    e.preventDefault()
    //axios
    axiosWithAuth()
        .put(`https://bw-comakeapp-java.herokuapp.com/issues/issue/${id}`, someIssue)
        .then(res => {
            console.log(res, "Put request to update issue")
            //setSomeIssue(initialIssue)
            history.push(`/dashboard/${id}`)
        })
})

*/