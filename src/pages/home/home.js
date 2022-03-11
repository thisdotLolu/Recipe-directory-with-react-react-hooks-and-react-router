import './home.css'
import React from 'react'
import { useState } from 'react'
import {useFetch} from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

// step5 create a component for the home page

export default function Home() {
  // const 

  const{data,isPending,error}=useFetch('http://localhost:3000/recipes')
  return (
    <div className='home'>
      {/* usefetch hook error and loading config */}
      {error && <p className='error'>Error</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {/* actual home page data sent out to a separate component: recipeList */}
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}
