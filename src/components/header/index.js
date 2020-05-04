import React from 'react'
import './header.css'

const Header = ({ children }) => (
  <header className='header'>
    <h1 className="header__title">our pricing</h1>
    {children}
  </header>
)

export default Header
