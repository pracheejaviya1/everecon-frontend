import { Router } from '@reach/router';
import * as React from 'react';
import Signin from './Signin/signin';
const Page = props => <div>{props.page}</div>;

const App = () => (
  <Router>
    <Signin path='/' />
    <Page path='view/event/:page' />
    <Page path='view/community/:page' />
  </Router>
);

export default App;
