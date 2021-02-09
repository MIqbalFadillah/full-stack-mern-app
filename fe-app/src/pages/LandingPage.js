import React, { Component } from 'react';
import Header from '../parts/Header';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';



export default class LandingPage extends Component{
    render(){
        return(
            <>
                <Header {...this.props}></Header>
            </>
        )
    }
}