import { Router } from '@reach/router';
import * as React from 'react';
import Signin from './signin';
import Signup from './signup';
import ViewCommunity from './View/ViewCommunity';
import ViewEvent from './View/ViewEvent';

const App = () => (
  <Router>
    <Signin path='/signin' />
    <Signup path='/signup' />
    <ViewEvent path='/event/:uid' />
    <ViewCommunity path='/community/:uid' />
  </Router>
);

export default App;