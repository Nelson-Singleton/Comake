import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route, render} from 'react-router-dom';
import './App.css';


import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import Login from './components/Login'
import Dashboard from './components/Dashboard'


function App() {





  return (
    <div>
    <Router>
          <div> 
        <Header></Header>
          
          <Switch>
            <Route path = '/home' component = {LandingPage}></Route>
            <Route path = '/login' render = {() => <Login/>}/>
            <Route path = '/dashboard' render = {() => <Dashboard/>}/>          
          </Switch>  
        
        </div>     
        </Router>
        <Footer></Footer> 
        </div>
    
  );
}
export default App