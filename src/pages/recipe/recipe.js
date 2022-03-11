import React from 'react'
import {useParams} from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';


import './recipe.css'

// step7-displaying the full content from the data after clicking cook this
//using the concept of useParams and route parameters
//no mapping is done here

export default function Recipe() {
  const {id}= useParams();  
  const{data:recipes,isPending, error}=useFetch('http://localhost:3000/recipes/' + id)

  return (
    <div className='recipe'>
      <h2>{error && <p className='error'>{error}</p>}</h2>
      {isPending && <p className='loading'>Loading...</p>}
      {recipes && 
      <>
      <h2 className="page-title">
      {recipes.title}  
      </h2>
      <p>Takes {recipes.cookingTime} to cook</p>
      <ul>
        {recipes.ingredients.map(ing=> <li key={ing}>{ing}</li>)}
      </ul>
      <p className='method'>{recipes.method}</p>
      </>
      }
    </div>
  )
}
