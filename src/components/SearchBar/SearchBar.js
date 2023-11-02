import React, { useContext } from 'react'
import './SearchBar.css'
import { CartContext } from '../../context/CartContext'

const SearchBar = ({prop}) => {

  const { FilterDispatch } = useContext(CartContext)

  return (
    <div className={`search-bar-container ${prop ? 'active' : ''}`}>
        <input type="text" name="" placeholder='Search ..............' onChange={(e) =>{
           FilterDispatch({
             type: "SEARCH_BY_QUERY",
             query: e.target.value
           })
        }}/>
    </div>
  )
}

export default SearchBar