import {React, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../App.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import './Manifesto.css';

export default function Manifesto() {

  const Manifesto = props => {
    const location = useLocation();
    useEffect(() => {
      return () => {
        <Link to="/manifesto" className="link" style={{color: 'black'}}>
              manifesto
        </Link>
      };
    }, [location])
  }


    return (
        <>
          <Navbar />
          <header className="header" id='manifesto-header'>
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

          <section className="manifesto">
            <h1 className='manifesto-title'>the manifesto</h1>
            <p>A manifesto has to be loud, but elegant nonetheless. It has to go straight to the point: it is what it is, it hides nothing; it, simply, is. It has to look for some absolute principles that aren’t absolute, as they can always change, because free thought is the maximum expression of loyalty toward truth. A manifesto, above all, must not leave people unresponsive. Or does it have to not be boring?</p>
            
            <p>Transparency, frankness, <em>parrhesia</em>.</p> 
            <p>We manifest that we cannot subjugate ourselves to a flat and unvarying description of reality.
            We manifest that this world doesn’t satisfy us. We manifest that we are furious, and have been since 1997, or even before, or even after, but as a matter of fact, furious we stay.</p>

            <p><em>rassegnazionestampa</em> is a pun. In Italian, “press release” is “rassegna stampa” (rassegna= release, stampa= press). This, instead of being a “rassegna stampa”, is a “rassegnazione stampa”, literally “resignation press”.
            If you aren’t Italian this won’t make you laugh and since «popularity is the slutty little cousin of prestige» we don’t care.
            Right!, we manifest that we want to be ironic. We manifest that those who manifest to be ironic, aren't.</p> 
    
            <p>Now, in this historical period, more than ever, has the necessity to widen canons been this overwhelming. The world lives on in a stinginess and flatness that inhibits the lively and stimulated thought.<br /> 
            We demand to become a community that manages, through the experiences of the individual, to emancipate itself, and to climb over the walls of oppression.
            We invite the kind customers to reflect individually, critically and cynically. We invite them to enlighten, reinvent and tear reality apart.</p> 
    
            <p>We want to say the truth without being clouded by the made-up costumes of society.
            We want to be clear and transparent, fluid and impetuous, just like the water that flows in the rivers.
            We want to keep supporting the idea that there is always something more under the monotonous surface of the daily.
            We want to demolish the immunitary system of conventions.
            We want to be united to give life to well-reasoned thoughts, to give proper weight to words, always conscious of the fact that vocabularies change.
            We want to be independent and to make our vulnerabilities the means to create paths on which thoughts flow.
            We want to be disobedient, because only by detaching ourselves from rules can we be aware of their worth. The rules that we like aren’t constraints, rather, they are the space in which to generate authentic values.</p> 
    
            <p>This place could become our place in which we can scream, whisper, incite and, why not (?), arouse. Art and  words are our, your weapon. Let’s use them!<br />
            We of rassegnazionestampa want you, Resignated, Infuriated and Bored people alike, with us. Think, criticise, disobey!</p>
          </section>
          <Footer />
        </>
    )
}