import { Router } from '@reach/router';
import * as React from 'react';
import Signin from './signin';
import Signup from './signup';
import ViewCommunity from './View/ViewCommunity';
import ViewEvent from './View/ViewEvent';
import Search from './search';

const App = () => (
  <Router>
    <Signin path='/signin' />
    <Signup path='/signup' />
    <ViewEvent path='/event/:uid' />
    <ViewCommunity path='/community/:uid' />
    <Search path='/search' />
  </Router>
);

export default App;
