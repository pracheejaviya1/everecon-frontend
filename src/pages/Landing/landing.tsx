import * as React from 'react';
import landingImage from '../../assets/Images/Rectangle6.png';
import CommunityCard from '../../components/cards/landing/landingCommunityCard';
import EventsCard from '../../components/cards/landing/landingEventsCard';
import Header from '../../components/header';
import { Link } from 'gatsby';

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
          <div className='w-1/3 flex flex-col align-items-center justify-evenly '>
            <h1 className='font-inter font-extralight text-2xl'>ABOUT US</h1>
            <span className='font-mulish font-thin '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </span>
          </div>
        </div>
        <div className='m-10 flex flex-col'>
          <h1 className='m-7 text-2xl text-center font-inter font-base'>
            Explore Communities
          </h1>
          <div className='flex align-items-center justify-evenly'>
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
          </div>
          <Link
            to='/Explore/Communities'
            className='m-10 text-center font-mulish text-blue-400 underline'
          >
            <span>See more</span>
          </Link>
        </div>
        <div className='m-10 flex flex-col'>
          <h1 className='m-7 text-2xl text-center font-inter font-base'>
            Explore Events
          </h1>
          <div className='flex align-items-center justify-evenly'>
            <EventsCard />
            <EventsCard />
            <EventsCard />
          </div>
          <Link
            to='/Explore/Events'
            className='m-10 text-center font-mulish text-blue-400 underline'
          >
            <span>See more</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
