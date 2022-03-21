import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Cards.css'

function CardItem(props) {
  return (
    <>
      <div className="cards-item">
          <div className='cards-item-link'>
            <figure className='cards-item-picwrap' data-category={props.label}>
                <img src={props.src} className="article-image" alt="" />
            </figure>

            <p className="article-author">{props.author}</p>

            <h1 className="article-title">{props.title}</h1>

            <p className="article-overview">{props.overview}</p>

            <Link to={props.path} className="btn dark" title='Read the complete article'>read</Link>
          </div>
      </div>
    </>
  )
}

export default CardItem
