import React from 'react';
import Events from '../components/Events';
import Landing from '../components/landing';
import Signin from '../components/signin';
import Signup from '../components/signup';
import Communities from './Explore/Communities';
import ViewEvent from './Explore/CommunityView';

export default function Home() {
  return (
    <div>
      <Signin />
      <Signup />
      <Landing />
      <Communities />
      <ViewEvent />
      <Events title='Name' />
    </div>
  );
}
