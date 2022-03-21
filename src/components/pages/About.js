import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import './About.css';

function About() {
    return (
        <>
          <Navbar />
          <header className="header-about">
            <Link to="/about"><div class="content">
              <h1 className="heading-about">
                about
              <span className="no-fill">us</span>
              <br />/ contacts
              </h1>
            </div></Link>
          </header>
         
          <p><small>From the left: Portrait of the Journalist Sylvia von Harden, Otto Dix; Sylvia von Harden, photographed by August Sander. On the right: a scene from "Cabaret", directed by Bob Fosse </small></p>

          <div className="about">
            <div className="author-section">
            <h1 className="about-us">about us</h1>
            
            <div className="author-card">
              <h3 className="blog-title">Milly De Montparnasse</h3>
              <p className="blog-overview">bachelor’s degree in Philosophy, studying master’s degree in European and Global Studies.<br />
              In this blog: writer, editor.</p>
              <Link to="/" className="btn dark">read articles</Link>
            </div>

            <div className="author-card">
              <h3 className="blog-title">Giulia Canal</h3>
              <p className="blog-overview">make-up artist, studying Product and Graphic Design.<br />
              In this blog: grafic editor, web editor.</p>
              <Link to="/" className="btn dark">read</Link>
            </div>

            <div className="author-card">
              <h3 className="blog-title">Elena Brunialti</h3>
              <p className="blog-overview">studying bachelor’s degree in Cultural Mediation.<br />
              In this blog: translator, grammar checker.</p>
              <Link to="/" className="btn dark">read</Link>
            </div>

            <div className="author-card">
              <h3 className="blog-title">Anonymous</h3>
              <p className="blog-overview">bachelor’s degree in Philosophy, studying acting.<br />
              In this blog: writer.</p>
              <Link to="/" className="btn dark">read articles</Link>
            </div>

            </div>

            <div className="contacts-section">
              <div className="contacts-card">
                <h1 className="contact-us">contact us</h1>
                <h3>rassegnazionestampa@gmail.com</h3>
                <p className="blog-overview">to join us with:</p>
                <ul>
                  <li>- proposals: be creative</li>
                  <li>- articles on waterver is important for you</li>
                  <li>- suggestions: everything can be usefull</li>
                  <li>- critiques: we need them!</li>
                  <li>- collaborations</li>
                  <li>- artistic works (music videos, dance videos, painting, grafich novels, and whatever comes to your mind)</li>
                </ul>
              </div>
            </div>

          </div>
          <Footer />
        </>
    )
}

export default About;