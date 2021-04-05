import React from 'react';
import Header from './header';
import landingImage from '../assets/Images/default.jpg';

export default function Landing() {
  return (
    <div>
      <Header />
      <div>
        <text> Create Community </text>
        <text> Edit Profile </text>
        <text> Log out </text>
      </div>
      <div>
        <img src={landingImage} />
        <text> NAME</text>
        <text>Location</text>
      </div>
      <div>
        <ul>
          <li>Following</li>
          <li>Tickets</li>
          <li>Favourites</li>
          <li>Hisotry</li>
        </ul>
      </div>
      <hr />
    </div>
  );
}
