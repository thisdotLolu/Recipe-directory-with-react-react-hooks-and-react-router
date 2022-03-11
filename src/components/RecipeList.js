import './RecipeList.css';
import { Link } from 'react-router-dom';

import React from 'react'


// step 6 take off the recipelist from home.js and create a separate component for it
export default function RecipeList({recipes}) {
  if(recipes.length===0){
    return <div className='error'>No recipes to Load...</div>
  }

  return (
    <div className='recipe-list'>
        {recipes.map(recipe=>{
        return(
        <div key={recipe.id} className='card'>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make</p>
            <div>{recipe.method.substring(0,99)}....</div>
            <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
        )
      })}
    </div>
  )
}
