import React, { Component } from 'react';
import Header from '../parts/Header';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import landingPage from '../json/landingPage.json'; 
import Hero from '../parts/Hero';


export default class LandingPage extends Component{
    render(){
        return(
            <>
                <Header {...this.props}></Header>
                <Hero data={landingPage.hero}/>
                
            </>
        );
    }
}