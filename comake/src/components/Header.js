import React from 'react'
import {Link} from 'react-router-dom'

function Header (){
    
    return(
       <div className = "headerDiv">
            <nav className = "headerNav">
                    <Link to = "/home"> Home </Link>  
                    <Link to = "/login"> Login </Link>    
                    <Link to = "/register"> Sign Up </Link>                
            </nav>             
        </div>
    )
}

export default Header