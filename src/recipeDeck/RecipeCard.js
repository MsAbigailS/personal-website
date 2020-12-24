import React, { Component } from 'react';
import './RecipeCard.css';

class RecipeCard extends Component{
    constructor(){
        super();

        this.state = {
            name: "",
            time: 0,
            flipped: false
        };

    };
    
    
    render(){
        let {name} = this.props;
        let {time} = this.props;
        
        return(
            <div className="card-content">
                <div className="recipe-image">
                    IMAGE
                </div>

                <div className="name">
                    {name}
                </div>

                <div className="time">
                    {time}
                </div>

                <div className="ingredients">
                    INGREDIENTS
                </div>

                <div className="steps">
                    STEPS
                </div>
            </div>
        )
    }
}

export default RecipeCard