import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({pro,key}) => {

    return (
        <Link to={`singleproduct/${pro.id}`} className="product-item-card" key={key}>
            <div className="product-item-img" >
                <img src={pro.image} alt={pro.title} />
            </div>
            <div className="product-details">
                <p className="product-cat">{pro.category}</p>
                <p className="product-name">{pro.title}</p>
                <div className="stars">
                  {
                    [...Array(5)].map((_,i) => (
                       pro.rating > i ? <AiFillStar /> : <AiOutlineStar />
                    ))
                  }
                </div>
                <div className="price">
                    <p>${pro.price}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card