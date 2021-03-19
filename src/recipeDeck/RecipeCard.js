import React, { Component } from 'react';

class RecipeCard extends Component{
    constructor(){
        super();

        this.state = {
            name: "",
            time: 0,
            flipped: false,
            description: ""
        };

    };
    
    
    render(){
        let {name} = this.props;
        let {time} = this.props;
        let {description} = this.props;
        
        return(
            <div className="information-card">
                <div className="more-container">
                    <div className="content">
                        <button className="btn">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="informations-container">
                    <div className="title">
                        {name}
                    </div>
                    <div className="sub-title">
                        {description}
                    </div>
                    <div className="time">
                        {time} minutes
                    </div>
                    <div className="more-information">
                        <div className="info-and-date-container">
                            <div className="box info">
                                <div className="icon">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipeCard