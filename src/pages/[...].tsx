import { Router } from '@reach/router';
import * as React from 'react';
import Signin from './signin';
import Signup from './signup';
import ViewCommunity from './View/ViewCommunity';
import ViewEvent from './View/ViewEvent';
import Search from './search';
import Members from './View/Members';
import CommunityEvents from './View/ViewCommunityEvents';
import Checkin from './Create/Event/CheckIn';

const App = () => (
  <Router>
    <Signin path='/signin' />
    <Signup path='/signup' />
    <ViewEvent path='/event/:uid' />
    <ViewCommunity path='/community/:uid' />
    <Search path='/search' />
    <CommunityEvents path='/communityevents/:uid' />
    <Members path='/communitymembers/:uid' />
    <Checkin path='/eventcheckin/:uid' />
  </Router>
);

export default App;
