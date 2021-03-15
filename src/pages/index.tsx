import React from 'react';
import Signin from '../components/signin';
import Signup from '../components/signup';

export default function Home() {
  return (
    <div>
      <Signup />
      <Signin />
    </div>
  );
}
