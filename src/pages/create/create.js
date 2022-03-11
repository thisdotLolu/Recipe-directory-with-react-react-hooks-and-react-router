import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import {useHistory} from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';
import './create.css';

//working on the create recipe button
//adding new recipes
export default function Create() {
  const[title, setTitle]=useState('')
  const[method, setMethod]=useState('')
  const[cookingTime, setCookingTime]=useState('')
  const[newingredient, setNewingredient]=useState('')
  const[ingredients, setIngredients]=useState([])
  const ingredientInput=useRef(null)
  const history=useHistory()
  
  
  const{postData, data, error}=useFetch('http://localhost:3000/recipes', 'POST')
  //function to handle submit of form
  const handleSubmit=(e)=>{
    e.preventDefault()
    postData({title,ingredients,method,cookingTime:cookingTime+' minutes'})

    // console.log(title,method,cookingTime)
  }
  //function to handle addition of ingredients to the array, setIngredients
  const handleAdd =(e)=>{
    e.preventDefault()
    const ing=newingredient.trim()

    //if ingredient has already been added to array
    if(ing && !ingredients.includes(ing)){
      setIngredients((prevIngredients=>[...prevIngredients,newingredient]))
    }
    setNewingredient('')
    ingredientInput.current.focus()
  }
  //redirect user when they cclick submit
  useEffect(()=>{
    if(data){
      history.push('/')
    }
  },[data])

  return (
    <div className='create'>
    <h2 className="page-title">Add a New Recipe</h2>
    <form onSubmit={handleSubmit}>
      <label>
        <span>Recipe title:</span>
        <input type='text'
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
        />
      </label>
      {/* step 8- adding ingredients to an empty array */}
      <label>
        <span>Recipe Ingredients:</span>
        <div className="ingredients">
          <input type="text"
                 onChange={(e)=>{setNewingredient(e.target.value)}}
                 value={newingredient}
                 ref={ingredientInput}
          /> 

          <button onClick={handleAdd} className="btn">add</button> 
        </div>
      </label>
      {/* displaying ingredients below textarea */}
      <p>Current Ingredients:{ingredients.map(i=><em key={i}>{i}, </em>)}</p>
      <label>
        <span>Recipe Method:</span>
        <textarea cols="30" rows="10"
        onChange={(e)=>setMethod(e.target.value)}
        value={method}
        required
        />
      </label>
      <label>
        <span>Cooking time (minutes):</span>
        <input type="number" onChange={(e)=>{setCookingTime(e.target.value)}}
        value={cookingTime}
        required
        />
      </label>
      <button className='btn'type="submit">Submit</button>
    </form>

    </div>
  )
}
