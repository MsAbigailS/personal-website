import React, { Component } from 'react';
import './Card.css';
import Bar from './Bar';
import AvatarImage from '../images/avatarOption1.png';

class Card extends Component{
    render(){
        return(
            
            <div className = "card-background">
                
                <div className="player-name">
                    Abigail Smith
                </div>

                <div className="card-content">
                    <div className="left-card">
                        <div className="player-stats">
                            <Bar name="health bar" value='97' color="#F76C6C"/>
                            <Bar name="mana bar" value='88' color="#24305E"/>
                        </div>
                    
                        <div className="player-traits">
                            <div className="player-strengths">
                                STRENGTHS:
                                <div className="player-trait-info">
                                    <br/>
                                    * Wicked Iced Coffee
                                    <br/>
                                    * Random luck
                                </div>
                            </div>

                            <div className="player-weaknesses">
                                WEAKNESS:
                                <div className="player-trait-info">
                                <br/>
                                * Always tired (-10 mana)
                                <br/>
                                * Spelling
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="right-card">
                        <div className="player-image">
                            <img src={AvatarImage} alt="Avatar-Image-Here" className="avatar"/>
                        </div>
                </div>
                </div>
            
            </div>
            
        )
    }
}

export default Card