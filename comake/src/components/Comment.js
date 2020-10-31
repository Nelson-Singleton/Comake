import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'

export default function Comment(){

    const history = useHistory()
    const params = useParams();
    const {id} = useParams()
    const initialComment = {username: "", title:"", description:"", imageurl:""}
    
    const [comment, setComment] = useState(initialComment)

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

    
    return(
        <div>Hi

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