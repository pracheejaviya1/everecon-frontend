import React from 'react';
import landingImage from '../assets/Images/default.jpg';
import CommunityCard from './cards/landingCommunityCard';
import EventsCard from './cards/landingEventsCard';
import Header from './header';

export default function Landing() {
  return (
    <div>
      <Header />
      <div className='m-auto'>
        <div className='m-10 flex align-items-center justify-evenly'>
          <img src={landingImage} className='h-80 w-80' alt='piggy' />
          <div className='w-1/2 flex flex-col align-items-center justify-evenly'>
            <h1>About us</h1>
            <text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </text>
          </div>
        </div>
        <div className='m-10 flex flex-col'>
          <h1 className='m-4 text-lg text-center'>Explore Communities</h1>
          <div className='flex align-items-center justify-evenly'>
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
          </div>
          <text className='m-10 text-center'>See more</text>
        </div>
        <div className='m-10 flex flex-col'>
          <h1 className='m-4 text-lg text-center'>Explore Events</h1>
          <div className='flex align-items-center justify-evenly'>
            <EventsCard />
            <EventsCard />
            <EventsCard />
          </div>
          <text className='m-10 text-center'>See more</text>
        </div>
      </div>
    </div>
  );
}
