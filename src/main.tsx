import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-qgdysq-r.us.auth0.com"
        clientId="8QBsWM8EwrQG0CxmKJoziLR1BRgZxYYi"
        redirectUri={window.location.origin}
        useRefreshTokens
        cacheLocation="localstorage"
        scope="read:current_user update:current_user_metadata"
      >
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
)
