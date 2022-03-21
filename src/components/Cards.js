import React from 'react'
import CardItem from './CardItem'
import '../components/Cards.css'
import '../App.css'
import '../components/Navbar.css'

function Cards() {
  return (
    <div className='cards'>
      <h2 className='latest-articles'>Latest articles</h2>
      <div className='cards-container'>
              <CardItem 
                  src="https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGFuZ3VhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                  author='Milly De Montparnasse'
                  title='Emancipation involves language. A complaint about our vocabulary. '
                  overview='The way we speak, write and basically communicate, shapes the way we think, it reflects our beliefs, our society and our costumes.'
                  label='Articles'
                  path='/articles' 
              /> 
              <CardItem 
                  src="https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGFuZ3VhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                  author='Milly De Montparnasse'
                  title='Emancipation involves language. A complaint about our vocabulary. '
                  overview='The way we speak, write and basically communicate, shapes the way we think, it reflects our beliefs, our society and our costumes.'
                  label='Articles'
                  path='/articles' 
              /> 
              <CardItem 
                  src="https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGFuZ3VhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                  author='Milly De Montparnasse'
                  title='Emancipation involves language. A complaint about our vocabulary. '
                  overview='The way we speak, write and basically communicate, shapes the way we think, it reflects our beliefs, our society and our costumes.'
                  label='Articles'
                  path='/articles' 
              /> 
              <CardItem 
                  src="https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGFuZ3VhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                  author='Milly De Montparnasse'
                  title='Emancipation involves language. A complaint about our vocabulary. '
                  overview='The way we speak, write and basically communicate, shapes the way we think, it reflects our beliefs, our society and our costumes.'
                  label='Articles'
                  path='/articles' 
              /> 
      </div>
    </div>
  )
}

export default Cards;
