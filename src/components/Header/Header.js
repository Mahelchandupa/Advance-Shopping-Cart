import React, { useContext, useState } from 'react'
import './Header.css'
import { RiShoppingCartFill } from 'react-icons/ri'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import SearchBar from '../SearchBar/SearchBar'

const Header = () => {

  const {state: {cart}} = useContext(CartContext)

  let cartQty = 0

  for(const ca of cart){
    cartQty += ca.qty
  }

  const [searchActive, setSearchActive] = useState(false);

  const toggleSearchBar = () => {
    setSearchActive(!searchActive);
  };

  return (
    <header>
        <Link to="/" className='header-title'><h1>SHOPPING CART</h1></Link>
        <div className='btn-container'>
        <div className='cart-icon-container'>
           <button type="" style={{border: "none"}} className='cart-btn' onClick={toggleSearchBar}><AiOutlineSearch /></button>
        </div>
        <div className='cart-icon-container'>
          <Link className='cart-btn' to='/cart'><RiShoppingCartFill /></Link>
          <div className='qty'>    
              <span>{cartQty}</span>         
          </div>
        </div>
        </div>
        <SearchBar prop={searchActive}/>
    </header>
  )
}

export default Header