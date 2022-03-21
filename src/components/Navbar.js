import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }  
  };

  useEffect(() => {
    return () => {
      showButton()
    };
  }, [])

  window.addEventListener('risize', showButton);


  return (
    <>
      <nav className="navbar">
        <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            <h1>
              <span className='rassegnazione'>rassegnazione</span><span className='stampa'>stampa</span><br /><span className='subtitle'>news from all over the world, without joy</span>
            </h1>
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'uil uil-times-circle' : 'uil uil-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="link-item" id='manifesto'>
            <Link to="/manifesto" className="link" onClick={closeMobileMenu}>
              manifesto
            </Link>
          </li>
          <li className="link-item">
            <Link to="/articles" className="link" onClick={closeMobileMenu}>
              articles
            </Link>
          </li>
          <li className="link-item">
            <Link to="/books" className="link" onClick={closeMobileMenu}>
              books
            </Link>
          </li>
          <li className="link-item">
            <Link to="/about" className="link" id='about' onClick={closeMobileMenu}>
              about us
            </Link>
          </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar;
