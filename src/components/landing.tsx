import React from 'react';
import landingImage from '../assets/Images/default.jpg';
import CommunityCard from '../components/cards/community';
import EventsCard from '../components/cards/events';
import Header from './header';

export default function Landing() {
  return (
    <div>
      <Header />
      <img src={landingImage} alt='piggy' />
      <h1>About us</h1>
      <text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      </text>
      <h1>Explore Communities</h1>
      <CommunityCard />
      <h1>Explore Events</h1>
      <EventsCard />
    </div>
  );
}
