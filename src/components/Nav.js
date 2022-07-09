import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css'

const Nav = () => {
  return (
    <div className='Link'>
        <div id="links">
            <Link to='/' id='link'>Home</Link>
            <Link to='/About' id='link' >About</Link>
            <Link to='/Contact' id='link'>Contact</Link>
            <Link to='/Products' id='link'>Products</Link>
            <Link to='/Login' id='link'>Login</Link>
        </div>
    </div>
  )
}

export default Nav