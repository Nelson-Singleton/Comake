import React from 'react'
import {Link} from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import { Typography } from '@material-ui/core'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';


function Footer (){
    
    return(
        <BottomNavigation>
        
        <a href = "https://github.com/Nelson-Singleton/Comake"><BottomNavigationAction label="Github" icon={<GitHubIcon />}  /></a>    
    
       
        
        </BottomNavigation>
          
    )
}

export default Footer