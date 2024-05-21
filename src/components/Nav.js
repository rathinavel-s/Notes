import React from 'react'
import { Link } from 'react-router-dom'


const Nav = ({search,setsearch}) => {
  return (
    <nav className="Nav">
      <form className="searchForm " onSubmit={(e)=>e.preventDefault()}> 

        <label  htmlFor="search">Search Posts</label>
        <input type='text' id="search" placeholder='Search' 
        value={search} onChange={(e)=>setsearch(e.target.value)}
         />
      </form>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Post">Notes</Link></li>
      </ul>
      
    </nav>
  )
}

export default Nav