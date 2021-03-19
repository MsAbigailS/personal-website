import React, { Component } from 'react';
import './Button.css';

class Button extends Component{
    constructor(){
        super();

        this.state = {
            name: ""
        }
    };
    
    render(){
        let {name} = this.props;
        return(
            <div>
                <button>
                    {name}
                </button>
            </div>
        )
    }
}

export default Button