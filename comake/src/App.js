import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, render} from 'react-router-dom';
import './App.css';

import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import Login from './components/Login'

function App() {



  return (
    <div>
    <Router>
        <Header></Header>
          <div> 
          
          <Switch>
            <Route path = '/home' component = {LandingPage}></Route>
            <Route path = '/login' render = {() => <Login/>}/>             
          </Switch>  
        
        </div>     
        </Router>
        <Footer></Footer> 
        </div>
    
  );
}
export default App