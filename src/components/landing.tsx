import * as React from 'react';
import landingImage from '../assets/Images/Rectangle6.png';
import CommunityCard from './cards/landing/landingCommunityCard';
import EventsCard from './cards/landing/landingEventsCard';
import Header from './header';

export default function Landing() {
  return (
    <div>
      <Header />
      <div className='m-auto'>
        <div className='m-10 flex align-items-center justify-evenly'>
          <img
            src={landingImage}
            className='h-80 w-120 rounded-lg'
            alt='piggy'
          />
          <div className='w-1/4 flex flex-col align-items-center justify-evenly '>
            <h1 className='font-inter font-extralight text-2xl'>ABOUT US</h1>
            <text className='font-mulish font-thin '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </span>
          </div>
        </div>
        <div className='m-10 flex flex-col'>
          <h1 className='m-4 text-xl text-center font-mulish font-medium'>
            Explore Communities
          </h1>
          <div className='flex align-items-center justify-evenly'>
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
          </div>
          <text className='m-10 text-center font-mulish text-blue-400 underline'>
            See more
          </span>
        </div>
        <div className='m-10 flex flex-col'>
          <h1 className='m-4 text-xl text-center font-mulish font-medium'>
            Explore Events
          </h1>
          <div className='flex align-items-center justify-evenly'>
            <EventsCard />
            <EventsCard />
            <EventsCard />
          </div>
          <text className='m-10 text-center font-mulish text-blue-400 underline'>
            See more
          </span>
        </div>
      </div>
    </div>
  );
}
