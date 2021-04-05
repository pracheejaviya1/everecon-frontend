import React from 'react';
import image from '../assets/Images/ahmedabad.jpeg';
import EventCard from './cards/EventCard';
import Header from './header';

type Props = {
  title: string;
};

export default function Events(props: Props) {
  return (
    <div className='m-2 border-b-2 border-black'>
      <Header />
      <div className='flex items-start justify-around my-2 mx-auto w-3/4'>
        <div className='w-1/5'>
          <img className='mt-8 mb-4 rounded-lg' src={image} alt='image' />
          <h1 className='my-4 text-center text-lg font-bold'>
            {props.title.toUpperCase()}
          </h1>
        </div>
        <div className='w-3/5'>
          <div className='border-b-2 p-4 flex items-center justify-between'>
            <h2 className='font-bold'>Events</h2>
            <button className='bg-gray-200 rounded-xl font-light px-6 py-2'>
              Past
            </button>
          </div>
          <EventCard
            datetime={new Date()}
            numAttendees={100}
            title='Some title'
          />
          <EventCard
            datetime={new Date()}
            numAttendees={120}
            title='Some another title'
          />
        </div>
      </div>
    </div>
  );
}
