import React from 'react'
import './Footer.css'
import '../App.css'
import './Navbar.css'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Join the newsletter to receive the most important <em>news from all over the world, without joy</em>, of course.
          </p>
          <p className='footer-subscription-text'>
              <small>*you can unsubscribe at any time*</small>
          </p>
          <div className='input-areas'>
              <form>
                  <input type='email' name='email' placeholder='ur email' className='footer-input' />
                  <button>subscribe</button>
              </form>
          </div>
      </section>
      <section className='footer-social'>
          <p className='footer-social-heading'>
              Follow us on our social-network:
              <Link 
                to='/' 
                className='fa fa-facebook' 
                target='_blank' 
                title='Facebook'>
              </Link>
              <Link 
                to='/' 
                className='fa fa-twitter' 
                target='_blank' 
                title='Twitter'>
              </Link>
              <Link 
                to='/' 
                className='fa fa-instagram' 
                target='_blank' 
                title='Instagram'>
              </Link>
              <Link 
                to='/' 
                className='fa fa-youtube' 
                target='_blank' 
                title='Youtube'>
              </Link>
              <Link 
                to='/' 
                className='fa fa-linkedin' 
                target='_blank' 
                title='Linkedin'>
              </Link>
          </p>
      </section>
      <section className='footer-rights'>
          <p><small>© rassegnazionestampa • all rights reserved • codice fisc • p.iva • cap. soc.</small></p>
      </section>
    </div>
  )
}

export default Footer
