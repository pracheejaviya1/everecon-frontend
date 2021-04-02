import React from 'react';
import Landing from '../components/landing';
import Signin from '../components/signin';
import Signup from '../components/signup';
import Communities from './Explore/Communities';

export default function Home() {
  return (
    <div>
      <Signin />
      <Signup />
      <Landing />
      <Communities />
    </div>
  );
}
