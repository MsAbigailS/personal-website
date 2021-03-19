import React, { Component } from 'react';
import RecipeCard from './RecipeCard';

class RecipeDeck extends Component{
    render(){
        return(
            <div className="deck">
                <RecipeCard 
                    name="Iced Coffee" 
                    time='10'
                    description="A simple, chilled boost!"
                />
                <RecipeCard
                    name="The Greatest Breakfast Burritos"
                    time='45'
                    description="The best breakfast burrito you'll ever have."
                />
            </div>
        )
    }
}

export default RecipeDeck