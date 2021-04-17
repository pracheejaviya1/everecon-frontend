import * as React from 'react';
import landingImage from '../assets/Images/default.jpg';
import Header from './header';

export default function Landing() {
  return (
    <div>
      <Header />
      <div>
        <span>Create Community</span>
        <span>Edit Profile</span>
        <span>Log out</span>
      </div>
      <div>
        <img src={landingImage} />
        <span> NAME</span>
        <span>Location</span>
      </div>
      <div>
        <ul>
          <li>Following</li> {/*Add respective cards */}
          <li>Tickets</li>
          <li>Favourites</li>
          <li>Hisotry</li>
          <li>My Communities</li>
        </ul>
      </div>
      <hr />
    </div>
  );
}
