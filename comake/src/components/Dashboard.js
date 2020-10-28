import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
function Dashboard(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:5000/posts')
        .then((res) => {
          console.log(res.data)
          setPosts(res.data)      
        })
      },[])

    return(
        <div>
            <h1> Current Posts </h1>
            {/* //////////////////////////////////////////////////// */}
            {
                posts.map(post => {
                    
                    return(
                    <div key = {post.id}>
                    <h3>{post.title}</h3>
                    </div>
                    )
                })
            }
            {/* //////////////////////////////////////////////////// */}
        </div>

    )
}

export default Dashboard