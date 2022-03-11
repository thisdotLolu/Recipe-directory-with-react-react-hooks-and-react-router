import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
import './Navbar.css'



// step 4---Navbar creation
//using links inside nav
// create recipe linkd to path= '/create' route
//take navbar to App.js to show it on the app.js render page
export default function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <Link to='/' className='brand'>
                <h1>Cooking Ninja</h1>
            </Link>
            <Searchbar></Searchbar>
            <Link to='/create'>
                Create Recipe
            </Link>
        </nav>
    </div>
  )
}
