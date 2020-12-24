import React, { Component } from 'react';
import './Bar.css';

class Bar extends Component{
    constructor(){
        super();

        this.state = {
            name: "",
            value: 0,
            padding: "",
            color: ""
        }
    };

    

    render(){
        let {name} = this.props;
        let {value} = this.props;
        let {color} = this.props;
        let padding = 100 - parseInt(`${value}`, 10);

        return(
            <div>
                <div className="bar-info">
                    <div className="bar-title">
                        {name}:
                    </div>
                    <div>
                        {value}/100
                    </div>
                </div>

                <div className = "bar" style={{ paddingRight: `${padding}%`}}>
                    <div className = "bar-inside" style={{background: `${color}`}}>
                        <div style={{opacity: '0'}}>
                            BAR
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bar