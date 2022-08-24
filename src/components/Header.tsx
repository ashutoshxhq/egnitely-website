import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Box, Text } from '@chakra-ui/react';
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  console.log(isAuthenticated, user)
  return (
    <div className="div-block-5">
      <div className="div-block">
        <div className="div-block-2">
          <Link to="/">
            <img src="/egnitely.svg" loading="lazy" width="100" alt="Egnitely" className="image" />
          </Link>
        </div>
        <div className="div-block-4">
          <NavLink to="/" aria-current="page" className={({ isActive }) => isActive ? "button-2 active-nav-tem w-button" : "button-2 w-button"}>Home</NavLink>
          <NavLink to="/community" className={({ isActive }) => isActive ? "button-2 active-nav-tem w-button" : "button-2 w-button"}>Community</NavLink>
          {/* <a href="#" className="button-2 hidden w-button">Marketplace</a><a href="community.html" className="button-2 w-button">Community</a> */}
        </div>
        {isAuthenticated ? (
          <>
          <Box display={"flex"} justifyContent="space-between" alignItems={"center"} gap={4}>
            <Avatar size='sm' name={user?.nickname} />
            <Text color={"white"} fontFamily="Poppins" fontSize={"lg"}>Hi' {user?.nickname}</Text>
          </Box>
          </>
        ) : <div className="div-block-3">
          {/* <a href="#" className="button-2 hidden w-button">Contact</a> */}
          <span onClick={() => loginWithRedirect({
            screen_hint: "login"
          })} className="button-2 w-button">Login</span>

          <span onClick={() => loginWithRedirect({
            screen_hint: "signup"
          })} className="button w-button">Sign Up</span>
        </div>}

      </div>
    </div>
  )
}

export default Header