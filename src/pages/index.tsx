import * as React from 'react';
import Dropdown from '../components/dropdown';
import Signin from './Signin/signin';

export default function Home() {
  return (
    <div className='w-screen'>
      <Signin />
      <Dropdown />
    </div>
  );
}
