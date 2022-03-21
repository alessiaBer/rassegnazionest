import React from 'react'
import './Header.css'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <header className="header">
      <Link to="/manifesto" className='manifesto-heading' title='Go to manifesto'><div className="content">
        <h1 className="heading">
          <span className="small">manifesto of</span>
          rassegnazione
          <span className="no-fill">stampa</span>
        </h1>
        <p className='manifesto-author'>Milly De Montparnasse, Boccadoro</p>
      </div></Link>
    </header>
    
    <p><small>Liberty Leading the People, Eugène Delacroix</small></p>
    </>
  )
}

export default Header
