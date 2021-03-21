import React, { Component } from 'react';

class Navbar extends Component{
    
    render(){
        return(
            <div className="navbar-container">
                <a href="#top-page">
                    <div className="navButton"></div>
                </a>
                <a href="#second">
                     <div className="navButton"></div>
                </a>
                <a href="#third">
                    <div className="navButton"></div>
                </a>
                <a href="#fourth">
                    <div className="navButton"></div>
                </a>
            </div>
        )
    }
}

export default Navbar