import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { HashRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Auth0Provider
        domain="dev-qgdysq-r.us.auth0.com"
        clientId="8QBsWM8EwrQG0CxmKJoziLR1BRgZxYYi"
        redirectUri={window.location.origin}
        useRefreshTokens
        cacheLocation="localstorage"
        scope="read:current_user update:current_user_metadata"
      >
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Auth0Provider>
    </HashRouter>
  </React.StrictMode>
)
