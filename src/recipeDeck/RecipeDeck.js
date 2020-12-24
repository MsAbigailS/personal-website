import React, { Component } from 'react';
import './RecipeDeck.css';
import RecipeCard from './RecipeCard';

class RecipeDeck extends Component{
    render(){
        return(
            <div className="deck">
                <RecipeCard 
                    name="Iced Coffee" 
                    time='10'
                />
                <RecipeCard
                    name="The Greatest Breakfast Burritos"
                    time='45'
                />
            </div>
        )
    }
}

export default RecipeDeck