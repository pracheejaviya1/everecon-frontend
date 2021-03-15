import React from 'react';
import Login from './login';
import plushie from '../assets/Images/default.jpg';

export default function Landing() {
  return (
    <div>
      <div style={{ height: '100px', width: '100px' }}>
        <img src={plushie} alt='piggy plushie' />
      </div>
      <Login />
    </div>
  );
}
