import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Box, Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, Link as Anchor } from '@chakra-ui/react';
import { FiChevronDown, FiExternalLink } from "react-icons/fi";
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
          <NavLink to="/marketplace" className={({ isActive }) => isActive ? "button-2 active-nav-tem w-button" : "button-2 w-button"}>Marketplace</NavLink>
          <NavLink to="/support" className={({ isActive }) => isActive ? "button-2 active-nav-tem w-button" : "button-2 w-button"}>Support</NavLink>
          <Anchor color={"subtle"} display="flex" justifyContent={"center"} alignItems={"center"} gap={2} href="https://developer.egnitely.com" target={"_blank"} className={"button-2 w-button"}>Developer & Docs <FiExternalLink /></Anchor>
          {/* <a href="#" className="button-2 hidden w-button">Marketplace</a><a href="community.html" className="button-2 w-button">Community</a> */}
        </div>
        {isAuthenticated ? (
          <>
            <Box display="flex" justifyContent={"center"} alignItems={"center"} gap={4}>
              <Button onClick={() => {
                window.open("https://app.egnitely.com/")
              }} colorScheme={"orange"}>Go to Console</Button>
              <Menu>
                <MenuButton as={Box}>
                  <Box display={"flex"} justifyContent="space-between" alignItems={"center"} gap={1}>
                    <Avatar size='sm' name={user?.nickname} mr={2} />
                    {/* <Text color={"white"} fontFamily="Poppins" fontSize={"lg"}>Hi' {user?.nickname}</Text> */}
                    {/* <FiChevronDown /> */}
                  </Box>
                </MenuButton>
                <MenuList backgroundColor={"#1c1c1c"}>
                  <MenuItem onClick={() => { window.open("https://app.egnitely.com/settings") }} >User Profile</MenuItem>
                  <MenuItem onClick={() => { window.open("https://app.egnitely.com/projects") }} >Projects</MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={() => { window.open("https://developer.egnitely.com", "_blank") }} >Developers</MenuItem>
                  <MenuItem as={Link} to="/support">Help & Support</MenuItem>
                  <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>Logout</MenuItem>
                </MenuList>
              </Menu>
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