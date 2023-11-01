import './Home.css'
import { useContext, useState } from 'react';
import Card from '../../components/Card/Card';
import { CartContext } from '../../context/CartContext';
import SideBar from '../../components/SideBar/SideBar';
import { AiOutlineMenuFold } from 'react-icons/ai'

const Home = () => {
  
  const {state: {store}, FilterState: { filterByCategory, InStock, filterByPrice, SearchByQuery, Byrating }} = useContext(CartContext)

  const filters = () =>{
    let sortedProduct = store

    if(filterByCategory){
     sortedProduct = sortedProduct.filter((product) => product.category === filterByCategory)
    }
    if(InStock){
      sortedProduct = sortedProduct.filter((product) => product.stock === InStock)
    }
    if(filterByPrice){
      sortedProduct = sortedProduct.sort((a, b) =>
          filterByPrice === "LowToHigh" ? a.price - b.price : b.price - a.price
        )
    }
    if(SearchByQuery){
      sortedProduct = sortedProduct.filter((product) => product.title.toLowerCase().includes(SearchByQuery))
    }
    if(Byrating){
      sortedProduct = sortedProduct.filter((product) => product.rating > Byrating)
    }

    return sortedProduct
  }

  const [activeFilter, setActiveFilter] = useState(false)

  const handleClick = () =>{
    setActiveFilter(!activeFilter)
  }

  return (
    <div className='home'>
      <div className='home-container'>
        <SideBar prop={activeFilter}/>
        <div className='product_main-container'>
          <div className='home-container-title-filter'>
            <h1 className='product-cat-title'>{ filterByCategory === "" ? 'ALL PRODUCTS' : filterByCategory }</h1>
            <button className='filters-btn-container' onClick={handleClick}>Filters <AiOutlineMenuFold /></button>
          </div>
          <div className="product-container">
            {
              filters().map(pro => (
                <Card pro={pro} key={pro.id} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home