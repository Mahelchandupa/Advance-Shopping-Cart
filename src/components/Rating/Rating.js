import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import './Rating.css'

const Rating = ({rating, onClick}) => {
  return (
    <div>
        {
            [...Array(5)].map((_,i) => (
                <span key={i} onClick={() => onClick(i)}>
                    {
                        rating > i ? <AiFillStar  className='rating-star'/> : <AiOutlineStar  className='rating-star'/>
                    }
                </span>
            ))
        }
    </div>
  )
}

export default Rating