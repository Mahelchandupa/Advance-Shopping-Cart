import React, { useContext } from 'react'
import './SideBar.css'
import { CartContext } from '../../context/CartContext'
import Rating from '../Rating/Rating'

const SideBar = ({prop}) => {

    const { FilterState: { InStock, filterByPrice, Byrating }, FilterDispatch } = useContext(CartContext)

    return (
        <div className={`sidebar-main-container ${prop ? 'active': ''}`}>
                <h1 className='sidebar-title'>Filters</h1>
                    <div className='category-filter'>
                        <h4 className='filter-title'>Filter By Category</h4>
                        <div className='category-container'>
                           <button type="" onClick={() => {
                                FilterDispatch({
                                    type: "SELECT_CATEGORY",
                                    category: ""
                                });
                            }}>All</button>
                            <button type="" onClick={() => {
                                FilterDispatch({
                                    type: "SELECT_CATEGORY",
                                    category: "men's clothing"
                                });
                            }}>Men's Clothing</button>
                            <button type="" onClick={() => {
                                FilterDispatch({
                                    type: "SELECT_CATEGORY",
                                    category: "jewelery"
                                })
                            }}>Jewelery</button>
                            <button type="" onClick={() => {
                                FilterDispatch({
                                    type: "SELECT_CATEGORY",
                                    category: "electronics"
                                })
                            }}>Electronics</button>
                            <button type="" onClick={() => {
                                FilterDispatch({
                                    type: "SELECT_CATEGORY",
                                    category: "women's clothing"
                                })
                            }}>Women's Clothing</button>
                        </div>
                    </div>
                    <div className='In-stock'>
                        <h4 className='filter-title'>Filter By Stock</h4>
                        <div>
                           <input type="checkbox" name="stock" value="" checked={InStock} onChange={() => {
                                FilterDispatch({
                                    type: "IN_STOCK",
                                })
                            }}/>
                            <label for="stock">Include Out Of Stock</label>
                        </div>
                    </div>
                    <div className='sort-by-prie'>
                        <h4 className='filter-title'>Sort By Price</h4>
                        <div className='sort-by-price-container'>
                        <div>
                           <input type="radio" name="" value="" checked={filterByPrice === "LowToHigh" ? true : false} onChange={() => {
                                FilterDispatch({
                                    type: "SORT_BY_PRICE",
                                    payload: "LowToHigh"
                                })
                            }}/>
                            <label for="">Ascending</label>
                        </div>
                        <div>
                           <input type="radio" name="" value="" checked={filterByPrice === "HighToLow" ? true : false} onChange={() => {
                                FilterDispatch({
                                    type: "SORT_BY_PRICE",
                                    payload: "HighToLow"
                                })
                            }}/>
                            <label for="">Descending</label>
                        </div>
                        </div>
                    </div>
                    <div className='filter-by-star-rating'>
                        <h4 className='filter-title'>Filter By Rating</h4>
                        <Rating rating={Byrating} onClick={(i) => FilterDispatch({
                            type: "FILTER_BY_RATING",
                            rate: i + 1
                        })}/>
                    </div>
                    <button className='clear-all-filter' onClick={() => {
                        FilterDispatch({
                            type: "CLEAR_FILTERS"
                        })
                    }}>Clear Filters</button>
        </div>
    )
}

export default SideBar