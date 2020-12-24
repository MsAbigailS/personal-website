import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="link">
                        Home
                    </div>
                    <div className="link">
                        General Info
                    </div>
                    <div className="link">
                        Stats
                    </div>
                    <div className="link">
                        Recipe
                    </div>
                </div>
            </div>
        )
    };
}

export default Navbar