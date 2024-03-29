import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
  return (
    <nav className='header'>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </nav>
  );
};

export default Header;