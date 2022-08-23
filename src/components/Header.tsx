import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="div-block-5">
      <div className="div-block">
        <div className="div-block-2"><img src="/egnitely.svg" loading="lazy" width="100" alt="Egnitely" className="image" /></div>
        <div className="div-block-4">
          <NavLink to="/" aria-current="page" className={({ isActive }) => isActive ? "button-2 active-nav-tem w-button" : "button-2 w-button"}>Home</NavLink>
          <NavLink to="/community" className={({ isActive }) => isActive ? "button-2 active-nav-tem w-button" : "button-2 w-button"}>Community</NavLink>
          {/* <a href="#" className="button-2 hidden w-button">Marketplace</a><a href="community.html" className="button-2 w-button">Community</a> */}
        </div>
        <div className="div-block-3">
          {/* <a href="#" className="button-2 hidden w-button">Contact</a> */}
          <Link to="/login" className="button-2 w-button">Login</Link>
          <Link to="/register" className="button w-button">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Header