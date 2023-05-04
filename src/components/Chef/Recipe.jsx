import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const singleData = useLoaderData()
    const {name, years_of_experience, picture, recipes, likes, num_recipes} = singleData
    return (
        
        <div>
            
        </div>
    );
};

export default Recipe;