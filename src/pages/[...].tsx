import { Router } from '@reach/router';
import * as React from 'react';
import Checkin from './Create/Event/CheckIn';
import Search from './search';
import Signin from './signin';
import Signup from './signup';
import Members from './View/Members';
import ViewCommunity from './View/ViewCommunity';
import CommunityEvents from './View/ViewCommunityEvents';
import ViewEvent from './View/ViewEvent';

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
