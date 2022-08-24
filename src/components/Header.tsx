import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Box, Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, Link as Anchor } from '@chakra-ui/react';
import { FiChevronDown } from "react-icons/fi";
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
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
            <Menu>
              <MenuButton as={Box}>
                <Box display={"flex"} justifyContent="space-between" alignItems={"center"} gap={2}>
                  <Avatar size='sm' name={user?.nickname} mr={2} />
                  <Text color={"white"} fontFamily="Poppins" fontSize={"lg"}>Hi' {user?.nickname}</Text>
                  <FiChevronDown />
                </Box>
              </MenuButton>
              <MenuList backgroundColor={"#1c1c1c"}>
                <MenuItem onClick={() => {window.open("https://docs.egnitely.com", "_blank")}} >Documentation</MenuItem>
                <MenuItem as={Link} to="/support">Help & Support</MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>Logout</MenuItem>
              </MenuList>
            </Menu>

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