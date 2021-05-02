import './src/styles/global.css';
import React from 'react';
import { UserContextProvider } from './src/context/usercontext.js';
import { SearchContextProvider } from './src/context/searchcontext.js';
const wrapRootElement = ({ element }) => (
  <SearchContextProvider>
    <UserContextProvider>{element}</UserContextProvider>
  </SearchContextProvider>
);

export { wrapRootElement };
