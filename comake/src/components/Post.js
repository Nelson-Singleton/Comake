import React from 'react'
import {useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios'

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default function Post() {
    const [pickedDate, setpickedDate] = useState(new Date());
    const initialValues = {
        //issueid: "",
        username: "",
        title: "",
        description: "",
        imageurl: "",
        date: pickedDate    
        
       // user: {},
        //comments: []    
    }

    const [newPost, setNewPost] = useState(initialValues)


    


    const history = useHistory()
    const params = useParams();

    const submitPost = (e) => {
        e.preventDefault()
        axios
          
           .post(`http://localhost:5000/posts/add`, newPost)
            .then((res) => {
                console.log("New Post created", res)
                setNewPost(initialValues)
                history.push(`/dashboard`) 
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChanges = e => {
        e.preventDefault()
        setNewPost({
            ...newPost,
                [e.target.name]: e.target.value
        })
    }
    const handleDateChanges = e => {
        
        setNewPost({
            ...newPost,
                [e.target.name]: e.target.value
        })
    }
    

    const onSubmit = evt => {
        evt.preventDefault();
        
    }

    // const onInputChange = evt => {
    //     const { name, value } = evt.target;
    //     inputChange(name, value);
    // }

    return(
        <div className = "nDashboardContainers">
            
        <form>
            <input className = "nFormInputs"
            type = 'text'
            name = "username"
            onChange = {handleChanges}
            value = {newPost.username}
            placeholder= "Your name"
            />

            <input className = "nFormInputs"
            type = 'text'
            name = "title"
            onChange = {handleChanges}
            value = {newPost.title}
            placeholder= "Title of Post"
            >
            </input>
           
            <br></br>
            
            <textarea 
            type = 'text'
            name= "description" 
            rows= "3"
            
            cols = "50"
            value = {newPost.description}
            onChange = {handleChanges}
            placeholder = 'Post Description'
            >
            
            </textarea>
            
            <br></br>

            <input
            type = 'text'
            name = "imageurl"
            onChange = {handleChanges}
            value = {newPost.imageurl}
            placeholder = "Image url"                
            >
            </input>
<br></br>
            <label>Date: </label>
          <div>
          <DatePicker selected={pickedDate} onChange={date => setpickedDate(date)} />
          </div>
        

            <br></br>


            <br></br>

            <br></br>
            <br></br>
            <button onClick = {submitPost}>Submit</button>
           
        </form>
    </div>
    )
    }

   